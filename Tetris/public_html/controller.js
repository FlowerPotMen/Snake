//globals
var b;
var speed = 500;
var timer;
var grid = [];
var beep;

function init() {
    grid = new Grid;
    grid.init();


    //loads up sounds
    beep = document.createElement("audio");
    beep.src = "sounds/beep.mp3";
    beep.setAttribute("preload", "auto");
    beep.setAttribute("controls", "none");
    beep.style.display = "none";
    document.body.appendChild(beep);
//    this.play = function () {
//        this.sound.play();
//    }
//    this.stop = function () {
//        this.sound.pause();
//    }

    run();
}
/**
 * starts the game
 * @returns {undefined}
 */
function run() {
    b = new Block;
    b.spawn();
    moveBlock(b);
}

/*
 * gives us a random number between min and max
 * @param {number} min 
 * @param {number} max
 * @returns {number}  
 */
function randomNumber(min, max) {

    return Math.floor((Math.random() * (max - min))) + min;

}
/**
 * picks up the users keypress
 * @param {type} event
 * @returns {undefined}
 */
function action(event) {
    var e = event.keyCode;
    //w=119 s=115 a=97 d=100 enter=13 space=32
    if (e == "119" || e == "87") {
        b.rotate();
    } else if (e == "115") {
        b.move("down");
    } else if (e == "97") {
        b.move("left");
    } else if (e == "100") {
        b.move("right");
    }
}
/**
 * moves block automatically
 * @param block
 * @returns {undefined}
 */
function moveBlock(block) {
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(function () {
        bottom = block.move("down");
        //have I hit the bottom of the screen
        if (bottom == 1) {
            beep.play();
            run();
        }
    }, speed);
}
    