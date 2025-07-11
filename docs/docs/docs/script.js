// Show content after garage door opens
window.onload = () => {
  setTimeout(() => {
    document.querySelector('.container').style.display = 'block';
    startTyping();
  }, 3100);
};

const text = `One day, I fear that I might be left alone in this cruel world, which feels selfish. 
But you’re the only one I have, and I love you more than words can express. 

I miss you so much, and I’m incredibly grateful to have you in my life. You’re everything to me — my solution, my magical world.

I imagine myself living in the world you’ve created for me, where I feel safe and loved. 
I love being in your arms. Without you, this world feels boring and dull, as if it’s black and white. 
But with you, it’s full of colors, love, and joy. You’re the best part of my life.

You are my sunshine, my only sunshine, and you make me so, so happy. 
I want to live in this magical world of ours forever, and never leave. 
You are my everything — my heart, my soul, my world.`;

let i = 0;
function startTyping() {
  const msg = document.getElementById("animated-msg");
  if (i < text.length) {
    msg.innerHTML += text.charAt(i);
    i++;
    setTimeout(startTyping, 25);
  }
}
