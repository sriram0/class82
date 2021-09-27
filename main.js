var canvas = document.getElementById("cc");
    var ctx = canvas.getContext("2d");
    var color = "black", width = 3, lastE = "none",lpx, lpy;
    var my_mousedown = function(){
        lastE = "mouseDown";
        console.log(lastE);
    }
    canvas.addEventListener("mousedown", my_mousedown);
    var my_mouseup = function(){
        lastE = "mouseUp";
        console.log(lastE);
    }
    canvas.addEventListener("mouseup", my_mouseup);
    var my_mouseleave = function(){
        lastE = "mouseLeave";
        console.log(lastE);
    }
    canvas.addEventListener("mouseleave", my_mouseleave);
    var my_mousemove = function(e){
        var cpx = e.clientX - canvas.offsetLeft;
        var cpy = e.clientY - canvas.offsetTop;
        if(lastE==="mouseDown"){
            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.moveTo(lpx, lpy);
            ctx.lineTo(cpx, cpy);
            ctx.stroke();
        }
        lpx = cpx;
        lpy = cpy;
    }
    canvas.addEventListener("mousemove", my_mousemove);