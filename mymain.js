canvas=document.getElementById("mycanvas")
context=canvas.getContext("2d")


context.beginPath() // Start a new line
context.strokeStyle="red" // give red colour
context.lineWidth=2 // the thickness of the line is 2
context.arc(200, 200, 40 ,0 , 2*Math.PI) // Command for drawing a circle
context.stroke() //Command to draw

canvas.addEventListener("mousedown",md)

function md(event) {
mouse_x=event.clientX //To know where the mouse is in x axis (left , right)
mouse_y=event.clientY //To know where the mouse is in y axis  (top , bottom)
circle(mouse_x,mouse_y) //Calling the function circle to draw when the mouse is clicked
   
}


function circle(mousex,mousey) {
context.beginPath() // Start a new line
context.strokeStyle="red" // give red colour
context.lineWidth=2 // the thickness of the line is 2
context.arc(mousex, mousey, 40 ,0 , 2*Math.PI) // Command for drawing a circle
context.stroke() //Command to draw
}  