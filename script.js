const MIN_NUMERO = 1;
const MAX_NUMERO = 100;
let numeroAzar = Math.floor(Math.random() * (MAX_NUMERO)) + MIN_NUMERO;

let mensaje = document.getElementById("mensaje");
let numeroEntrada = document.getElementById("numeroEntrada");
let intento = document.getElementById("intento");
let intentos = 0;

function chequearResultado() {
    intentos++;
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < MIN_NUMERO || numeroIngresado > MAX_NUMERO || isNaN(numeroIngresado)) {
        mensaje.textContent = "Por favor, introduce un número válido entre 1 y 100";
        mensaje.style.color = "red";
        return;
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = `¡Felicitaciones, has adivinado en ${intentos} intentos!`;
        mensaje.style.color = "green";
        numeroEntrada.disabled = true;
        
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "Más alto";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Más bajo";
        mensaje.style.color = "red";
    }
}

function reiniciarJuego() {
    numeroAzar = Math.floor(Math.random() * (MAX_NUMERO)) + MIN_NUMERO;
    intentos = 0;
    mensaje.textContent = "Juega de nuevo";
    mensaje.style.color = "black";
    numeroEntrada.value = "";
    numeroEntrada.disabled = false;
    intento.textContent = "0";
}

