/* Global variables just for easy practice */

// An array of objects containing questions and answers
questions = [
  {
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language."
  },
  {
    question: "Give the selector and rule to color all paragraph text blue.",
    answer: "p {color: blue;}"
  },
  {
    question:
      "How are heading elements similar and different from the header element?",
    answer:
      "the header element is a container and can contain multiple elements. In addition it is good and commont practice to include a heading element within a header element."
  },
  {
    question:
      "When would you want to use an article element and when would this generally not be necessary?",
    answer: "To be written..."
  }
];

// Initial question to display

qIndex = 0;

// Set up variables to hold element references, 'Feb'
hidecreator = document.getElementById("BHideQC");
showcreator = document.getElementById("BShowQC");
hideanswer = document.getElementById("BHideA");
displayanswer = document.getElementById("BShow");
addquestion = document.getElementById("BAddQ");
removequestion = document.getElementById("BRemove");
forwardquestion = document.getElementById("BForward");
backquestion = document.getElementById("BBack");

// Example of variables and initialization
qCountSpan = document.getElementById("qCount");
qIndexSpan = document.getElementById("qIndex");
// Initialize content
qCountSpan.innerHTML = questions.length;
qIndexSpan.innerHTML = qIndex + 1;

// initialize buttons
initButtons();

//Getting Questions and Answers
//displayQuestion();
let quest = document.getElementById("contentQ");
var qid  = document.createElement("p");
quest.appendChild(qid);

let ans = document.getElementById("contentA");
var aid = document.createElement("p");
ans.appendChild(aid);

//document.getElementById("BAddQ").onclick = addQuestion;
document.getElementsByTagName("body").onload = displayQuestion();


/* Functions defined below here */


/* Attach buttons to their handler functions here. Button id:
 BForward BBack BShow BShowQC BRemove BHideA BAddQ BHideQC */
function initButtons() {
  // Show and hide creator
  hidecreator.addEventListener("click",hideCreator);
  showcreator.addEventListener("click",showCreator);
  hideanswer.addEventListener("click",hideAnswer);
  displayanswer.addEventListener("click",displayAnswer);
  addquestion.addEventListener("click",addQuestion);
  removequestion.addEventListener("click",removeQuestion);
  forwardquestion.addEventListener("click",forwardQuestion);
  backquestion.addEventListener("click",backQuestion)
  // Show and hide answer
  
  
  // Forward and back Questions
  // Remove question
  // Add question
  //document.getElementById("BAddQ").onclick = addQuestion;
  //Remove Question
  //document.getElementById("BRemove").onclick = removeQuestion;
  //document.getElementById("BForward").onclick = forwardQuestion;
 // document.getElementById("BBack").onclick = backQuestion;
}

/* You may want to define functions like the following to attach to buttons */
function displayQuestion(){
   qid.innerHTML = questions[qIndex].question;
}
function displayAnswer(){
  aid.innerHTML = questions[qIndex].answer;
  
    document.getElementById("contentA").classList.remove("off");
    document.getElementById("contentA").classList.add("on");
    
  

}
function addQuestion() {
  // You provide the functionality.
  var newel = document.getElementById("Question").value;
  var newel2 = document.getElementById("Answer").value;
  questions.push({question:newel,answer:newel2});

}
function removeQuestion(){
  var index  = questions.indexOf(questions[qIndex])
  if(index > -1){
    questions.splice(index,1);
    qCountSpan.innerHTML = questions.length;
  }
  if(qIndex < questions.length){
  displayQuestion() = false;
  }else{
    displayQuestion();
  }



}


/* Takes the content from the text areas and adds
 to the quesiton list */

function hideCreator(){
  
  document.getElementById("QCreator").classList.remove("showStuff");
  document.getElementById("QCreator").classList.add("hideStuff");
}
 


function showCreator(){
  
  document.getElementById("QCreator").classList.remove("hideStuff");
  document.getElementById("QCreator").classList.add("showStuff");
}



function forwardQuestion(){   
  if (questions.length <= 0) {
    return;
  }

  if (qIndex < questions.length - 1) {
    qIndex++;
    qIndexSpan.innerHTML = qIndex + 1;
  }
  displayQuestion();
}

function backQuestion(){
  if (questions.length <= 0) {
    return;
  }

  if (qIndex > 0 && qIndex < questions.length) {
    qIndex--;
    qIndexSpan.innerHTML = qIndex + 1;
  }
  displayQuestion();
}
function hideAnswer(){
  
    document.getElementById("contentA").classList.remove("on");
    document.getElementById("contentA").classList.add("off");
}

