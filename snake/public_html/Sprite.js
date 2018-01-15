function Sprite(colour, radius, x, y, shape) {

    this.colour = colour;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.shape = shape;
    this.div = document.createElement("DIV");


    this.init = function () {

        this.div.style.position = "absolute";
        this.div.style.left = this.x;
        this.div.style.top = this.y;

        var c = document.createElement("CANVAS");

        var ctx = c.getContext("2d");
        if (this.shape == "square") {
            ctx.rect(0, 0, this.radius, this.radius

                    );
            ctx.fillStyle = this.colour;
        } else if (this.shape == "circle") {
            ctx.beginPath();
            ctx.arc(this.radius, this.radius, this.radius, 0, 2 * Math.PI);
            ctx.fillStyle = this.colour;
        }


        ctx.fill();
        ctx.stroke();

        this.div.appendChild(c);

        document.body.appendChild(this.div);

    };
    this.setPosition = function (lng, lat) {
        this.x = lng;
        this.y = lat;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
    }

    this.move = function (howFar, dir) {
        //it moves the sprite on the screen how far and in this direction


        if (dir == 0) {
            this.x = this.x - howFar;

        } else if (dir == 1) {
            this.x = this.x + howFar;
        } else if (dir == 2) {
            this.y = this.y - howFar;
        } else if (dir == 3) {
            this.y = this.y + howFar;
        }


        //test if we have hit the edge
        if (this.x <= 0 || this.x >= window.innerWidth || this.y <= 0 || this.y >= window.innerHeight) {


            
            return 1;
            this.x = window.innerWidth / 2;
            this.y = window.innerHeight / 2;
        }
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";

        checkContact();
    }
    this.die = function () {
        document.body.removeChild(this.div);
    }

}