// Garage open + typewriter trigger
window.onload = () => {
  setTimeout(() => {
    document.querySelector('.container').style.display = 'block';
    startTyping();
  }, 3100);
};

// Typing Animation
const text = `One day, I fear that I might be left alone in this cruel world, which feels selfish. 
But you’re the only one I have, and I love you more than words can express. 

I miss you so much, and I’m incredibly grateful to have you in my life. You’re everything to me — my solution, my magical world.

Without you, this world feels boring and dull, as if it’s black and white. 
But with you, it’s full of colors, love, and joy. You’re the best part of my life.

You are my sunshine, and you make me so, so happy.`;

let i = 0;
function startTyping() {
  const msg = document.getElementById("animated-msg");
  if (i < text.length) {
    msg.innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 25);
  }
}

// Quiz Logic
function checkAnswers() {
  const q1 = document.getElementById("q1").value.trim().toLowerCase();
  const q2 = document.getElementById("q2").value.trim().toLowerCase();
  const q3 = document.getElementById("q3").value.trim().toLowerCase();
  if (q1 === "hugs" && q2 === "black" && q3 === "batman") {
    document.getElementById("quiz-result").innerText = "Correct! Unlocking your surprise...";
    setTimeout(() => {
      document.getElementById("surprise").style.display = "block";
    }, 1000);
  } else {
    document.getElementById("quiz-result").innerText = "Oops! Try again 🧐";
  }
}
