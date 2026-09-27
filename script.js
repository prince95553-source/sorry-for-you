const button = document.getElementById("heartButton");
const fill = document.getElementById("meterFill");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status");
const hint = document.getElementById("hint");
const toast = document.getElementById("toast");

let forgiven = 50;

const messages = [
  "Okay… I think my chances are improving 🥺",
  "One more tap? My heart is still waiting ❤️",
  "You're making me smile again 🥹",
  "Almost there… I promise I'll be more careful 💗",
  "100%! Thank you for forgiving me, my love! ❤️"
];

button.addEventListener("click", () => {
  forgiven = Math.min(100, forgiven + 10);

  fill.style.width = forgiven + "%";
  percentage.textContent = forgiven + "% FORGIVEN";

  const index = Math.min(Math.floor((forgiven - 50) / 10), messages.length - 1);
  status.textContent = messages[index];

  createHearts();

  if (forgiven >= 100) {
    hint.textContent = "My heart is healed! I love you ❤️";
    button.querySelector("span").textContent = "♥";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2400);
  }
});

function createHearts() {
  for (let i = 0; i < 5; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.textContent = ["❤️", "💕", "💗", "💖"][Math.floor(Math.random() * 4)];
    heart.style.left = (window.innerWidth / 2 + (Math.random() * 150 - 75)) + "px";
    heart.style.top = (window.innerHeight - 170 + Math.random() * 30) + "px";
    heart.style.animationDelay = (i * 0.07) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1900);
  }
}
