var mouseevent ="empty" ;

var last_position_x,last_position_y;
canvas=document.getElementById ("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthline=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
 mouseevent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_position_of_x=e.clientX-canvas.offsetLeft;
 current_position_of_y=e.clientY-canvas.offsetTop;
 if(mouseevent=="mouseDown"){
     ctx.beginPath();
     ctx.strokeStyle=color;
     ctx.lineWidth=widthline;
     console.log("last_position_of_x and y");
     console.log("x="+last_position_x+"y="+last_position_y);
     ctx.moveTo(last_position_x,last_position_y);

     console.log("current_position_of_x and y");
     console.log("x="+current_position_of_x+"y="+current_position_of_y);
     ctx.lineTo(current_position_of_x,current_position_of_y);
     ctx.stroke();
 }
 last_position_x=current_position_of_x;
 last_position_y=current_position_of_y;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
 mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
 mouseevent="mouseLeave";
}
