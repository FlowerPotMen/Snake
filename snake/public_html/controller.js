//globals
var circles = [];

//var d = document.createElement("DIV");
//var d2 = document.createElement("DIV");

var speed = 25;
var distance = 10;

var current=0;

function run(){
    circles.push(drawCircle("yellow",11,40,50));
    circles.push(drawCircle("red",11,80,50));
    circles.push(drawCircle("blue",11,120,50));
    circles.push(drawCircle("green",11,160,50));
}



function drawCircle(colour,radius,x,y){
    var div = document.createElement("DIV");
    div.style.position="absolute";
    div.style.left=x;
    div.style.top=y;
    
    var c = document.createElement("CANVAS");

    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(radius,radius,radius,0,2*Math.PI);
    ctx.fillStyle = colour;
    ctx.fill();
    ctx.stroke();
    
    div.appendChild(c);
    
    document.body.appendChild(div);
    return div;
}
function keys(event){
    //w=119 s=115 a=97 d=100 enter=13 space=32
    
    var e = event.keyCode;
    
  //alert(e)
    
   if(e=="100"){
       move(speed,"right");
    }
    else if(e=="119"){
        move(speed,"up");
    }
    else if(e=="115"){
        move(speed,"down");
    }
    else if(e=="97"){
        move(speed,"left");
   }
   else if(e=="32"){
       current++;
       if(current>(circles.length-1)){
           current=0;
       }

       
   }
}
function move(howFar,direction){
    
    d=circles[current];
    
    var x=parseInt(d.style.left);
    var y=parseInt(d.style.top);
    
    
    if(direction=="left"){
        x=x-howFar;
        
    }
    else if(direction=="right"){
        x=x+howFar;
    }
    else if(direction=="up"){
        y=y-howFar;
    }
    else if(direction=="down"){
        y=y+howFar;
    }
    d.style.left=x+"px";
    d.style.top=y+"px";
}
    
    
   

