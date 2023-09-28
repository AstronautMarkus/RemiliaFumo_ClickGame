// script.js

var music_bg = new Audio();
music_bg.src = "./music_background.mp3";

// Función para reproducir el sonido
function playSound() {
  if (music_bg.paused) {
    music_bg.currentTime = 0;
    music_bg.loop = true; // Establece el bucle infinito
    music_bg.play();
  }
}

// Función para pausar el sonido
function pauseSound() {
  if (!music_bg.paused) {
    music_bg.pause();
  }
}

function restartSound() {
  if (!music_bg.paused) {
    music_bg.currentTime = 0;
    music_bg.play();
  }
}
