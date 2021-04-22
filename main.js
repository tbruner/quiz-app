const title = document.getElementById("title");
const questionText = document.getElementById("question-text");
const qNumber = document.getElementById("qNumber");
const aBtn = document.getElementById("A");
const bBtn = document.getElementById("B");
const cBtn = document.getElementById("C");
const dBtn = document.getElementById("D");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("advance");

let mathQuestions = [
  {
    question: "Solve for x:<br />20 = 5x +10",
    answers: [
      {option:"10",answer:false},
      {option:"1",answer:false},
      {option:"2",answer:true},
      {option:"0",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Which number is the lowest value: -25, 7, -6, 25",
    answers: [
      {option:"-25",answer:true},
      {option:"7",answer:false},
      {option:"-6",answer:false},
      {option:"25",answer:false},
    ],
    answered: -1,
  },
  {
    question: "You purchase a TV, video game console, and headphones costing "
    +"$500, $300, and $50 respectively. With a sales tax of 6% what is your total cost?",
    answers: [
      {option:"850",answer:false},
      {option:"900",answer:false},
      {option:"856",answer:false},
      {option:"901",answer:true},
    ],
    answered: -1,
  },
  {
    question: "A train leaves Detroit at 8 am and will arrive in Chicago at 10:30 am. "
    +"If the train travels 290 miles, how fast was the train traveling in miles per hour?",
    answers: [
      {option:"98 mph",answer:false},
      {option:"116 mph",answer:true},
      {option:"112 mph",answer:false},
      {option:"122 mph",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What is the next number in this sequence? 1, 2, 4, 8",
    answers: [
      {option:"16",answer:true},
      {option:"10",answer:false},
      {option:"8",answer:false},
      {option:"12",answer:false},
    ],
    answered: -1,
  },
];

let jsQuestions = [
  {
    question: "How do you write a conditional statement for x is not equal to 5?",
    answers: [
      {option:"if x notequal 5:",answer:false},
      {option:"if x not = 5:",answer:false},
      {option:"if(x != 5)",answer:true},
      {option:"if(x |= 5)",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Which of the following is a valid variable name?",
    answers: [
      {option:"2two",answer:false},
      {option:"let",answer:false},
      {option:"%percent",answer:false},
      {option:"_count",answer:true},
    ],
    answered: -1,
  },
  {
    question: "If var array = [2, 4, 6, 8, 10], what does array[2] return?",
    answers: [
      {option:"4",answer:false},
      {option:"2",answer:false},
      {option:"6",answer:true},
      {option:"8",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Which of the following code creates a new object?",
    answers: [
      {option:"var book = Object()",answer:false},
      {option:"var book = new Object()",answer:true},
      {option:"var object() = book",answer:false},
      {option:"var book = new Book()",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Which of the following is NOT a valid loop statement?",
    answers: [
      {option:"for(x of array)",answer:false},
      {option:"while(x&ltarray.length)",answer:false},
      {option:"for(x in array)",answer:false},
      {option:"for(x=0; x&ltarray.length; x++)",answer:true},
    ],
    answered: -1,
  },
];

let sportsQuestions = [
  {
    question: "How many medals did China win at the 2008 summer Olympics in Beijing?",
    answers: [
      {option:"112",answer:false},
      {option:"100",answer:true},
      {option:"88",answer:false},
      {option:"92",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What sporting event is held every year on Memorial Day?",
    answers: [
      {option:"Hot Dog eating contest",answer:false},
      {option:"Corn hole championships",answer:false},
      {option:"Indianapolis 500",answer:true},
      {option:"The US Open",answer:false},
    ],
    answered: -1,
  },
  {
    question: "In what year were women first allowed to compete in the Olympics and in what sport?",
    answers: [
      {option:"1900, tennis",answer:true},
      {option:"1928, archery",answer:false},
      {option:"1948, gymnastics",answer:false},
      {option:"1960, figure skating",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What is the only NFL team to never play in or host a Super Bowl?",
    answers: [
      {option:"Detroit Lions",answer:false},
      {option:"Cleveland Browns",answer:true},
      {option:"Jacksonville Jaguars",answer:false},
      {option:"Tennessee Titans",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Who is the first baseball player to appear on a Wheaties box?",
    answers: [
      {option:"Lou Gehrig",answer:true},
      {option:"Babe Ruth",answer:false},
      {option:"Nolan Ryan",answer:false},
      {option:"Hank Aaron",answer:false},
    ],
    answered: -1,
  },
];

let jeopardyQuestions = [
  {
    question: "GIMME THE NUMBERS!<br />It's the difference in the number of states in 2020 vs the number of states in 1790",
    answers: [
      {option:"What is 30?",answer:false},
      {option:"What is 32?",answer:false},
      {option:"What is 37?",answer:true},
      {option:"What is 28?",answer:false},
    ],
    answered: -1,
  },
  {
    question: "BUT<br />It's also known as your umbilicus",
    answers: [
      {option:"What is belly button?",answer:true},
      {option:"What is stomach?",answer:false},
      {option:"What is middle toe?",answer:false},
      {option:"What is arm pit?",answer:false},
    ],
    answered: -1,
  },
  {
    question: "HEAVY METAL<br />In 2016 a passerby on a Manhattan street grabbed an 86-pound, $1.6 million bucket of this off the back of an armored car",
    answers: [
      {option:"What is gold?",answer:true},
      {option:"What is silver?",answer:false},
      {option:"What is platinum?",answer:false},
      {option:"What is copper?",answer:false},
    ],
    answered: -1,
  },
  {
    question: "CAR CULTURE<br />The millionth Cadillac built was this 1949 coupe just beginning its long history",
    answers: [
      {option:"What is Escaldae?",answer:false},
      {option:"What is DeVille?",answer:true},
      {option:"What is Eldorado?",answer:false},
      {option:"What is Mirage?",answer:false},
    ],
    answered: -1,
  },
  {
    question: "10-LETTER WORDS<br />It's a plump turkey, or the brand that operates a Thanksgiving turkey help hotline",
    answers: [
      {option:"What is Cumbersome?",answer:false},
      {option:"What is Butterhead?",answer:false},
      {option:"What is Butterball?",answer:true},
      {option:"What is Jenniohead?",answer:false},
    ],
    answered: -1,
  },
  {
    question: "ANCIENT CITIES<br />This city that was once the capital of ancient Eygpt shares it's name with a city in Tennessee",
    answers: [
      {option:"What is Nashville?",answer:false},
      {option:"What is Memphis?",answer:true},
      {option:"What is Chattanooga?",answer:false},
      {option:"What is Knoxville?",answer:false},
    ],
    answered: -1,
  },
];

function submit(questions) {
  aBtn.classList.add("hide");
  bBtn.classList.add("hide");
  cBtn.classList.add("hide");
  dBtn.classList.add("hide");
  qNumber.classList.add("hide");
  prevBtn.innerHTML="NEW QUIZ";
  nextBtn.innerHTML="RESTART";
  let message = "";
  let score = 0;
  for(let i=0; i<questions.length; i++) {
    let ans = questions[i].answered;
    if(ans > -1) {
      if(questions[i].answers[ans].answer){
        score++;
      }
    }
  }
  message += "You got " + score + " correct out of " + questions.length + "<br>Solution:";
  for(let i=0; i<questions.length; i++) {
    let ans;
    for(x of questions[i].answers) {
      if(x.answer) {
        ans = x.option;
      }
    }
    message += "<br>" + (i+1) + ": " + ans;
  }
  questionText.innerHTML = message

  prevBtn.onclick = () => {
    aBtn.classList.remove("hide");
    bBtn.classList.remove("hide");
    cBtn.classList.remove("hide");
    dBtn.classList.remove("hide");
    qNumber.classList.remove("hide");
    nextBtn.classList.remove("selected");
    nextBtn.innerHTML="NEXT";
    prevBtn.innerHTML="PREVIOUS";
    for(x of questions) {
      x.answered = -1;
    }
    quizSelect();
  }

  nextBtn.onclick = () => {
    aBtn.classList.remove("hide");
    bBtn.classList.remove("hide");
    cBtn.classList.remove("hide");
    dBtn.classList.remove("hide");
    qNumber.classList.remove("hide");
    nextBtn.classList.remove("selected");
    nextBtn.innerHTML="NEXT";
    prevBtn.innerHTML="PREVIOUS";
    for(x of questions) {
      x.answered = -1;
    }
    runQuiz(questions, 0);
  }
}
 
function displayQuestion(questions, currentQuestion) {
  qNumber.innerHTML=currentQuestion + 1 + " of " + questions.length;
  questionText.innerHTML=questions[currentQuestion].question;
  aBtn.innerHTML=questions[currentQuestion].answers[0].option;
  bBtn.innerHTML=questions[currentQuestion].answers[1].option;
  cBtn.innerHTML=questions[currentQuestion].answers[2].option;
  dBtn.innerHTML=questions[currentQuestion].answers[3].option;

  aBtn.classList.remove("qSelect");
  bBtn.classList.remove("qSelect");
  cBtn.classList.remove("qSelect");
  dBtn.classList.remove("qSelect");

  if(questions[currentQuestion].answered>-1) {
    nextBtn.classList.add("selected");
  }
  if(questions[currentQuestion].answered==0) {
    aBtn.classList.add("qSelect");
  }
  else if(questions[currentQuestion].answered==1) {
    bBtn.classList.add("qSelect");
  }
  else if(questions[currentQuestion].answered==2) {
    cBtn.classList.add("qSelect");
  }
  else if(questions[currentQuestion].answered==3) {
    dBtn.classList.add("qSelect");
  }

  aBtn.onclick = () => {
    questions[currentQuestion].answered=0;
    //clear selection
    bBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    aBtn.classList.add("qSelect");
    nextBtn.classList.add("selected");
  }
  bBtn.onclick = () => {
    questions[currentQuestion].answered=1;
    //clear selection
    aBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    bBtn.classList.add("qSelect");
    nextBtn.classList.add("selected");
  }
  cBtn.onclick = () => {
    questions[currentQuestion].answered=2;
    //clear selection
    aBtn.classList.remove("qSelect");
    bBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    cBtn.classList.add("qSelect");
    nextBtn.classList.add("selected");
  }
  dBtn.onclick = () => {
    questions[currentQuestion].answered=3;
    //clear selection
    aBtn.classList.remove("qSelect");
    bBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.add("qSelect");
    nextBtn.classList.add("selected");
  }
}

function runQuiz(questions, nextQuestion) {
  currentQuestion=nextQuestion;
  displayQuestion(questions, currentQuestion);

  if(currentQuestion==questions.length-1){
    nextBtn.innerHTML="SUBMIT";
    nextBtn.onclick = () => {
      submit(questions);
    }
  }

  else {
    nextBtn.innerHTML="NEXT";
    nextBtn.onclick = () => {
      currentQuestion++;
      nextBtn.classList.remove("selected");
      aBtn.classList.remove("qSelect");
      bBtn.classList.remove("qSelect");
      cBtn.classList.remove("qSelect");
      dBtn.classList.remove("qSelect");
      runQuiz(questions, currentQuestion);
    }
  }

  if(currentQuestion==0){
    prevBtn.classList.add("hide");
  }
  else{
    prevBtn.classList.remove("hide");
    prevBtn.onclick = () => {
      currentQuestion--;
      runQuiz(questions, currentQuestion);
    }
  }
}

function quizSelect() {
  title.innerHTML = "Quiz Mania";
  questionText.innerHTML = "Select a quiz:";
  aBtn.innerHTML = "Math Quiz";
  bBtn.innerHTML = "Sports Quiz";
  cBtn.innerHTML = "Javascript Quiz";
  dBtn.innerHTML = "Jeopardy Quiz";
  prevBtn.classList.add("hide");
  qNumber.classList.add("hide");
  aBtn.classList.remove("qSelect");
  bBtn.classList.remove("qSelect");
  cBtn.classList.remove("qSelect");
  dBtn.classList.remove("qSelect");

  let name, quiz = null;

  aBtn.onclick = () => {
    quiz=mathQuestions;
    name = "Math Quiz";
    //clear selection
    bBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    aBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }
  bBtn.onclick = () => {
    quiz=sportsQuestions;
    name = "Sports Quiz";
    //clear selection
    aBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    bBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }
  cBtn.onclick = () => {
    quiz=jsQuestions;
    name = "Javascript Quiz";
    //clear selection
    aBtn.classList.remove("qSelect");
    bBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    cBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }
  dBtn.onclick = () => {
    quiz=jeopardyQuestions;
    name = "Jeopardy Quiz";
    //clear selection
    aBtn.classList.remove("qSelect");
    bBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }

  nextBtn.onclick = () => {
    if(quiz) {
      nextBtn.classList.remove("selected");
      qNumber.classList.remove("hide");
      title.innerHTML = name;
      runQuiz(quiz, 0);
    }
  }
}

quizSelect();