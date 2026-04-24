
  function atualizarContador() {
    const agora = new Date();
    
    // Data alvo: 28 de junho de 2026 às 16:00
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

  setInterval(atualizarContador, 1000);