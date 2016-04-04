var n=4; //row and column

for(var i=0; i<n; i++) {
    document.body.innerHTML+='<div class="row">';

    for(k=0; k<n; k++) {
        document.body.innerHTML+='<div class="square"></div>';
    }
    document.body.innerHTML+='</div>';
}

window.onload = function start() {
    colorChange();
}

function colorChange() {
    var squares = document.getElementsByClassName('square');
    window.setInterval(function background() {
        var randomSquare = Math.floor(Math.random() * squares.length);
        squares[randomSquare].style.backgroundColor = randomColor();
    }, 250);
}

function randomColor() {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
return randomColor;
}
