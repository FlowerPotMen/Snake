//globals
var circles = [];
var direction;
var food;
var snakeLength = 1;
var distance = 20;
var current = 0;
var colour = "yellow";

function run() {
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;

    // creats new food
    spawnFood();

    // creats circles 
    for (c = 0; c < snakeLength; c++) {

        circles[c] = new Sprite(colour, 11, randomNumber(0, (window.innerWidth - 330)), randomNumber(0, (window.innerHeight - 330)), "circle");

        circles[c].init();


    }
    //alert(circles.length);

    direction = randomNumber(0, 4);


    //keeps snake moving
    setInterval(function () {
        for (i = 0; i < circles.length; i++) {
            currentX = circles[i].x;
            currentY = circles[i].y;
            if (i == 0) {
                circles[i].move(distance, direction);
            } else {
                circles[i].setPosition(nextX, nextY);
            }
            nextX = currentX;
            nextY = currentY;
        }
        for (z = 1; z < circles.length; z++){
            checkOverlap(circles[0],circles[z]);
        }
    }, 100);
}




function keys(event) {
    //w=119 s=115 a=97 d=100 enter=13 space=32

    var e = event.keyCode;

    //alert(e)

    if (e == "100" || e == "68") {
        // move(speed, "right");
        if (direction != 0 || snakeLength == 1) {

            direction = 1;
        }

    } else if (e == "119" || e == "87") {
        //move(speed, "up");
        if (direction != 3 || snakeLength == 1) {

            direction = 2;
        }
    } else if (e == "115" || e == "83") {
        //move(speed, "down");
        if (direction != 2 || snakeLength == 1) {

            direction = 3;
        }
    } else if (e == "97" || e == "65") {
        //move(speed, "left");
        if (direction != 1 || snakeLength == 1) {

            direction = 0;
        }
    }
}

function randomNumber(min, max) {

    return Math.floor((Math.random() * (max - min))) + min;

}
//checks if any of the sprites are touching
function checkContact() {
    var x1 = circles[0].x;
    var y1 = circles[0].y;
    var x2 = food.x;
    var y2 = food.y;
    var z1 = circles[0].radius;
    var z2 = food.radius;

    if ((x1 >= x2 && x1 <= (x2 + z2) &&
            y1 >= y2 && y1 <= (y2 + z2)) ||
            ((x1 + z1) >= x2 && (x1 + z1) <= (x2 + z2) &&
                    (y1 + z1) >= y2 && (y1 + z1) <= (y2 + z2))
            ) {
        food.die();
        increaseLength(2);
        distance = distance + 2;
        spawnFood();
    }
}
//checks if snake goes back on its self
function checkOverlap(c1, c2) {
    var x1 = c1.x;
    var y1 = c1.y;
    var x2 = c2.x;
    var y2 = c2.y;
    var z1 = c1.radius;
    var z2 = c2.radius;

    if ((x1 >= x2 && x1 <= (x2 + z2) &&
            y1 >= y2 && y1 <= (y2 + z2)) ||
            ((x1 + z1) >= x2 && (x1 + z1) <= (x2 + z2) &&
                    (y1 + z1) >= y2 && (y1 + z1) <= (y2 + z2))
            ) {
        alert("hi");
    }
}


//spawns new food

function spawnFood() {
    food = new Sprite("red", 22, randomNumber(0, (window.innerWidth - 11)), randomNumber(0, (window.innerHeight - 11)), "square");
    food.init();
}
function increaseLength(howMany) {
    for (c = 0; c < howMany; c++) {

        var circ = new Sprite(colour, 11, randomNumber(0, (window.innerWidth - 330)), randomNumber(0, (window.innerHeight - 330)), "circle");

        circ.init();

        circles.push(circ);


    }
    snakeLength = snakeLength + howMany;
}