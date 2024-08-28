function encriptarTexto() {
    const textoIngresado = document.querySelector('.presentacion-input-text').value;
    if (textoIngresado === "") {
        resetearVista(); // Llama a la función para restablecer la vista
    } else {
        const textoEncriptado = textoIngresado
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        mostrarResultado(textoEncriptado);
    }
}

function desencriptarTexto() {
    const textoIngresado = document.querySelector('.presentacion-input-text').value;
    if (textoIngresado === "") {
        resetearVista(); // Llama a la función para restablecer la vista
    } else {
        const textoDesencriptado = textoIngresado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        mostrarResultado(textoDesencriptado);
    }
}

function mostrarResultado(texto) {
    document.getElementById('illustrationNotFound').style.display = 'none';
    document.getElementById('no-message').style.display = 'none';

    const resultBox = document.getElementById('result-box');
    const resultText = document.getElementById('result-text');
    resultText.textContent = texto;
    resultBox.style.display = 'block';
}

function resetearVista() {
    document.getElementById('illustrationNotFound').style.display = 'block';
    document.getElementById('no-message').style.display = 'block';
    document.getElementById('result-box').style.display = 'none';
    document.querySelector('.presentacion-input-text').value = ""; // Opcional: borrar el texto ingresado
}

function copiarTexto() {
    const resultText = document.getElementById('result-text').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Texto copiado al portapapeles');
    });
}
