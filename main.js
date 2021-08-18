const title = document.getElementById("title");
const questionText = document.getElementById("question-text");
const qNumber = document.getElementById("qNumber");
const aBtn = document.getElementById("A");
const bBtn = document.getElementById("B");
const cBtn = document.getElementById("C");
const dBtn = document.getElementById("D");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("advance");
const select = document.getElementById("select");
const winSound = document.getElementById("win");
const errorSound = document.getElementById("error");

let midnightMiracle = [
  {
    question: "When Kanji joined your team what was his default weapon?",
    answers: [
      {option:"Yasogami Desk",answer:false},
      {option:"Iron Schoolbag",answer:false},
      {option:"Folding Chair",answer:true},
      {option:"Wooden Sword",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Among the boys of Yasogami High, what is the ritual of asking Yukiko out on a date called?",
    answers: [
      {option:"The Amagi Adventure",answer:false},
      {option:"The Amagi Trials",answer:false},
      {option:"The Amagi Challenge",answer:true},
      {option:"The Great Amagi Chase",answer:false},
    ],
    answered: -1,
  },
  {
    question: "All the lockers at the entrance in the Steamy Bathhouse have the same number. What is that number? ",
    answers: [
      {option:"201",answer:true},
      {option:"313",answer:false},
      {option:"118",answer:false},
      {option:"307",answer:false},
    ],
    answered: -1,
  },
  {
    question: "If you were watching the band show at Junes on October 10th, who would be on the far right of the stage? ",
    answers: [
      {option:"Yosuke",answer:false},
      {option:"Teddie",answer:false},
      {option:"Yukiko",answer:false},
      {option:"Naoto",answer:true},
    ],
    answered: -1,
  },
  {
    question: "What color is Teddie's tail?",
    answers: [
      {option:"Red",answer:false},
      {option:"Blue",answer:true},
      {option:"White",answer:false},
      {option:"He doesn't have a tail",answer:false},
    ],
    answered: -1,
  },
  {
    question: "How many chairs are there in Class 2-2 of Yasogami High School?",
    answers: [
      {option:"31",answer:false},
      {option:"28",answer:false},
      {option:"26",answer:false},
      {option:"29",answer:true},
    ],
    answered: -1,
  },
  {
    question: "What was the name of the teacher who gave you the special lecture at Gekkoukan High School?",
    answers: [
      {option:"Edogawa",answer:true},
      {option:"Morooka",answer:false},
      {option:"Kamoshida",answer:false},
      {option:"Kashiwagi",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What is the weakness of Izanagi, the first Persona you obtained?",
    answers: [
      {option:"Wind",answer:true},
      {option:"Electricity",answer:false},
      {option:"Bless",answer:false},
      {option:"Fire",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Ryotaro Dojima is never without his suit. What color necktie does he wear?",
    answers: [
      {option:"Plain Red",answer:true},
      {option:"Plain Blue",answer:false},
      {option:"Blue Striped",answer:false},
      {option:"Yellow Striped",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What is the full name of Mr. Morooka, more popularly known as Kning Moron?",
    answers: [
      {option:"Kinshiro Morooka",answer:true},
      {option:"Kinjiro Morooka",answer:false},
      {option:"Kingoro Morooka",answer:false},
      {option:"Kinichiro Morooka",answer:false},
    ],
    answered: -1,
  },
  {
    question: "How many desks are there in Class 2-2 of Yasogami High School?",
    answers: [
      {option:"30",answer:false},
      {option:"34",answer:false},
      {option:"32",answer:false},
      {option:"28",answer:true},
    ],
    answered: -1,
  },
  {
    question: "Which is the name of the weekend shopping program with the catchy tune?",
    answers: [
      {option:"Tanaka's Awesome",answer:false},
      {option:"Tanaka's Amazing",answer:true},
      {option:"Tanaka's Comsumables",answer:false},
      {option:"Katana's Amazing",answer:false},
    ],
    answered: -1,
  },
];

let pFive = [
  {
    question: "What is one of the two weaknesses of Arsène, Joker's starting persona?",
    answers: [
      {option:"Electricity",answer:false},
      {option:"Wind",answer:false},
      {option:"Ice",answer:true},
      {option:"Fire",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What color is Morgana's scarf?",
    answers: [
      {option:"Red",answer:false},
      {option:"Blue",answer:false},
      {option:"White",answer:false},
      {option:"Yellow",answer:true},
    ],
    answered: -1,
  },
  {
    question: "What does Iwai have tattoed on his neck?",
    answers: [
      {option:"His son's name",answer:false},
      {option:"The Phantom Theives logo",answer:false},
      {option:"Gecko",answer:true},
      {option:"Skull",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Yusuke rearranges figures of what charaters in Futabas room?",
    answers: [
      {option:"Pocket Minions",answer:false},
      {option:"Phoenix Ranger Featherman R",answer:true},
      {option:"Snario Bros.",answer:false},
      {option:"Maruto",answer:false},
    ],
    answered: -1,
  },
  {
    question: "After defeating Kamoshida and take his treasure you sell it for how much?",
    answers: [
      {option:"25,000 yen",answer:false},
      {option:"10,000 yen",answer:false},
      {option:"50,000 yen",answer:false},
      {option:"30,000 yen",answer:true},
    ],
    answered: -1,
  },
];

let pFiveClass = [
  {
    question: "What is the name of that phenomenon where the second hand looks like it’s stopped moving?",
    answers: [
      {option:"Vierordt's law",answer:false},
      {option:"A time paradox",answer:false},
      {option:"The World",answer:false},
      {option:"Cronostasis",answer:true},
    ],
    answered: -1,
  },
  {
    question: "Which peg-legged, parrot toting historical figure’s appearance became visual shorthand for pirates?",
    answers: [
      {option:"Ann Bonny",answer:false},
      {option:"John Silver",answer:true},
      {option:"Captain Kidd",answer:false},
      {option:"James Cook",answer:false},
    ],
    answered: -1,
  },
  {
    question: "A soul is composed of appetite, spirit and what else?",
    answers: [
      {option:"Greed",answer:false},
      {option:"Logic",answer:true},
      {option:"Fear",answer:false},
      {option:"Desire",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What’s the meaning of the original Chinese phrase that mantou dumplings’ name came from?",
    answers: [
      {option:"Warlord's eye",answer:false},
      {option:"Warrior's fist",answer:false},
      {option:"Barbarian's head",answer:true},
      {option:"Tactician's tounge",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What event did Emperor Nero add to the Olympics so he could participate?",
    answers: [
      {option:"Chariot Racing",answer:false},
      {option:"Acting",answer:false},
      {option:"Singing",answer:true},
      {option:"All of them",answer:false},
    ],
    answered: -1,
  },
  {
    question: `What is the literal translation of the phrase "femme fatale?"`,
    answers: [
      {option:"Fatal Women",answer:true},
      {option:"Honey trap",answer:false},
      {option:"Women of fate",answer:false},
      {option:"Soul mate",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What do we call the phenomenon where believing in a treatment’s power is enough to improve your condition?",
    answers: [
      {option:"Positive feedback",answer:false},
      {option:"The placebo effect",answer:true},
      {option:"The spasiba effect",answer:false},
      {option:"A miracle",answer:false},
    ],
    answered: -1,
  },
  {
    question: "The golden ratio is 1:1.618 but do you know the silver ratio?",
    answers: [
      {option:"1:1.414",answer:true},
      {option:"1:1.303",answer:false},
      {option:"1:1.314",answer:false},
      {option:"1:1.712",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Which of these animals is involved in an English idiom about the weather?",
    answers: [
      {option:"Dogs",answer:true},
      {option:"Giraffes",answer:false},
      {option:"Snails",answer:false},
      {option:"Cows",answer:false},
    ],
    answered: -1,
  },
  {
    question: "How many white and black shapes are there respectively on a soccer ball?",
    answers: [
      {option:"18 white, 9 black",answer:false},
      {option:"30 white, 8 black",answer:false},
      {option:"It varies",answer:false},
      {option:"20 white, 12 black",answer:true},
    ],
    answered: -1,
  },
  {
    question: "Who invented the Guillotine",
    answers: [
      {option:"Charles-Henri Sanson",answer:false},
      {option:"Louis XV",answer:false},
      {option:"Joseph-Ignance Gullotin",answer:true},
      {option:"Marie Antoinette",answer:false},
    ],
    answered: -1,
  },
];

let pFourClass = [
  {
    question: "What is the year before 1 AD called?",
    answers: [
      {option:"-1 AD",answer:false},
      {option:"Year 0",answer:false},
      {option:"1 BC",answer:true},
      {option:"0 AD",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What property of whole numbers doesn't exist?",
    answers: [
      {option:"Marriage numbers",answer:true},
      {option:"Amicable numbers",answer:false},
      {option:"Betrothed numbers",answer:false},
      {option:"Sociable numbers",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What was the first economic bubble incident in the world?",
    answers: [
      {option:"Tulip mania",answer:true},
      {option:"The Great Depression",answer:false},
      {option:"The Mississippi Company",answer:false},
      {option:"The South Sea Bubble",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What is the greatest canyon in the solar system?",
    answers: [
      {option:"Kurobe Canyon",answer:false},
      {option:"Valles Marineris",answer:true},
      {option:"The Grand Canyon",answer:false},
      {option:"Kali Gandaki Gorge",answer:false},
    ],
    answered: -1,
  },
  {
    question: `What sport is "heikin-dai"?`,
    answers: [
      {option:"High Dive",answer:false},
      {option:"Uneven Bars",answer:false},
      {option:"Balance Beam",answer:true},
      {option:"Synchronized Dancing",answer:false},
    ],
    answered: -1,
  },
  {
    question: "What kind of exercise builds up lactic acid in the muscles?",
    answers: [
      {option:"Aerobics",answer:false},
      {option:"Anaerobics",answer:true},
      {option:"Oxyrobics",answer:false},
      {option:"All of them",answer:false},
    ],
    answered: -1,
  },
  {
    question: "Which one is these is the name of a real river?",
    answers: [
      {option:"Lame Duck River",answer:false},
      {option:"Pis Pis River",answer:true},
      {option:"Mahony's Phony River",answer:false},
      {option:"The River of Dreams",answer:false},
    ],
    answered: -1,
  },
];

function submit(questions) {
  aBtn.classList.add("hide");
  bBtn.classList.add("hide");
  cBtn.classList.add("hide");
  dBtn.classList.add("hide");
  nextBtn.classList.remove("selected");
  qNumber.classList.add("hide");
  prevBtn.innerHTML="NEW QUIZ";
  nextBtn.innerHTML="RESTART";
  let message = "";
  let score = 0;
  for(let i=0; i<5; i++) {
    let ans = questions[i].answered;
    if(ans > -1) {
      if(questions[i].answers[ans].answer){
        score++;
      }
    }
  }
  if(score === 5) {
    setTimeout(() => winSound.play(), 500);
  }
  message += "You got " + score + " correct out of 5<br>Solution:";
  for(let i=0; i<5; i++) {
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
    select.play();
    aBtn.classList.remove("hide");
    bBtn.classList.remove("hide");
    cBtn.classList.remove("hide");
    dBtn.classList.remove("hide");
    qNumber.classList.remove("hide");
    nextBtn.innerHTML="NEXT";
    prevBtn.innerHTML="PREVIOUS";
    for(x of questions) {
      x.answered = -1;
    }
    quizSelect();
  }

  nextBtn.onclick = () => {
    select.play();
    questions.sort(() => Math.random() - 0.5);
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
  qNumber.innerHTML=currentQuestion + 1 + " of " + 5;
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
  currentQuestion = nextQuestion;
  displayQuestion(questions, currentQuestion);

  if(currentQuestion == 4){
    nextBtn.innerHTML="SUBMIT";
    nextBtn.onclick = () => {
      select.play();
      submit(questions);
    }
  }

  else {
    nextBtn.innerHTML="NEXT";
    nextBtn.onclick = () => {
      select.play();
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
      select.play();
      currentQuestion--;
      runQuiz(questions, currentQuestion);
    }
  }
}

function quizSelect() {
  title.innerHTML = "Persona Quiz Series";
  questionText.innerHTML = "Select a quiz:";
  aBtn.innerHTML = "Teddies Midnight Trivia Miracle Quiz";
  bBtn.innerHTML = "Persona 5 quiz";
  cBtn.innerHTML = "Persona 4 classroom quiz";
  dBtn.innerHTML = "Persona 5 classroom quiz";
  prevBtn.classList.add("hide");
  qNumber.classList.add("hide");
  aBtn.classList.remove("qSelect");
  bBtn.classList.remove("qSelect");
  cBtn.classList.remove("qSelect");
  dBtn.classList.remove("qSelect");

  let name, quiz = null;

  aBtn.onclick = () => {
    quiz = midnightMiracle;
    quiz.sort(() => Math.random() - 0.5);
    name = "Teddies Midnight Trivia Miracle Quiz";
    //clear selection
    bBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    aBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }
  bBtn.onclick = () => {
    quiz = pFive;
    quiz.sort(() => Math.random() - 0.5);
    name = "Persona 5 quiz";
    //clear selection
    aBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    bBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }
  cBtn.onclick = () => {
    quiz = pFourClass;
    quiz.sort(() => Math.random() - 0.5);
    name = "Persona 4 classroom quiz";
    //clear selection
    aBtn.classList.remove("qSelect");
    bBtn.classList.remove("qSelect");
    dBtn.classList.remove("qSelect");
    cBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }
  dBtn.onclick = () => {
    quiz = pFiveClass;
    quiz.sort(() => Math.random() - 0.5);
    name = "Persona 5 classroom quiz";
    //clear selection
    aBtn.classList.remove("qSelect");
    bBtn.classList.remove("qSelect");
    cBtn.classList.remove("qSelect");
    dBtn.classList.add("qSelect")
    nextBtn.classList.add("selected");
  }

  nextBtn.onclick = () => {
    select.play();
    if(quiz) {
      nextBtn.classList.remove("selected");
      qNumber.classList.remove("hide");
      title.innerHTML = name;
      runQuiz(quiz, 0);
    }
    else {
      errorSound.play();
    }
  }
}

quizSelect();