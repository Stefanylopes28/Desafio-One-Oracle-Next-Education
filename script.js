const imagensDeFundo = [
    'url("imagem fundo1/fundoo.png")',
    'url("imagem fundo 2/fundooo.png")',
    'url("imagem fundo3/fundoooo.png")',
    'url("imagem fundo4/fundooooo.png")',
    'url("imagemfundo5/fundoooooo.png")',
    'url("imagem fundo6/fundooooooo.png")',
    'url("imagem fundo7/fundoooooooo.png")',
    'url("imagem fundo8/fundooooooooo.png")',
    'url("imagem fundo9/fundooooooooooo.png")',
    'url("imagem fundo10/fundoooooooooooo.png")',
    'url("imagem fundo11/fundooooooooooooo.png")',
    'url("imagem fundo12/fundoooooooooooooo.png")',
    
];

let indiceAtual = 0;

function trocarImagemDeFundo() {
    document.body.style.backgroundImage = imagensDeFundo[indiceAtual];
    indiceAtual = (indiceAtual + 1) % imagensDeFundo.length;
}

setInterval(trocarImagemDeFundo, 1000);

function limparResultado() {
    const resultText = document.getElementById('resultText');
    resultText.value = "";
}

function validarEntrada(texto) {
    const hasUpperCase = /[A-Z]/.test(texto);
    const hasAccent = /[áéíóúãâêîôû]/.test(texto);

    if (hasUpperCase) {
        alert('Erro: Use apenas letras minúsculas.');
        return false;
    }

    if (hasAccent) {
        alert('Erro: Não utilize acentos.');
        return false;
    }

    return true;
}

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function criptografar() {
    const inputText = document.getElementById('inputText').value;

    if (!validarEntrada(inputText)) {
        return;
    }

    const normalizedText = normalizarTexto(inputText);
    const resultText = normalizedText.split('').reverse().join('');
    document.getElementById('resultText').value = resultText || "Nenhuma mensagem encontrada, digite um texto que você deseja criptografar ou descriptografar.";
}

function descriptografar() {
    const inputText = document.getElementById('inputText').value;

    if (!validarEntrada(inputText)) {
        return;
    }

    const normalizedText = normalizarTexto(inputText);
    const resultText = normalizedText.split('').reverse().join('');
    document.getElementById('resultText').value = resultText || "Nenhuma mensagem encontrada, digite um texto que você deseja criptografar ou descriptografar.";
}

function copiarTexto() {
    const resultText = document.getElementById('resultText');
    resultText.select();
    resultText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert('Texto copiado para a área de transferência');
}
