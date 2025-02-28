const questions = [
 {
   question: "Which keyword is used to declare a variable in JavaScript?",
   options: ["var", "int", "let", "const"],
   answer: 1
 },
 {
   question: "What is the output of `typeof null` in JavaScript?",
   options: ["null", "undefined", "object", "string"],
   answer: 3
 },
 {
   question: "Which of the following is NOT a JavaScript data type?",
   options: ["String", "Boolean", "Float", "Number"],
   answer: 3
 },
 {
   question: "How do you write a comment in JavaScript?",
   options: ["// This is a comment", "' This is a comment'", "/* This is a comment */","[ This is a Comment ]"],
   answer: 1
 },
 {
   question: "Which function is used to parse a JSON string into an object?",
   options: ["JSON.parse()", "JSON.stringify()", "JSON.toObject()", "JSON.decode()"],
   answer: 1
 }
];
let currentIndex=0;
let selectedOption=0;
let score=0;
const question=document.getElementById('question');
const option1=document.getElementById('label1');
const option2=document.getElementById('label2');
const option3=document.getElementById('label3');
const option4=document.getElementById('label4');
const nextButton=document.getElementById('next');
const answer=document.getElementById('answer');
const input1=document.getElementById('option1');
const input2=document.getElementById('option2');
const input3=document.getElementById('option3');
const input4=document.getElementById('option4');
const divs=document.getElementsByTagName('div')
function loadQuestion(){
 if(currentIndex>=questions.length){
   Array.from(divs).forEach(element => {
     element.style.display="none";
   });
    option1.style.display = 'none';
    option2.style.display = 'none';
    option3.style.display = 'none';
    option4.style.display = 'none';
    nextButton.style.display = 'none';
    input1.style.display="none";
    input2.style.display="none";
    input3.style.display="none";
    input4.style.display="none";
    const div = document.createElement('div');
    div.innerHTML = `The Score is ${score}`;
    div.style.backgroundColor = '#fff';
    div.style.padding = '10px 20px';
    div.style.marginTop="18px"
    div.style.borderRadius = '8px';
    div.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(div);
    const retryButton = document.createElement('button');
    retryButton.innerHTML = 'Retry Quiz';
    retryButton.style.padding = '10px 20px';
    retryButton.style.fontSize = '16px';
    retryButton.style.marginTop = '20px';
    retryButton.style.cursor = 'pointer';
    retryButton.style.backgroundColor = '#4CAF50';
    retryButton.style.color = 'white';
    retryButton.style.border = 'none';
    retryButton.style.borderRadius = '5px';
    retryButton.onclick = function() {
     location.reload();
    };
    document.body.appendChild(retryButton);
   return;
 }
 question.innerHTML=questions[currentIndex].question;
 option1.innerHTML=questions[currentIndex].options[0];
 option2.innerHTML=questions[currentIndex].options[1];
 option3.innerHTML=questions[currentIndex].options[2];
 option4.innerHTML=questions[currentIndex].options[3];
}
function chooseOption(a){
  selectedOption=a;
}
function nextQuestion(){
 if(selectedOption===questions[currentIndex].answer){
   score++;
   console.log(score);
 }
 selectedOption++;
 currentIndex++;
 loadQuestion();
}
loadQuestion();