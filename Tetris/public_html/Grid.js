function Grid() {
    //globals
    this.div = document.createElement("DIV");
    this.cellSize = 20;
    this.cellsWide = 22;
    this.cellsHigh = 44;
    this.width = this.cellSize * this.cellsWide;
    this.height = this.cellSize * this.cellsHigh;
    this.cells;
    this.x = 0;
    this.y = 0;

    /**
     * grid setup
     * @returns {undefined}
     */
    this.init = function () {
        this.x = window.innerWidth / 2 - ((this.cellsWide / 2) * this.cellSize);
        this.div.style.position = "absolute";

        this.div.style.left = this.x;
        this.div.style.top = this.y;
        this.div.style.width = this.width;
        this.div.style.border = "thick solid #0000FF";
        var c = document.createElement("CANVAS");
        c.width = this.width;
        c.height = this.height;
        this.ctx = c.getContext("2d");
        for (i = 0; i < this.cellsHigh; i++) {

            this.ctx.beginPath();
            this.ctx.moveTo(0, i * this.cellSize);
            this.ctx.lineTo(this.width, i * this.cellSize);
            this.ctx.stroke();

        }
        for (i = 0; i < this.cellsWide; i++) {

            this.ctx.beginPath();
            this.ctx.moveTo(i * this.cellSize, 0);
            this.ctx.lineTo(i * this.cellSize, this.height);
            this.ctx.stroke();

        }
        this.div.appendChild(c);
        document.body.appendChild(this.div);
    }

    /**
     * checking whether the cell is full
     * @param cellRef
     * @returns {boolean}  
     */
    this.isCellEmpty = function () {

    }
    /**
     * returns cell coords for cell referance
     * @param x how many down
     * @param y how many across
     * @returns array top and left
     */
    this.cellLoc = function (lat,lng) {
        return([(lng*this.cellSize)+4,(lat*this.cellSize)+this.x+4]);
    }
}

