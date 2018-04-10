//*************************Discover*************************//

var h2 = document.createElement('h2');
    discover.appendChild(h2);

function showMovies(jsonObj){
    
    for(var x=0; x < jsonObj.length; x++){
        
        //*************************Create article*************************//
        
        var article = document.createElement('article');
        
        var container = document.createElement('div');
        container.classList.add('container');
        
        var img = document.createElement('img');
        img.src = jsonObj[x].cover;  
        
        
        //*************************Title*************************//
            
        var h3 = document.createElement('h3');
        h3.textContent = jsonObj[x].title;
        
        //*************************Release*************************//
        
        var releaseTitle = document.createElement('h4');
        releaseTitle.textContent = 'Release date';
        
        var release = document.createElement('h5');
        release.textContent = jsonObj[x].release_date;
        
        //*************************Genre*************************//
        
        var genresTitle = document.createElement('h4');
        genresTitle.textContent = 'Genres';
        
        var genreUl = document.createElement('ul');
        
        var genres = jsonObj[x].genres;
        for (var g=0; g < jsonObj[x].genres.length; g++) {
            var genreLi = document.createElement('li');
            genreUl.appendChild(genreLi);
        }
        
        genreLi.textContent = genres.join(', ');
        
        //*************************Score sum*************************//
        
        var score = jsonObj[x].reviews;
        for (var g=0; g < jsonObj[x].reviews.length; g++) {
            
            var scoreAll = jsonObj[x].reviews[g].score;
        }
        
        var reviews = document.createElement('div');
        var scoreP = document.createElement('p');
        reviews.classList.add('score');
        scoreP.textContent = scoreAll;  
        
        //*************************Info*************************//
        
        var info = document.createElement('div');
        info.classList.add('moreInfo');
        
        //*************************Title*************************//
            
        var h3Info = document.createElement('h3');
        h3Info.textContent = jsonObj[x].title;
            
        //*************************Plot*************************//
        
        var synopsisTitle = document.createElement('h4');
        synopsisTitle.textContent = 'Synopsis';

        var myPara = document.createElement('p');
        myPara.textContent = jsonObj[x].plot;
        
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
        
        if (jsonObj[x].actors.length > 4){
            var actorMore = document.createElement('li');
            actorMore.textContent = 'And ';
            actorMore.textContent += jsonObj[x].actors.length -4 + ' more';
            actorMore.classList.add('actorMore');
            actorUl.appendChild(actorMore);
        }
        
        //*************************Appends*************************//
        
        article.appendChild(container);
        container.appendChild(img);
        container.appendChild(reviews);
        reviews.appendChild(scoreP);
        container.appendChild(h3);
        article.appendChild(info);
        info.appendChild(h3Info);
        info.appendChild(releaseTitle);
        info.appendChild(genresTitle);
        info.appendChild(release);
        info.appendChild(genreUl);
        info.appendChild(synopsisTitle);
        info.appendChild(myPara);
//        info.appendChild(actorTitle);
        info.appendChild(actorUl);
        sectionDiscover.appendChild(article);
        discover.appendChild(sectionDiscover);
        main.appendChild(discover);
        
    }
    
        //*************************Hover class add*************************//

        var movieSingle = document.querySelectorAll('div.discover section article div.container img');

        function showInfo(e){
            this.parentNode.parentNode.childNodes[1].classList.add('show');
        }

        function hideInfo(e){           
            this.parentNode.parentNode.childNodes[1].classList.remove('show');
            this.parentNode.parentNode.childNodes[1].classList.remove('show');
        }

        for (var i=0; i < movieSingle.length; i++ ){
            movieSingle[i].addEventListener('mouseenter', showInfo);
            movieSingle[i].addEventListener('mouseleave', hideInfo);
        }
    
    //*************************Get mouse location*************************//
    
    (function() {
        document.onmousemove = handleMouseMove;
        function handleMouseMove(event) {
            var dot, eventDoc, doc, body, pageX, pageY;

            event = event || window.event;

            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                  (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                  (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                  (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                  (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }
            var mouseX = event.pageX;
            var mouseY = event.pageY;
            var getInfo = document.querySelectorAll('div.show');
            console.log('Mouse H: ' + mouseX);
            console.log('Mouse V: ' + mouseY);
            
            //*************************Use mouse location*************************//

            if (mouseX <= (w - 360) && mouseY <= (h + o - 320)) {
                console.log('Left under');
                for (var y=0; y < movieSingle.length; y++ ){
                    getInfo[y].style.left = mouseX + 10 +'px';
                    getInfo[y].style.top = mouseY + 10 +'px';

                }
            }
            if (mouseX > (w - 360) && mouseY <= (h + o - 320)) {
                console.log('Right under');
                for (var y=0; y < movieSingle.length; y++ ){
                    getInfo[y].style.left = mouseX - 320 +'px';
                    getInfo[y].style.top = mouseY + 10 +'px';
                }
            }
            if (mouseX <= (w - 360) && mouseY > (h + o - 320)) {
                console.log('Left above');
                for (var y=0; y < movieSingle.length; y++ ){
                    getInfo[y].style.left = mouseX + 10 +'px';
                    getInfo[y].style.top = mouseY -280 +'px';
                }
            }
            if (mouseX > (w - 360) && mouseY > (h + o - 320)) {
                console.log('Right above');
                for (var y=0; y < movieSingle.length; y++ ){
                    getInfo[y].style.left = mouseX - 320 +'px';
                    getInfo[y].style.top = mouseY - 280 +'px';
                }
            }
        }
    })();
    
}
