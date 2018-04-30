function Block() {
    this.div = document.createElement("DIV");
    this.size = 20;
    this.shapes = ['L', 'Square', 'ZigZag'];
    this.colours = ['blue', 'red', 'green', 'yellow', 'purple'];
    this.ctx;
    this.spin = 0;
    this.left = 0;
    this.top = 0;
    this.width;
    this.height;

    this.move = function (direction) {
        if (direction == "down") {
            this.top = this.top + this.size;
        } else if (direction == "left") {
            this.left = this.left - this.size;
        } else if (direction == "right") {
            this.left = this.left + this.size;
        }
        //if horizontal
        if (this.spin == 90 || this.spin == 270) {
            blockHeight = this.width;
            blockWidth = this.height;
        } else {
            blockHeight = this.height;
            blockWidth = this.width;
        }
        //test if we have hit the edge
        if ((this.top + blockHeight) >= window.innerHeight) {
            this.top = this.top - this.size;
            return 1;
        }
        else if ((this.left + blockWidth) >= window.innerWidth) {
            this.left = this.left - this.size;
        }
        else if (this.left <= 0) {
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
    }
    this.spawn = function () {
        //selects a random shape and colour
        //display on screen
        this.div.style.position = "absolute";
        this.left = window.innerWidth * 0.5;
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
        }
        this.div.appendChild(c);
        document.body.appendChild(this.div);
        //start it moving
    }
    this.die = function () {

    }
    this.L = function (ctx, colour) {

        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(0, this.size, this.size, this.size);
        ctx.rect(0, this.size * 2, this.size, this.size);
        ctx.rect(this.size, 0, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * 2;
        this.height = this.size * 3;
        this.div.style.height = this.height
        this.div.style.width = this.width;
    }
    this.Square = function (ctx, colour) {
        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(0, this.size, this.size, this.size);
        ctx.rect(this.size, 0, this.size, this.size);
        ctx.rect(this.size, this.size, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * 2;
        this.height = this.size * 2;
        this.div.style.height = this.height;
        this.div.style.width = this.width;
    }
    this.ZigZag = function (ctx, colour) {
        ctx.rect(0, 0, this.size, this.size);
        ctx.rect(0, this.size, this.size, this.size);
        ctx.rect(this.size, this.size, this.size, this.size);
        ctx.rect(this.size, this.size * 2, this.size, this.size);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.stroke();
        this.width = this.size * 2;
        this.height = this.size * 3;
        this.div.style.height = this.height;
        this.div.style.width = this.width;
    }
}