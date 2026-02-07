onload = () =>{
    document.body.classList.remove("container");
};

const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.querySelector(".card");


noBtn.addEventListener("mouseenter", () => {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width - 10;
    const maxY = cardRect.height - btnRect.height - 10;

    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
});

yesBtn.addEventListener("click", () => {
    confetti({
    particleCount: 260,
    spread: 120,
    origin: { y: 0.65 }
    });

    setTimeout(() => {
    alert("YAY 💕 I can’t wait for Valentine’s Day with you!");
    }, 500);
});

function createHeart() {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.fontSize = Math.random() * 22 + 14 + "px";
      heart.style.animationDuration = Math.random() * 3 + 4 + "s";
      heart.style.opacity = Math.random() * 0.5 + 0.4;

      document.body.append(heart);
      setTimeout(() => heart.remove(), 8000);
    }

    setInterval(createHeart, 750);
