const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");

// O navegador só tenta tocar a música depois de uma ação do visitante.
playPauseBtn.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
      playPauseBtn.textContent = "⏸️ Pausar música";
      playPauseBtn.setAttribute("aria-pressed", "true");
    } catch (error) {
      // Mantém o controle consistente caso o navegador não consiga tocar o áudio.
      playPauseBtn.textContent = "▶️ Tentar tocar novamente";
      playPauseBtn.setAttribute("aria-pressed", "false");
      console.error("Não foi possível reproduzir a música:", error);
    }
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️ Tocar música";
    playPauseBtn.setAttribute("aria-pressed", "false");
  }
});

// Se a música terminar, o botão volta ao estado inicial.
audio.addEventListener("ended", () => {
  playPauseBtn.textContent = "▶️ Tocar música";
  playPauseBtn.setAttribute("aria-pressed", "false");
});
