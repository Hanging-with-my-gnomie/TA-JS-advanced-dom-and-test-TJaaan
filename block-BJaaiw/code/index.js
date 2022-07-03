var canvas = document.querySelector("canvas");


for(var i=0; i<100;i++){
    var x = Math.random()*Window.innerWidth;
    var y = Math.random()*Window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI*2,false);
    c.strokeStyle = "blue";
    c.stroke();
}