questionArray = [
  {questionNumber: 1,
  questionImage: ('http://www.seriouseats.com/recipes/assets_c/2012/09/20120904-221263-strawberry-balsamic-pie-610x458-1-thumb-625xauto-269762.jpg'),
  questionString: 'Which of the following vinegars is often served with strawberries?',
  questionAnswers: ['A. Red Wine Vinegar', 'B. Balsamic Vinegar', 'C. Apple Cider Vinegar', 'D. White Distilled Vinegar'],
  correctAnswer: 'B. Balsamic Vinegar',
  AnswerString: 'The acidity of balsamic with the sweetness of strawberries makes them a winning combo!'
  },
  {questionNumber: 2,
  questionImage: (''),
  questionString: 'Which of the following spices is NOT included in a Masala chai spice mix?',
  questionAnswers: ['A. Cardamom', 'B. Clove', 'C. Peppercorns', 'D. Tumeric'],
  correctAnswer: 'D. Tumeric',
  AnswerString:'Often used in Indian cooking, tumeric is thought to reduce infamation in the body.'
  },
  {questionNumber: 3,
  questionImage: (''),
  questionString: 'Along with bell pepper and onion, which of the following is a part of the Cajun Holy Trinity of cooking?',
  questionAnswers: ['A. Carrot', 'B.Garlic', 'C. Celery', 'D. Jalepeno'],
  correctAnswer:'C. Celery',
  AnswerString:`The Cajun Holy Trinity is used as a base for foods like étouffée, gumbo, and jambalaya.`
  },
  {questionNumber: 4,
  questionImage: (''),
  questionString: 'Which of the following is considered to have the most umami flavor?',
  questionAnswers: ['A. Zucchini', 'B. Banana', 'C. Ketchup', 'D. Green Tea'],
  correctAnswer: 'D. Green Tea',
  AnswerString:`Umami is a description for the 'meaty' or 'savory' flavor. Zucchini is considered bitter, banana and ketchup are considered sweet.`
  },
  {questionNumber: 5,
  questionImage: (''),
  questionString: `This ingredient, common in Middle Eastern cuisine, give hummus it's nutty flavor.`,
  questionAnswers: ['A. Olive Oil', 'B. Pine Nuts', 'C. Chickpeas', 'D. Tahini'],
  correctAnswer: 'D. Tahini',
  AnswerString:'Made from hulled, ground sesame seeds, tahini is often used in both sweet and savory dishes.'
  },
  {questionNumber: 6,
  questionImage: (''),
  questionString: `This is the chemical process by which food is browned, giving many of our favorite foods their distinctive flavor.`,
  questionAnswers: ['A. Maillard Reaction', 'B. Diels-Alder Reaction', 'C.  Sabatier Reaction', 'D. Pschorr Reaction'],
  correctAnswer: 'A. Maillard Reaction',
  AnswerString: 'This process gives us toasted bread, seared meat, and caramelization.'
  },
  {questionNumber: 7,
  questionImage: (''),
  questionString: 'Bitterness is a vital part of many dishes. Which of the following foods is considered a bittering food?',
  questionAnswers: ['A. Okra', 'B. Broccoli', 'C. Beer', 'D. All of the Above'],
  correctAnswer: 'D. All of the Above',
  AnswerString:'The perception of bitterness as a negative flavor is thought to come from evolution. Many toxic compounds found in nature taste bitter!'
  },
  {questionNumber: 8,
  questionImage: (''),
  questionString: 'The original radler was a 50/50 mixture of beer and this.',
  questionAnswers: ['A. Grapefruit Juice', 'B. Sparkling Lemonade', 'C. Coca Cola', 'D. Milk'],
  correctAnswer: 'B. Sparkling Lemonade',
  AnswerString:`The story goes that an English innkeeper was waiting on some cyclist regulars. On finding he didn't have enough beer, he mixed sparkling lemonade and beer together. The regulars loved it!`
  },
  {questionNumber: 9,
  questionImage: (''),
  questionString: 'This spice is very important to Caribbean cuisine, being a main compenent of jerk seasoning.',
  questionAnswers: ['A. Salt', 'B. Oregano', 'C. Allspice', 'D. Bay Leaf'],
  correctAnswer: 'C. Allspice',
  AnswerString:'Allspice is actually a dried berry. It was named by an Englishman, who thought it had the combined flavor of nutmeg, cloves, and cinnamon.'
  },
  {questionNumber: 10,
  questionImage: (``),
  questionString: `Pamela Low, an early flavor chemist, created the flavor for Cap'n Crunch. She based it on her grandmother's unique treat of these two items, served on rice.`,
  questionAnswers: ['A. Honey and vanilla', 'B. Marshmallow and butter', 'Cream and brown sugar', 'D. Brown sugar and butter'],
  correctAnswer: 'D. Brown sugar and butter',
  AnswerString:'Low also worked on the flavors that make up Heath, Mounds and Almond Joy.'
  }
  ];
  
let currentQuestionIndex = 0;

//beginning of the quiz, prompts user if ready
function startQuiz() {
  $('.readyStartQuizButton').click(function(event) {
    $('.js-start-page').addClass('hidden');
    $('.js-quiz-page').removeClass('hidden');
    $('.js-question-count').removeClass('hidden');
    $('.js-question-score').removeClass('hidden');
  });
}
startQuiz();

