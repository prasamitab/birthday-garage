document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const answers = {
    q1: "hugs",
    q2: "black",
    q3: "batman"
  };

  const formData = new FormData(event.target);
  let correct = true;

  for (let [key, value] of formData.entries()) {
    if (value.toLowerCase().trim() !== answers[key]) {
      correct = false;
      break;
    }
  }

  if (correct) {
    document.getElementById("result").style.display = "block";
  } else {
    alert("Oops! One or more answers are wrong. Try again! 💡");
  }
});
