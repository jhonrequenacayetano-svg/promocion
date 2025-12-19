const playButton = document.getElementById('playButton');
const audio = document.getElementById('bgMusic');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.innerText = "⏸ Pausar Música";
    } else {
        audio.pause();
        playButton.innerText = "🎵 Tocar Música";
    }
});