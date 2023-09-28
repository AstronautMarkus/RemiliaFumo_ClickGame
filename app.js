var sound = new Audio();
sound.src = "./Squeaky.mp3";

// Variable para llevar un seguimiento del número de clics
let clickCounter = 0;

// Función para reproducir el sonido y contar los clics
function playSound() {
    // Incrementar el contador de clics
    clickCounter++;
    
    // Reiniciar la reproducción al principio del sonido
    sound.currentTime = 0;
    sound.play();

    // Mostrar el contador en el toast
    showToast();
}

// Función para mostrar el toast con el número de clics
function showToast() {
    var liveToast = document.getElementById("liveToast");
    var toastBody = document.querySelector(".toast-body");
    toastBody.textContent = "Clicks contados: " + clickCounter;
    var toast = new bootstrap.Toast(liveToast);
    toast.show();
}




// Asociar la función playSound al evento click de la imagen de Remilia Fumo
document.querySelector(".img").addEventListener("click", playSound);

// Agregar un manejador de eventos al botón "Play music"
document.getElementById("playMusic").addEventListener("click", function () {
    playSound();
});

// Agregar un manejador de eventos al botón "Pause music"
document.getElementById("pauseMusic").addEventListener("click", function () {
    pauseSound();
});

// Agregar un manejador de eventos al botón "Restart music"
document.getElementById("restartMusic").addEventListener("click", function () {
    restartSound();
});



const movableImg = document.getElementById('movable-img');

function moveImage() {
    const maxX = window.innerWidth - movableImg.clientWidth;
    const maxY = window.innerHeight - movableImg.clientHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    movableImg.style.transform = `translate(${randomX}px, ${randomY}px)`;

    // Asegúrate de que la imagen no se salga de los límites de la ventana del navegador
    if (parseInt(movableImg.style.left) < 0) {
        movableImg.style.left = '0px';
    } else if (parseInt(movableImg.style.left) > maxX) {
        movableImg.style.left = maxX + 'px';
    }

    if (parseInt(movableImg.style.top) < 0) {
        movableImg.style.top = '0px';
    } else if (parseInt(movableImg.style.top) > maxY) {
        movableImg.style.top = maxY + 'px';
    }
}

movableImg.addEventListener('click', () => {
    movableImg.classList.toggle('active');
    moveImage();
});

