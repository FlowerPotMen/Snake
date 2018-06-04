function Grid() {
    //globals
    this.div = document.createElement("DIV");
    this.cellSize=20;
    this.cellsWide=22;
    this.cellsHigh=50;
    this.width=this.cellSize*this.cellsWide;
    this.cells;
    this.x=0;
    this.y=0;

    /**
     * grid setup
     * @returns {undefined}
     */
    this.init = function () {
        this.x=window.innerWidth/2-((this.cellsWide/2)*this.cellSize);
        this.div.style.position = "absolute";

        this.div.style.left = this.x;
        this.div.style.top = this.y;
        this.div.style.width = this.width;
        this.div.style.border = "thick solid #0000FF";
        var c = document.createElement("CANVAS");
        this.ctx = c.getContext("2d");
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(this.width, 150);
        this.ctx.stroke();
        
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
}

