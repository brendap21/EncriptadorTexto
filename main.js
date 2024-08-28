
function encriptarTexto() {
    // Lógica de encriptación (puedes reemplazar esto con la lógica real)
    const textoIngresado = document.querySelector('.presentacion-input-text').value;
    const textoEncriptado = btoa(textoIngresado); // Esto es solo un ejemplo de encriptación básica

    mostrarResultado(textoEncriptado);
}

function desencriptarTexto() {
    // Lógica de desencriptación (puedes reemplazar esto con la lógica real)
    const textoIngresado = document.querySelector('.presentacion-input-text').value;
    const textoDesencriptado = atob(textoIngresado); // Esto es solo un ejemplo de desencriptación básica

    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    // Ocultar la imagen y el mensaje inicial
    document.getElementById('illustration').style.display = 'none';
    document.getElementById('no-message').style.display = 'none';

    // Mostrar el resultado en la caja de texto
    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
    resultText.textContent = texto;
    resultBox.style.display = 'block';
}

function copiarTexto() {
    const resultText = document.getElementById('result-text').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Texto copiado al portapapeles');
    });
}
