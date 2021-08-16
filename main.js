var mouse_event ;
canvas= document.getElementById("canvas_1");
ctx=getContext("2d");

canvas.addEventListener("mouseDown",my_mousedown);

function my_mousedown(e){
    color=document.getElementById("color").Value;
    
    width =document.getElementById("width").Value;
    radius=document.getElementById("radius").Value;
    mouse_event= "mouseDown";

}

canvas.addEventListener("mouse_Up",my_mouseUp);
function my_mouseUp(e){
    mouse_Event= "mouse_Up";
}

canvas.addEventListener("mouse_Leave",my_mouseLeave); 
function my_mouseLeave(e){
    mouse_Event= "mouse_Leave";
}

canvas.addEventListener("mouse_move",my_mouseMove);
function my_mouseMove(e){
    current_position_of__mouse_x= e.clientX  - canvas.offsetLeft;
    current_position_of__mouse_y= e.clientY  - canvas.offsetTop;

    if(mouse_Event=="mouseDown"){
        consol.log("current possition of x and y coordinates=");

        consol.log("x =" +current_position_of__mouse_x + "y=" +current_position_of__mouse_y);

        ctx.beginPath();

        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.arc(current_position_of__mouse_x,current_position_of__mouse_y,radius,0,2*Math.PI);
        ctx.stroke();
    }

}
