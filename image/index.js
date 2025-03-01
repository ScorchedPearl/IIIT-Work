const object=[
 {src:"./images//DFlipFlop0.jpeg"},
 {src:"./images/SR FlipFlop.png"},
 {src:"./images/Tflipflop1.png"}
]
let currentIndex=0;
document.addEventListener('DOMContentLoaded',()=>{
 const img=document.getElementsByTagName('img')[0];
 const div=document.getElementsByTagName('div')[1];
 function next(){
  currentIndex+=1;
  if(currentIndex==object.length){
   currentIndex-=object.length;
  }
  div.style.setProperty('--progress-bar', ((currentIndex+1) / object.length) * 100+'%' );
  img.src=object[currentIndex].src;
 }
 function prev(){
  currentIndex-=1;
  if(currentIndex<0){
   currentIndex+=object.length;
  }
  div.style.setProperty('--progress-bar', ((currentIndex +1 ) / object.length) * 100+'%' );
  img.src=object[currentIndex].src;
 }
 const nextele=document.getElementById('next');
 const prevele=document.getElementById('prev');
 nextele.addEventListener('click',()=>{
  next();
 })
 prevele.addEventListener('click',()=>{
  prev();
 })
})