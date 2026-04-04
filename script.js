const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.innerHTML = "🔊";
  } else {
    music.pause();
    musicBtn.innerHTML = "🎵";
  }
});


document.getElementById("openBtn").addEventListener("click", openLetter);

function openLetter() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>For You</h2>
    <div class="letter fade-in">
Marizz, there's something that I've been keeping to myself for a long time already, pero nahihiya lang ako. I started liking you ever since our Grade 11 days; at first, I thought it was just a mere happy crush. Back then, it was just a simple happy crush, nothing too serious. I even tried to move on, pero during our Gala Night where we were partners, all those feelings came flooding back. Spending more time with you helped me understand that what I have for you isn't a mere happy crush

In fact, I actually enjoy chatting with you and being with you. Everything feels very natural with you. I’d really like to get to know you more. I don’t expect anything from you, and it’s totally okay if you don’t feel the same way. I just wanted to be honest and let you know how I feel, kasi I think it’s better to say it than keep it to myself. I hope this won’t make things awkward, promise.

— Kent
    </div>
    <br>
    <button id="continueBtn">Continue</button>
    
  `;

  document.getElementById("continueBtn").addEventListener("click", endMessage);
  
}


function endMessage() {
  document.getElementById("content").innerHTML = `
    <h2>Thank you for reading 💛</h2>
    <p>No matter what, I’m really glad I told you.</p>
    <button id="backBtn">Back</button>
  `;

  document.getElementById("backBtn").addEventListener("click", openLetter);
}


function createHearts() {
  const container = document.querySelector(".hearts");

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";

    // random position & size
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    // random speed
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);
  }, 400);
}
createHearts();