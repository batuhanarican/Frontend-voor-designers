var counter = document.querySelector('.height-offset');
var counter2 = document.querySelector('.height-counter');
var counter3 = document.querySelector('.width-counter');
var section1 = document.querySelector('div.section1');
var section2 = document.querySelector('div.section2');
var section3 = document.querySelector('div.section3');

var indicator = document.querySelectorAll('nav ul li');

var w = window.innerWidth;
var h = window.innerHeight;

function countHeight() {
    counter.innerHTML = "Offset = " + window.pageYOffset;   
    counter2.innerHTML = "Height = " + window.innerHeight;
    counter3.innerHTML = "Width = " + window.innerWidth;
    w = window.innerWidth;
    h = window.innerHeight;
}

function measureScreen (){
    console.log(w);
    console.log(h);
}

function changeColor() {
  var height = window.pageYOffset;
    if(height >= h/2) {
        section1.classList.add('section1add');
        indicator[0].classList.remove('indicator1');
  }
    if(height < h/2){
        section1.classList.remove('section1add');
        indicator[0].classList.add('indicator1');
        indicator[1].classList.remove('indicator2');
  }
    if(height >= h-(h/2)) {
        section2.classList.add('section2add');
        indicator[1].classList.add('indicator2');
        indicator[2].classList.remove('indicator3');
  }
    if(height < h-(h/2)) {
        section2.classList.remove('section2add');
  }
    if(height >= h*2-(h/2)) {
        section3.classList.add('section3add');
        section2.classList.remove('section2add');
        indicator[1].classList.remove('indicator2');
        indicator[2].classList.add('indicator3');
  }
    if(height < h*2-(h/2)) {
        section3.classList.remove('section3add');
  }
}

function smoothScroll(x) {
    console.log('Scroll smooth ' + (x+1));
    window.scroll({
    top: h*x, 
    left: 0, 
    behavior: 'smooth' 
});
}

countHeight();

console.log(window.scrollY);
console.log(w);
console.log(h);
    
window.addEventListener('scroll', countHeight);
window.addEventListener('scroll', changeColor);
window.addEventListener('resize', measureScreen);
window.addEventListener('resize', countHeight);

indicator[0].addEventListener('click', function(){
    smoothScroll(0);
}, false);
indicator[1].addEventListener('click', function(){
    smoothScroll(1);
}, false);
indicator[2].addEventListener('click', function(){
    smoothScroll(2);
}, false);