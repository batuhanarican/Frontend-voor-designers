var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'http://dennistel.nl/movies';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var jsonObj = request.response;
  console.log(jsonObj[0].genres);
  showMovies(jsonObj);
};

function showMovies(jsonObj){
    for(var i=0; i < jsonObj.length; i++){
        
        var article = document.createElement('article');
        var img = document.createElement('img');
        img.src = jsonObj[i].cover;  
        
        var h1 = document.createElement('h1');
        h1.textContent = jsonObj[i].title;
        

        var myPara = document.createElement('p');
        myPara.textContent = jsonObj[i].plot;
        
        
        var genreUl = document.createElement('ul');
        
        
        var genres = jsonObj[i].genres;
        for (var g=0; g < jsonObj[i].genres.length; g++) {
            var genreLi = document.createElement('li');
            genreLi.textContent = genres[g];
            genreUl.appendChild(genreLi);
        }
        
        article.appendChild(img);
        article.appendChild(h1);
        article.appendChild(myPara);
        article.appendChild(genreUl);
        section.appendChild(article);
        
        
    }
    
}