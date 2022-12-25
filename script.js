function pageLoaded () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    
    
    
    
    function triangle (positionX, positionY, size) {
        context.beginPath();
        context.moveTo(positionX,positionY);
        context.lineTo(positionX + size * .5,positionY + size);
        context.lineTo(positionX - size * .5,positionY + size);
        context.lineTo(positionX,positionY);
        
        
        context.fillStyle = 'rgba(255,165,0,.5)';
        context.fill();
        context.strokeStyle = 'rgba(0,0,0,.5)';
        context.stroke();


    }    
    
    
    triangle(230, 160, 50);
    triangle(270, 100, 50);
    triangle(200, 50, 150);

    
    


}

window.addEventListener("load", pageLoaded);