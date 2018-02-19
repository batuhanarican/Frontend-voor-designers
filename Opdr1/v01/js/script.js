var getAll = document.getElementById("alle");
var all = getAll.checked;
var allData;

var getRood = document.getElementById("rood");
var rood = getRood.checked;
var roodData;

var getBlauw = document.getElementById("blauw");
var blauw = getBlauw.checked;
var blauwData;

var getPaars = document.getElementById("paars");
var paars = getPaars.checked;
var paarsData;

var getGeel = document.getElementById("geel");
var geel = getGeel.checked;
var geelData;

var changeAll = document.querySelectorAll(".all");
var changeRood = document.querySelectorAll(".rood");
var changeBlauw = document.querySelectorAll(".blauw");
var changePaars = document.querySelectorAll(".paars");
var changeGeel = document.querySelectorAll(".geel");

function checkAll() {
    allData = getAll.checked;
    console.log(getAll.checked);
    returnAll();
    return allData;
}

function returnAll() {
    if (allData === true) {
        console.log("All - true");
        for (var i = 0; i < 100; i ++) {
            changeRood[i].classList.add('rood-animate');
            changeBlauw[i].classList.add('blauw-animate');
            changePaars[i].classList.add('paars-animate');
            changeGeel[i].classList.add('geel-animate');
            setTimeout(function() {
            for (var i = 0; i < 100; i ++) {
                changeRood[i].classList.remove('rood-hide');
                changeBlauw[i].classList.remove('blauw-hide');
                changePaars[i].classList.remove('paars-hide');
                changeGeel[i].classList.remove('geel-hide');
                changeRood[i].classList.remove('rood-animate');
                changeBlauw[i].classList.remove('blauw-animate');
                changePaars[i].classList.remove('paars-animate');
                changeGeel[i].classList.remove('geel-animate');
                }
            }, 300);
        }
        
    }
}

function checkRood() {
    roodData = getRood.checked;
    console.log(getRood.checked);
    returnRood();
    return roodData;
}

function returnRood() {
    if (roodData === true) {
        console.log("Rood - true");
        for (var i = 0; i < 100; i ++) {
            changeRood[i].classList.add('rood-animate');
            changeBlauw[i].classList.add('blauw-animate');
            changePaars[i].classList.add('paars-animate');
            changeGeel[i].classList.add('geel-animate');
            setTimeout(function() {
            for (var i = 0; i < 100; i ++) {
                changeRood[i].classList.remove('rood-hide');
                changeBlauw[i].classList.add('blauw-hide');
                changePaars[i].classList.add('paars-hide');
                changeGeel[i].classList.add('geel-hide');
                changeRood[i].classList.remove('rood-animate');
                changeBlauw[i].classList.remove('blauw-animate');
                changePaars[i].classList.remove('paars-animate');
                changeGeel[i].classList.remove('geel-animate');
                }
            },300);
        }
    }
}

function checkBlauw() {
    blauwData = getBlauw.checked;
    console.log(getBlauw.checked);
    returnBlauw();
    return blauwData;
}

function returnBlauw() {
    if (blauwData === true) {
        console.log("Blauw - true");
        for (var i = 0; i < 100; i ++) {
            changeRood[i].classList.add('rood-animate');
            changeBlauw[i].classList.add('blauw-animate');
            changePaars[i].classList.add('paars-animate');
            changeGeel[i].classList.add('geel-animate');
            setTimeout(function(){
            for (var i = 0; i < 100; i ++) {
                changeRood[i].classList.add('rood-hide');
                changeBlauw[i].classList.remove('blauw-hide');
                changePaars[i].classList.add('paars-hide');
                changeGeel[i].classList.add('geel-hide');
                changeRood[i].classList.remove('rood-animate');
                changeBlauw[i].classList.remove('blauw-animate');
                changePaars[i].classList.remove('paars-animate');
                changeGeel[i].classList.remove('geel-animate');
                }
            }, 300);
        }
    }
}

function checkPaars() {
    paarsData = getPaars.checked;
    console.log(getPaars.checked);
    returnPaars();
    return paarsData;
}

function returnPaars() {
    if (paarsData === true) {
        console.log("Paars - true");
        for (var i = 0; i < 100; i ++) {
            changeRood[i].classList.add('rood-animate');
            changeBlauw[i].classList.add('blauw-animate');
            changePaars[i].classList.add('paars-animate');
            changeGeel[i].classList.add('geel-animate');
            setTimeout(function(){
            for (var i = 0; i < 100; i ++) {
                changeRood[i].classList.add('rood-hide');
                changeBlauw[i].classList.add('blauw-hide');
                changePaars[i].classList.remove('paars-hide');
                changeGeel[i].classList.add('geel-hide');
                changeRood[i].classList.remove('rood-animate');
                changeBlauw[i].classList.remove('blauw-animate');
                changePaars[i].classList.remove('paars-animate');
                changeGeel[i].classList.remove('geel-animate');
                }
            }, 300);
        }
    }
}

function checkGeel() {
    geelData = getGeel.checked;
    console.log(getGeel.checked);
    returnGeel();
    return geelData;
}

function returnGeel() {
    if (geelData === true) {
        console.log("Geel - true");
        for (var i = 0; i < 100; i ++) {
            changeRood[i].classList.add('rood-animate');
            changeBlauw[i].classList.add('blauw-animate');
            changePaars[i].classList.add('paars-animate');
            changeGeel[i].classList.add('geel-animate');
            setTimeout(function(){
            for (var i = 0; i < 100; i ++) {
                changeRood[i].classList.add('rood-hide');
                changeBlauw[i].classList.add('blauw-hide');
                changePaars[i].classList.add('paars-hide');
                changeGeel[i].classList.remove('geel-hide');
                changeRood[i].classList.remove('rood-animate');
                changeBlauw[i].classList.remove('blauw-animate');
                changePaars[i].classList.remove('paars-animate');
                changeGeel[i].classList.remove('geel-animate');
                }
            }, 300);
        }
    }
}

getAll.addEventListener('click', checkAll, false);
getRood.addEventListener('click', checkRood, false);
getBlauw.addEventListener('click', checkBlauw, false);
getPaars.addEventListener('click', checkPaars, false);
getGeel.addEventListener('click', checkGeel, false);