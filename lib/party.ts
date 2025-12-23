export const fireConfetti = async () => {
  if (typeof window === "undefined") return;
  const { default: confetti } = await import("canvas-confetti");
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#f7b7d4", "#c5a8ff", "#f6c177", "#ff7f50"]
  });
};

