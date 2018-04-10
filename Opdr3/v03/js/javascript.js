var counter = document.querySelector('.height-offset');
var counter2 = document.querySelector('.height-counter');
var counter3 = document.querySelector('.width-counter');

var o = window.pageYOffset;
var w = window.innerWidth;
var h = window.innerHeight;

function countHeight() {
    counter.innerHTML = "Offset = " + window.pageYOffset;   
    counter2.innerHTML = "Height = " + window.innerHeight;
    counter3.innerHTML = "Width = " + window.innerWidth;
    o = window.pageYOffset;
    w = window.innerWidth;
    h = window.innerHeight;
}

function measureScreen() {
    console.log(o);
    console.log(w);
    console.log(h);
}

var header = document.querySelector('header');
var main = document.querySelector('main');
var featured = document.querySelector('.featured');
var discover = document.querySelector('.discover');

var sectionFeatured = document.querySelector('.sectionFeatured');
var sectionDiscover = document.querySelector('.sectionDiscover');
var pFeatured = document.querySelector('main div.featured p');

//******************Request******************

var requestURL = 'https://batuhanarican.github.io/Frontend-voor-designers/Opdr3/v03/movies.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';

setTimeout(function(){
    request.send();
    request.onload = function() {
    var jsonObj = request.response;
    showFeatured(jsonObj);
    showMovies(jsonObj);
    showMovies(jsonObj);
    showMovies(jsonObj);
    };
},1);

//******************Counters******************

countHeight();

console.log(o);
console.log(w);
console.log(h);

window.addEventListener('scroll', countHeight);
window.addEventListener('resize', measureScreen);
window.addEventListener('resize', countHeight);

//******************Load state******************

var checkLoad = setInterval(function(){
    console.log(request.status);
    if (request.status === 200) {
        console.log('Load complete...');
        clearInterval(checkLoad);
        setTimeout(function(){
            document.getElementById('loadingFeatured').style.display = "none";
            document.getElementById('featured').style.height = "30rem";
            document.getElementById('loadingDiscover').style.display = "none";
        },1);
    }
},10);