const carrossel = document.querySelector('.carrossel');

// duplica os cards (loop infinito)
carrossel.innerHTML += carrossel.innerHTML;

let scrollAmount = 0;
let velocidade = 0.6;

let isDown = false;
let startX;
let scrollStart;
let pausado = false;

// ==========================
// 🎞 AUTOPLAY
// ==========================
function animar() {
  if (!pausado && !isDown) {
    scrollAmount += velocidade;

    if (scrollAmount >= carrossel.scrollWidth / 2) {
      scrollAmount = 0;
    }

    carrossel.scrollLeft = scrollAmount;
  }

  requestAnimationFrame(animar);
}

animar();

// ==========================
// 👆 SWIPE (TOQUE)
// ==========================
carrossel.addEventListener("touchstart", (e) => {
  isDown = true;
  pausado = true;
  startX = e.touches[0].pageX;
  scrollStart = carrossel.scrollLeft;
});

carrossel.addEventListener("touchmove", (e) => {
  if (!isDown) return;

  const x = e.touches[0].pageX;
  const walk = (startX - x);

  carrossel.scrollLeft = scrollStart + walk;
});

carrossel.addEventListener("touchend", () => {
  isDown = false;
  pausado = false;
});

// ==========================
// 🖱 SWIPE (DESKTOP também)
// ==========================
carrossel.addEventListener("mousedown", (e) => {
  isDown = true;
  pausado = true;
  startX = e.pageX;
  scrollStart = carrossel.scrollLeft;
});

carrossel.addEventListener("mousemove", (e) => {
  if (!isDown) return;

  const walk = (startX - e.pageX);
  carrossel.scrollLeft = scrollStart + walk;
});

carrossel.addEventListener("mouseup", () => {
  isDown = false;
  pausado = false;
});

carrossel.addEventListener("mouseleave", () => {
  isDown = false;
  pausado = false;
});


// ==========================
// ⏳ CONTADOR
// ==========================
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

atualizarContador();
setInterval(atualizarContador, 1000);