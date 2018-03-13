var counter = document.querySelector('.height-offset');
var counter2 = document.querySelector('.height-counter');
var counter3 = document.querySelector('.width-counter');

var scrolldAdd = document.querySelector('.scrolld');
var chameleon = document.querySelector('.chameleon');
var chameleonOverlay = document.querySelector('.overlay');

var indicator = document.querySelectorAll('nav ul li');
var arrowUp = document.querySelector('.arrowUp');
var arrowDown = document.querySelector('.arrowDown');

var w = window.innerWidth;
var h = window.innerHeight;

function countHeight() {
    counter.innerHTML = "Offset = " + window.pageYOffset;   
    counter2.innerHTML = "Height = " + window.innerHeight;
    counter3.innerHTML = "Width = " + window.innerWidth;
    w = window.innerWidth;
    h = window.innerHeight;
}

function measureScreen() {
    console.log(w);
    console.log(h);
}

function changeColor() {
    var height = window.pageYOffset;
    if (height < h * 0.10) {
        scrolldAdd.classList.remove('scrolldAdd');
        indicator[1].classList.remove('indicator1');
        chameleon.classList.remove('chameleonAdd');
        chameleonOverlay.classList.remove('overlayAdd');
    }

    if (height >= h * 0.10) {
        scrolldAdd.classList.add('scrolldAdd');
        chameleon.classList.add('chameleonAdd');
        chameleonOverlay.classList.add('overlayAdd');
    }
    
    if (height < h / 2) {
        indicator[1].classList.add('indicator1');
        indicator[2].classList.remove('indicator2');
		indicator[3].classList.remove('indicator3');
        arrowUp.classList.remove('arrowUpAdd');
    }
    
    if (height >= h / 2) {
        indicator[1].classList.remove('indicator1');
        arrowUp.classList.add('arrowUpAdd');
    }
    
    if (height >= h - (h / 2)) {
        indicator[2].classList.add('indicator2');
        indicator[3].classList.remove('indicator3');
    }
    
    if (height < h - (h / 2)) {
    }
    
    if (height >= h * 2 - (h / 2)) {
        indicator[2].classList.remove('indicator2');
        indicator[3].classList.add('indicator3');
        arrowDown.classList.add('arrowDownAdd');
    }
    
    if (height < h * 2 - (h / 2)) {
        arrowDown.classList.remove('arrowDownAdd');
    }
    
	if (height > h*3) {
        
	}
}

function smoothScroll(x) {
    console.log('Scroll smooth ' + (x + 1));
    window.scroll({
    top: h * x,
    left: 0,
    behavior: 'smooth'
	});
}

function scrollUp() {
	window.scrollBy({ top: -h, left: 0, behavior: 'smooth' });
}

function scrollDown() {
	window.scrollBy({ top: +h, left: 0, behavior: 'smooth' });
}

countHeight();

console.log(window.scrollY);
console.log(w);
console.log(h);

window.addEventListener('scroll', countHeight);
window.addEventListener('scroll', changeColor);
window.addEventListener('resize', measureScreen);
window.addEventListener('resize', countHeight);

indicator[1].addEventListener('click', function () {
    smoothScroll(0);
}, false);
indicator[2].addEventListener('click', function () {
    smoothScroll(1);
}, false);
indicator[3].addEventListener('click', function () {
    smoothScroll(2);
}, false);
indicator[0].addEventListener('click', scrollUp, false);
indicator[4].addEventListener('click', scrollDown, false);

scrolldAdd.addEventListener('click', function () {
    smoothScroll(1);
}, false);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '75') {
        scrollUp();
    }
    else if (e.keyCode == '74') {
        scrollDown();
    }
}