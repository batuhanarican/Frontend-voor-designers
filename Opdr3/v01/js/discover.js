//*************************Discover*************************//

var h2 = document.createElement('h2');
    discover.appendChild(h2);

function showMovies(jsonObj){
    
    for(var x=0; x < jsonObj.length; x++){
        
        //*************************Create article*************************//
        
        var article = document.createElement('article');
        
        var img = document.createElement('img');
        img.src = jsonObj[x].cover;  
        
        
        //*************************Title*************************//
            
        var h3 = document.createElement('h3');
        h3.textContent = jsonObj[x].title;
        
        //*************************Release*************************//
        
        var release = document.createElement('h4');
        release.textContent = jsonObj[x].release_date;
        
        //*************************Genre*************************//
        
        var genreUl = document.createElement('ul');
        
        var genres = jsonObj[x].genres;
        for (var g=0; g < jsonObj[x].genres.length; g++) {
            var genreLi = document.createElement('li');
            genreUl.appendChild(genreLi);
        }
        
        //*************************Score*************************//
        
        var score = jsonObj[x].reviews;
        for (var g=0; g < jsonObj[x].reviews.length; g++) {
            
            var scoreAll = jsonObj[x].reviews[g].score;
            for (var s=0; s < jsonObj[x].reviews[g].score.length; s++) {
                
                var scoreSum = jsonObj[x].reviews[g].score[s];
            }
        
        genreLi.textContent = genres.join(', ');
            
        //*************************Plot*************************//

        var myPara = document.createElement('p');
        myPara.textContent = jsonObj[x].plot;
        }
        
        //*************************Score*************************//
        
        var reviews = document.createElement('div');
        var scoreP = document.createElement('p');
        reviews.classList.add('score');
        scoreP.textContent = scoreAll;  
        
        //*************************Info*************************//
        
        var info = document.createElement('div');
        info.classList.add('moreInfo');
        
        //*************************Appends*************************//
        
        article.appendChild(img);
        article.appendChild(reviews);
        reviews.appendChild(scoreP);
        article.appendChild(release);
        article.appendChild(genreUl);
        article.appendChild(h3);
        article.appendChild(info);
        info.appendChild(myPara);
        sectionDiscover.appendChild(article);
        discover.appendChild(sectionDiscover);
        main.appendChild(discover);
        
    }
    
        //*************************Hover class add*************************//

        var movieSingle = document.querySelectorAll('div.discover section article img');

        var getInfo = document.querySelectorAll('div.moreInfo');

        function showInfo(e){
            this.parentNode.childNodes[5].classList.add('show');
        }

        function hideInfo(e){           
            this.parentNode.childNodes[5].classList.remove('show');
        }

        for (var i=0; i < movieSingle.length; i++ ){
            movieSingle[i].addEventListener('mouseenter', showInfo);
            movieSingle[i].addEventListener('mouseleave', hideInfo);
        }
    
    //*************************Mouse location*************************//
    
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
                console.log('Mouse H: ' + mouseX);
                console.log('Mouse V: ' + mouseY);

                if (mouseX <= (w / 5 * 3 ) ) {
                    console.log('Left');
        //            getInfo.style.transform = 'translateY('+(mouseY-80)+'px)';
                    }
                else {
                    console.log('Right');
                }

                if (mouseY <= (h + o + - 300 ) ) {
                    console.log('Under');
                    }
                else {
                    console.log('Up');
                }
            }
    })();
    
}
