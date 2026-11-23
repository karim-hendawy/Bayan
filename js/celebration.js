import confetti from "canvas-confetti";

const colors = ["#f06292", "#ffc107", "#4fc3f7", "#6cc551", "#9575cd", "#ff8a65"];

window.celebrateDailyMission = () => {
  const options = { colors, disableForReducedMotion: true };
  confetti({
    ...options,
    particleCount: 180,
    spread: 360,
    startVelocity: 52,
    gravity: 0.82,
    scalar: 1.08,
    origin: { x: 0.5, y: 0.38 }
  });
  window.setTimeout(() => {
    confetti({
      ...options,
      particleCount: 36,
      angle: 60,
      spread: 62,
      startVelocity: 36,
      origin: { x: 0.02, y: 0.72 }
    });
    confetti({
      ...options,
      particleCount: 36,
      angle: 120,
      spread: 62,
      startVelocity: 36,
      origin: { x: 0.98, y: 0.72 }
    });
  }, 180);
};

window.celebrateGameWin = () => {
  const options = { colors, disableForReducedMotion: true };
  confetti({
    ...options,
    particleCount: 220,
    spread: 360,
    startVelocity: 58,
    gravity: 0.78,
    scalar: 1.12,
    origin: { x: 0.5, y: 0.38 }
  });
  window.setTimeout(() => {
    confetti({
      ...options,
      particleCount: 70,
      angle: 60,
      spread: 80,
      startVelocity: 46,
      origin: { x: 0.08, y: 0.38 }
    });
    confetti({
      ...options,
      particleCount: 70,
      angle: 120,
      spread: 80,
      startVelocity: 46,
      origin: { x: 0.92, y: 0.38 }
    });
  }, 160);
};

window.celebrateAnswerCorrect = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const options = { colors, disableForReducedMotion: true };
  confetti({
    ...options,
    particleCount: 110,
    spread: 360,
    startVelocity: 46,
    gravity: 0.86,
    scalar: 0.92,
    origin: { x: 0.5, y: 0.42 }
  });
  window.setTimeout(() => {
    confetti({
      ...options,
      particleCount: 36,
      angle: 70,
      spread: 48,
      startVelocity: 32,
      origin: { x: 0.12, y: 0.42 }
    });
    confetti({
      ...options,
      particleCount: 36,
      angle: 110,
      spread: 48,
      startVelocity: 32,
      origin: { x: 0.88, y: 0.42 }
    });
  }, 120);
};
