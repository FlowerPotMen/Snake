function Block() {
    this.div = document.createElement("DIV");
    this.size = 20;
    this.shapes = ['ZigZag', 'L', 'Line', 'Square', 'T'];
    this.colours = ['blue', 'red', 'green', 'yellow', 'purple'];
    this.ctx;
    this.spin = 0;
    this.left = 0;
    this.top = 0;
    this.width;
    this.height;

    this.move = function (direction, distance) {
        if (distance == null) {
            distance = this.size;
        }
        if (direction == "down") {
            beep.play();
            this.top = this.top + distance;
        } else if (direction == "left") {
            this.left = this.left - distance;
        } else if (direction == "right") {
            this.left = this.left + distance;

        }
        //makes block hit the bottom of the screen no matter how far rotated
        if (this.spin == 90 || this.spin == 270) {
            blockHeight = this.width;
            blockWidth = this.height;
        } else {
            blockHeight = this.height;
            blockWidth = this.width;
        }


        if ((this.top + blockHeight) > grid.height + 10) {
            //test if we have hit the bottom^^

            this.top = this.top - this.size;
            return 1;
        } else if ((this.left + blockWidth) >= (window.innerWidth / 2) + (grid.width / 2) + 15) {
            //tests if we have hit the right side^^
            this.left = this.left - this.size;
        } else if (this.left < ((window.innerWidth / 2) - (this.size * 11))) {
            //tests if we have hit the left side^^
            this.left = this.left + this.size;
        }
        this.div.style.top = this.top;
        this.div.style.left = this.left;
    }
    this.rotate = function () {
        this.spin = this.spin + 90;
        if (this.spin == 360) {
            this.spin = 0;
        }
        this.div.style.transform = "rotate(" + this.spin + "deg)";

        //if roated with odd height then adjust
        if ((this.spin == 90 || this.spin == 270) && (this.blocksHigh % 2)) {
            this.move("left", (this.size / 2));
            this.move("down", ((0 - this.size) / 2));

        } else if ((this.spin == 0 || this.spin == 180) && (this.blocksHigh % 2)) {
            this.move("right", (this.size / 2));
            this.move("down", ((0 - this.size) / 2));
        }
    }
    this.spawn = function () {
        //selects a random shape and colour
        //display on screen
        [this.top, this.left] = grid.cellLoc(11, 0);
        this.div.style.position = "absolute";

        this.div.style.left = this.left;
        this.div.style.top = this.top;

        //generate shape
        var c = document.createElement("CANVAS");
        this.ctx = c.getContext("2d");
        //choose random shape and colour
        var shape = randomNumber(0, this.shapes.length);
        var colour = randomNumber(0, this.colours.length);


        if (this.shapes[shape] == 'L') {
            this.L(this.ctx, this.colours[colour]);
        } else if (this.shapes[shape] == 'Square') {
            this.Square(this.ctx, this.colours[colour]);
        } else if (this.shapes[shape] == 'ZigZag') {
            this.ZigZag(this.ctx, this.colours[colour]);
        } else if (this.shapes[shape] == 'Line') {
            this.Line(this.ctx, this.colours[colour]);
        } else if (this.shapes[shape] == 'T') {
            this.T(this.ctx, this.colours[colour]);
        }
        this.div.appendChild(c);
        document.body.appendChild(this.div);
        //start it moving
    }
    this.die = function () {

    }
    this.L = function (ctx, colour) {

        this.blocksWide = 2;
        this.blocksHigh = 3;

        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(0, this.size, this.size, this.size);
        ctx.rect(0, this.size * 2, this.size, this.size);
        ctx.rect(this.size, 0, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * this.blocksWide;
        this.height = this.size * this.blocksHigh;
        this.div.style.height = this.height
        this.div.style.width = this.width;
    }
    this.Square = function (ctx, colour) {

        this.blocksWide = 2;
        this.blocksHigh = 2;

        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(0, this.size, this.size, this.size);
        ctx.rect(this.size, 0, this.size, this.size);
        ctx.rect(this.size, this.size, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * this.blocksWide;
        this.height = this.size * this.blocksHigh;
        this.div.style.height = this.height;
        this.div.style.width = this.width;
    }
    this.ZigZag = function (ctx, colour) {

        this.blocksWide = 2;
        this.blocksHigh = 3;

        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(0, this.size, this.size, this.size);
        ctx.rect(this.size, this.size, this.size, this.size);
        ctx.rect(this.size, this.size * 2, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * this.blocksWide;
        this.height = this.size * this.blocksHigh;
        this.div.style.height = this.height;
        this.div.style.width = this.width;
    }
    this.Line = function (ctx, colour) {
        this.blocksWide = 4;
        this.blocksHigh = 1;

        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(this.size, 0, this.size, this.size);
        ctx.rect(this.size * 2, 0, this.size, this.size);
        ctx.rect(this.size * 3, 0, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * this.blocksWide;
        this.height = this.size * this.blocksHigh;
        this.div.style.height = this.height;
        this.div.style.width = this.width;
    }
    this.T = function (ctx, colour) {
        this.blocksWide = 3;
        this.blocksHigh = 3;

        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(this.size, 0, this.size, this.size);
        ctx.rect(this.size * 2, 0, this.size, this.size);
        ctx.rect(this.size, this.size, this.size, this.size);
        ctx.rect(this.size, this.size * 2, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * this.blocksWide;
        this.height = this.size * this.blocksHigh;
        this.div.style.height = this.height;
        this.div.style.width = this.width;
    }
}