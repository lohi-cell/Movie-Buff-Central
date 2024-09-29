// Quote of the Day
const quotes = [
    "With great power comes great responsibility.",
    "This is all my fault. I can't save everyone.",
    "The multiverse is a concept about which we know frighteningly little.",
    "I’m Spider-Man. No Way Home.",
    "You’re flying out into the darkness to fight ghosts, Peter."
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('random-quote').textContent = quotes[randomIndex];
  }
  
  // Trivia Quiz
  function submitQuiz() {
    const form = document.getElementById('trivia-form');
    let correctAnswers = 0;
    const totalQuestions = 2;
  
    // Check answers for question 1
    const q1 = form.q1.value;
    if (q1 === 'correct') {
      correctAnswers++;
    }
  
    // Check answers for question 2
    const q2 = form.q2.value;
    if (q2 === 'correct') {
      correctAnswers++;
    }
  
    // Calculate the score
    const score = (correctAnswers / totalQuestions) * 100;
  
    // Display an alert with the results
    alert(`You got ${correctAnswers} out of ${totalQuestions} correct! Your score: ${score}%`);
  }
  
  // Load a random quote when the page loads
  window.onload = generateQuote;
  
  