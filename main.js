var mouseevent = "empty"

var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

canvas.addEventListener("mousedown",my_mouse_down)

function my_mouse_down(e){
    color=document.getElementById("color").value
    width=document.getElementById("width").value
    radius=document.getElementById("radius").value

    mouseevent="mousedown"  
}

canvas.addEventListener("mouseup",my_mouse_up)

function my_mouse_up(e){
    mouseevent="mouseup"  
}
canvas.addEventListener("mouseleave",my_mouse_leave)

function my_mouse_leave(e){
    mouseevent="mouseleave"  
}
canvas.addEventListener("mousemove",my_mouse_move)

function my_mouse_move(e){
    var currentx =e.clientX-canvas.offsetLeft
    var currenty = e.clientY-canvas.offsetTop

    if(mouseevent=="mousedown"){
        console.log("current position of x and y cordinates = ")
        console.log("x = "+ current_position_of_mouse_x + "y = " + current_position_of_mouse_y)
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius,0,2*Math.PI)
        ctx.stroke()
    }
  
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
}
