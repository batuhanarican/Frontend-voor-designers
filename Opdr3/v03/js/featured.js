//*************************Featured*************************//

//var h2 = document.createElement('h2');
//    featured.appendChild(h2);


function showFeatured(jsonObj){    
    for(var x=0; x < jsonObj.length; x++){
        
        //*************************Create article*************************//
        
        var article = document.createElement('article');
        article.classList.add('article');

        var gridWrapper = document.createElement('div');
        gridWrapper.classList.add('gridWrapper');

        var img = document.createElement('img');
        img.src = jsonObj[x].cover;

        var bg = document.createElement('img');
        bg.src = jsonObj[x].cover;
        bg.classList.add('articleBg');
        
        //*************************Title*************************//

        var h3 = document.createElement('h3');
        h3.textContent = jsonObj[x].title;
        
        //*************************Release date*************************//
        
        var releaseTitle = document.createElement('h4');
        releaseTitle.textContent = 'Release date';

        var release = document.createElement('h5');
        release.textContent = jsonObj[x].release_date;
        
        //*************************Director*************************//

        var directorTitle = document.createElement('h4');
        directorTitle.textContent = 'Directed by';
        
        var directors = jsonObj[x].directors;
        for (var g=0; g < jsonObj[x].directors.length; g++) {
            var directorName = jsonObj[x].directors[g].name;
        }
        
        var director = document.createElement('h5');
        director.classList.add('director');
        director.textContent = directorName;
        
        //*************************Actors*************************//

        var actorTitle = document.createElement('h4');
        actorTitle.textContent = 'Starring';
        
        var actorUl = document.createElement('ul');
        var actorLi = document.createElement('li');
        
        var actors = jsonObj[x].actors;
        for (var g=0; g < jsonObj[x].actors.length; g++) {
            var actorName = jsonObj[x].actors[g].actor_name;
            var actorLi = document.createElement('li');
            actorUl.appendChild(actorLi);
            actorLi.textContent = actorName;
        }
        
        if (jsonObj[x].actors.length > 6){
            var actorMore = document.createElement('li');
            actorMore.textContent = 'And ';
            actorMore.textContent += jsonObj[x].actors.length -6 + ' more';
            actorUl.appendChild(actorMore);
        }

        //*************************Genres*************************//
        
        var genresTitle = document.createElement('h4');
        genresTitle.textContent = 'Genres';
        
        var genreUl = document.createElement('h5');
        genreUl.classList.add('genres');

        var genres = jsonObj[x].genres;
        for (var g=0; g < jsonObj[x].genres.length; g++) {
        }

        genreUl.textContent = genres.join(', ');
        
        //*************************Plot*************************//
        var synopsisTitle = document.createElement('h4');
        synopsisTitle.textContent = 'Synopsis';
        
        var myPara = document.createElement('p');
        myPara.textContent = jsonObj[x].plot;
        
        //*************************Score*************************//

        var score = jsonObj[x].reviews;
        for (var g=0; g < jsonObj[x].reviews.length; g++) {
            var scoreSum = jsonObj[x].reviews[g].score;
        }

        var reviews = document.createElement('div');
        var scoreP = document.createElement('p');
        reviews.classList.add('score');
        scoreP = scoreSum;
        
        //*************************Appends*************************//

        featured.appendChild(bg);
        article.appendChild(img);
        gridWrapper.appendChild(h3);
        gridWrapper.appendChild(releaseTitle);
        gridWrapper.appendChild(genresTitle);
        gridWrapper.appendChild(release);
        gridWrapper.appendChild(genreUl);
        gridWrapper.appendChild(directorTitle);
        gridWrapper.appendChild(synopsisTitle);
        gridWrapper.appendChild(director);
        gridWrapper.appendChild(myPara);
        gridWrapper.appendChild(actorTitle);
        gridWrapper.appendChild(actorUl);
        gridWrapper.appendChild(reviews);
        article.appendChild(gridWrapper);
        sectionFeatured.appendChild(article);
        featured.appendChild(sectionFeatured);
        main.appendChild(featured);
    }
    
    //*************************Slider*************************//
    
    var a = 0;
    
    var article = document.querySelector('main div.featured section article.article');
    var articleBg = document.querySelector('main div.featured img.articleBg');
    
    var articleAdd = document.querySelectorAll('.article');
    var articleBgAdd = document.querySelectorAll('.articleBg');
    
    function runSlider() {
        articleAdd[a].classList.add('articleAdd');
        articleBgAdd[a].classList.add('articleBgAdd');
    }

    function sliderRight() {
        if (a == jsonObj.length -1){
            a = -1;
        }
        
        if (a > jsonObj.length -1) {
            a = -1;
            for(var x=0; x < jsonObj.length; x++){
                articleAdd[x].classList.remove('articleAdd');
                articleBgAdd[x].classList.remove('articleBgAdd');
                articleAdd[x].style.display = 'none';
                articleBgAdd[x].style.display = 'none';
                setTimeout(function(){
                    for(var x=0; x < jsonObj.length; x++){
                        articleAdd[x].style.display = 'none';
                        articleAdd[a].style.display = 'block';
                        articleAdd[a].classList.add('articleAdd');
                    }
                },10);
                articleBgAdd[a].classList.add('articleBgAdd');
            }
        }

        if (a < jsonObj.length -1) {
            a++;
            for(var x=0; x < jsonObj.length; x++){
                articleAdd[x].classList.remove('articleAdd');
                articleBgAdd[x].classList.remove('articleBgAdd');
                setTimeout(function(){
                    for(var x=0; x < jsonObj.length; x++){
                        articleAdd[x].style.display = 'none';
                        articleAdd[a].style.display = 'block';
                        articleAdd[a].classList.add('articleAdd');
                    }
                },10);
                articleBgAdd[a].classList.add('articleBgAdd');
            }
        }
        console.log(a);
    }

    function sliderLeft() {
        if (a == 0) {
            a = jsonObj.length;
            sliderLeft();
            for(var x=0; x < jsonObj.length; x++){
                articleAdd[x].classList.remove('articleAdd');
                articleBgAdd[x].classList.remove('articleBgAdd');
                setTimeout(function(){
                    for(var x=0; x < jsonObj.length; x++){
                        articleAdd[x].style.display = 'none';
                        articleAdd[a].style.display = 'block';
                        articleAdd[a].classList.add('articleAdd');
                    }
                },10);
                articleBgAdd[a].classList.add('articleBgAdd');
            }
        }

        else {
            a--;
            for(var x=0; x < jsonObj.length; x++){
                articleAdd[x].classList.remove('articleAdd');
                articleBgAdd[x].classList.remove('articleBgAdd');
                setTimeout(function(){
                    for(var x=0; x < jsonObj.length; x++){
                        articleAdd[x].style.display = 'none';
                        articleAdd[a].style.display = 'block';
                        articleAdd[a].classList.add('articleAdd');

                    }
                },10);
                articleBgAdd[a].classList.add('articleBgAdd');
            }
        }
        
        console.log(a);
    }

        runSlider();

    document.onkeydown = checkKey;

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '37') {
            sliderLeft(a);

        }
        else if (e.keyCode == '39') {
            sliderRight(a);
        }

        if (e.keyCode == '188') {
            sliderPlay();

        }

        if (e.keyCode == '190') {
            sliderStop();

        }
    }  
    
    var prev = document.querySelector('.buttons ul li:nth-child(1)');
    var play = document.querySelector('.buttons ul li:nth-child(2)');
    var next = document.querySelector('.buttons ul li:nth-child(3)');
    
    var autoRight;
    
    function sliderPlay() {
        autoRight = setInterval(sliderRight, 5000);
    }

    function sliderStop() {
        clearInterval(autoRight);
    }
    
    var clicked = 0;
    
    function runPlay() {
        if (clicked === 0) {
            sliderPlay();
            play.classList.toggle('pauseButton');
            clicked = 1;
            console.log(clicked);
        }
        else {
            sliderStop();
            play.classList.toggle('pauseButton');
            clicked= 0;
        }
    }
    
    
    play.addEventListener('click', runPlay);
    prev.addEventListener('click', sliderLeft);
    next.addEventListener('click', sliderRight);
}
