const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️ Pausar";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️ Tocar";
  }
});