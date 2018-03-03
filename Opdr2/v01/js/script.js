var counter = document.querySelector('.height-offset');
var counter2 = document.querySelector('.height-counter');
var counter3 = document.querySelector('.width-counter');
var section1 = document.querySelector('div.section1');
var section2 = document.querySelector('div.section2');
var section3 = document.querySelector('div.section3');

var w = window.innerWidth;
var h = window.innerHeight;

function countHeight(){
    counter.innerHTML="Offset = " + window.pageYOffset;   
    counter2.innerHTML="Height = " + window.innerHeight;
    counter3.innerHTML="Width = " + window.innerWidth;
    w = window.innerWidth;
    h = window.innerHeight;
}

function measureScreen (){
    console.log(w);
    console.log(h);
}

function changeColor(){
  var height = window.pageYOffset;
    if(height >= h/2){
        section1.classList.add('section1add');
  }
    if(height < h/2){
        section1.classList.remove('section1add');
  }
    if(height >= h-(h/2)){
        section2.classList.add('section2add');
  }
    if(height < h-(h/2)){
        section2.classList.remove('section2add');
  }
    if(height >= h*2-(h/2)){
        section3.classList.add('section3add');
        section2.classList.remove('section2add');
  }
    if(height < h*2-(h/2)){
        section3.classList.remove('section3add');
  }
}

console.log(window.scrollY);
console.log(w);
console.log(h);
    
window.addEventListener('scroll', countHeight);
window.addEventListener('scroll', changeColor);
window.addEventListener('resize', measureScreen);
window.addEventListener('resize', countHeight);