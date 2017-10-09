//globals
var d = document.createElement("DIV");
var speed = 25;
var distance = 10;
function run(){
    drawCircle("yellow",11,80,50);
//    drawCircle("yellow",11,60,50);
//    drawCircle("yellow",11,40,50);
}



function drawCircle(colour,radius,x,y){
    
    d.style.position="absolute";
    d.style.left=x;
    d.style.top=y;
    
    var c = document.createElement("CANVAS");

    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius,radius,radius,0,2*Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.stroke();
    
    d.appendChild(c);
    
    document.body.appendChild(d);
}
function keys(event){
    //w=119 s=115 a=97 d=100 enter=13
    
    var e = event.keyCode;
    
  //alert(e)
    
   if(e=="100"){
        d.style.left=(parseInt(d.style.left)+speed) + "px";
    }
    else if(e=="119"){
        d.style.top=(parseInt(d.style.top)-speed) + "px";
    }
    else if(e=="115"){
        d.style.top=(parseInt(d.style.top)+speed) + "px";
    }
    else if(e=="97"){
        d.style.left=(parseInt(d.style.left)-speed) + "px";
   }

}

    
    
   