//runs through questionArray, one object at a time
//TO DO: make inputs required
function buildQuestion() {
  var questionStringHTML = 
    `<h3>${questionArray[currentQuestionIndex].questionString}</h3>`;
  var questionAnswersGroupHTML =
  `   <input type='radio' role='radio' name='answer' id='ans1' data-chosen-answer='${questionArray[currentQuestionIndex].questionAnswers[0]}' required><label for='ans1'>${questionArray[currentQuestionIndex].questionAnswers[0]}</label><br>
      <input type='radio' role='radio' name='answer' id='ans2' data-chosen-answer='${questionArray[currentQuestionIndex].questionAnswers[1]}' required><label for='ans2'>${questionArray[currentQuestionIndex].questionAnswers[1]}</label><br>
      <input type='radio' role='radio' name='answer' id='ans3' data-chosen-answer='${questionArray[currentQuestionIndex].questionAnswers[2]}' required><label for='ans3'>${questionArray[currentQuestionIndex].questionAnswers[2]}</label><br>
      <input type='radio' role='radio' name='answer' id='ans4' data-chosen-answer='${questionArray[currentQuestionIndex].questionAnswers[3]}' required><label for='ans4'>${questionArray[currentQuestionIndex].questionAnswers[3]}</label><br>
      `;
    $('.js-quiz-question').empty();
    $('.js-quiz-answers').empty();
    $('.js-quiz-question').append(questionStringHTML);
    $('.js-quiz-answers').append(questionAnswersGroupHTML);
}

//calculate the score and show it to the user
function endScore() {
  var finalScore = ((correctAnswers/questionArray.length) * 100);
  var finalScoreHTML = `<p>You got ${finalScore}% correct!</p>`;
  var wompWompHTML = `<p>You got zero questions right. Better luck next time!</p>`;
  if (correctAnswers !== 0) {
  $('.js-score').append(finalScoreHTML);
} else {
  $('.js-score').append(wompWompHTML);
}
}

// shows image after answer submission
// function showAnswerImage() {
//   $('.submitAnswerButton').on('click', function(event){
//     $('#answerImage').attr('src', questionArray[currentQuestionIndex].questionImage);
// }
// )}
// showAnswerImage();

let correctAnswers = 0;
let incorrectAnswers = 0;

//update the question count
function keepingTrackOfQuestionNumber() {
  var questionCountHTML =  `<p>Question ${(questionArray[currentQuestionIndex].questionNumber)} of 10</p>`;
    $('.js-question-count').empty();
    $('.js-question-count').append(questionCountHTML);
    
}

//update the current score
function keepingTrackOfScore() {
  var currentScoreHTML = `<p>Correct: ${correctAnswers}, Incorrect: ${incorrectAnswers}</p>`;
    $('.js-question-score').empty();
    $('.js-question-score').append(currentScoreHTML);
}

//remove content from the screen, tell them the answer and keep track of question # and score
function submitAndGiveAnswer() {
  $('.submitAnswerButton').click(function() {
    event.preventDefault();
    if ( $('input[name=answer]:checked', '#form1').val() != 'on') {
      alert('Please select an option!');
    }
    else {
    $(this).addClass('hidden');
    tallyCorrect();
    keepingTrackOfScore();
    $('.js-answer-page').removeClass('hidden');
    $('.js-answer-string').append(questionArray[currentQuestionIndex-1].AnswerString);
    $('.js-quiz-question').addClass('hidden');
    $('.answerForm').addClass('hidden');
    }
  });
}
submitAndGiveAnswer();

// tally correct answers and let the user know if they got the question right or wrong
function tallyCorrect() {
  var chosenAnswer = $('input[name="answer"]:checked').data('chosen-answer');
  if (chosenAnswer == questionArray[currentQuestionIndex-1].correctAnswer) {
  $('.js-provide-feedback').append('<b>Correct!</b>' + '<br><br>');
  console.log(chosenAnswer);
  console.log(currentQuestionIndex);
  correctAnswers++;
  console.log(correctAnswers);
  } else {
    $('.js-provide-feedback').append('<b>Incorrect!</b><br><br>' + 'The correct answer is... ' + questionArray[currentQuestionIndex-1].correctAnswer + '.<br><br>');
      console.log(chosenAnswer);
  console.log(currentQuestionIndex);
    incorrectAnswers++;
  }
}


//clear the answer when next question button is clicked
function clearCorrectAnswer() {
  $('.nextQuestionButton').click(function() {
    $('.js-answer-page').addClass('hidden');
      $('.js-provide-feedback').empty();
      $('.js-answer-string').empty();
      $('.submitAnswerButton').removeClass('hidden');
      $('.js-quiz-question').removeClass('hidden');
      $('.answerForm').removeClass('hidden');
    // $('#answerImage').attr('src', '');
  });
}
clearCorrectAnswer();

//when the again? button is clicked, clear the HTML and start over at the beginning
function startQuizAgain() {
  $('.quizAgain').on('click', function() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    $('.js-score').empty();
    $('.js-quiz-over').addClass('hidden');
    $('.js-start-page').removeClass('hidden');
  });
}
startQuizAgain();

//each time .btn is clicked, decide if the quiz is over by comparing the current question index to the length of the array. if it is less than, build the question and keep track of question # and score. otherwise, end the quiz.
function askQuestionOrEndQuiz() {
  $('.btn').on ('click', function() {
  if (currentQuestionIndex < questionArray.length) {
    buildQuestion();
    keepingTrackOfQuestionNumber();
    currentQuestionIndex++;
} else {
  $('.js-quiz-page').addClass('hidden');
  $('.js-question-count').addClass('hidden');
  $('.js-question-score').addClass('hidden');
  $('.js-quiz-over').removeClass('hidden');
  endScore();
}
});
}
askQuestionOrEndQuiz();























