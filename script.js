const carrossel = document.querySelector('.carrossel');

// DUPLICA os cards (loop infinito)
carrossel.innerHTML += carrossel.innerHTML;

let scrollAmount = 0;
const velocidade = 0.8;
let pausado = false;

function animar() {
  if (!pausado) {
    scrollAmount += velocidade;

    // quando chega na metade (fim da primeira lista)
    if (scrollAmount >= carrossel.scrollWidth / 2) {
      scrollAmount = 0;
    }

    carrossel.scrollLeft = scrollAmount;
  }

  requestAnimationFrame(animar);
}

animar();

// pausa no toque (mobile)
carrossel.addEventListener("touchstart", () => {
  pausado = true;
});

carrossel.addEventListener("touchend", () => {
  pausado = false;
});

//Contador
function atualizarContador() {
  const agora = new Date();
  const destino = new Date("2026-06-28T16:00:00");

  const diferenca = destino - agora;

  if (diferenca <= 0) {
    document.getElementById("tempo").innerHTML = "Chegou o grande dia!";
    return;
  }

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("tempo").innerHTML =
    dias + " dias, " +
    horas + " horas, " +
    minutos + " minutos, " +
    segundos + " segundos";
}

// inicia imediatamente + atualiza a cada 1s
atualizarContador();
setInterval(atualizarContador, 1000);