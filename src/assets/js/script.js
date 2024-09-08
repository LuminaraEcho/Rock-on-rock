function iniciarCronometro(fimDoEvento) {
  const diasElemento = document.getElementById('dias');
  const horasElemento = document.getElementById('horas');
  const minutosElemento = document.getElementById('minutos');
  const segundosElemento = document.getElementById('segundos');

  function atualizarCronometro() {
      const agora = new Date().getTime();
      const tempoRestante = fimDoEvento - agora;

      const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
      const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

      diasElemento.innerHTML = dias < 10 ? '0' + dias : dias;
      horasElemento.innerHTML = horas < 10 ? '0' + horas : horas;
      minutosElemento.innerHTML = minutos < 10 ? '0' + minutos : minutos;
      segundosElemento.innerHTML = segundos < 10 ? '0' + segundos : segundos;

      if (tempoRestante < 0) {
          clearInterval(intervalo);
          document.getElementById('cronometro').innerHTML = "Evento Encerrado";
      }
  }

  const intervalo = setInterval(atualizarCronometro, 1000);
}

const dataDoEvento = new Date("Dec 31, 2024 23:59:59").getTime();
iniciarCronometro(dataDoEvento);
