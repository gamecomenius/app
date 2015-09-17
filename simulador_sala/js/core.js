


var clickableElements = []; 
var dir = false;
var osmario = new mario(500,50,40,40,2);
var murd = new murdecai();
var murd2 = new murdecai();
var murd3 = new murdecai();
var sala = new sala();
var loro = new soundButton(920,0,100,100);


clickableElements.push(murd);
clickableElements.push(murd2);
clickableElements.push(murd3);
clickableElements.push(loro);

murd3.reThink();


// Main canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var elemLeft = canvas.offsetLeft;
var elemTop = canvas.offsetTop;
canvas.width = 1024;
canvas.height = 512;
document.body.appendChild(canvas);

var canvasTest =  document.createElement("canvas");
var testCtx = canvasTest.getContext("2d");
canvasTest.width = 1024;
canvasTest.height = 100;
document.body.appendChild(canvasTest);



canvas.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft;
    var y = event.pageY - elemTop;

    // Collision detection between clicked offset and element.
    clickableElements.forEach(function(element) {
        if (y > element.myY && y < element.myY + element.myHeight 
            && x > element.myX && x < element.myX + element.myWidth) {
            element.clickFunction();
        }
    });

}, false);

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
		clickableElements.forEach(function(element) {
        if (mousePos.y > element.myY && mousePos.y < element.myY + element.myHeight 
            && mousePos.x > element.myX && mousePos.x < element.myX + element.myWidth) {
				document.body.style.cursor =  "pointer";
				element.selectThis();
        }else{
			document.body.style.cursor =  "default";
			element.deselectThis();
		}
    });
	}, false);

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


var update = function (modifier) {
	if (38 in keysDown) { // Player holding up
		osmario.myY -= 256 * modifier;
	}
	if (40 in keysDown) { // Player holding down
		osmario.myY += 256 * modifier;
	}
	if (37 in keysDown) { // Player holding left
		osmario.myX -= 256 * modifier;
		dir = true;
	}
	if (39 in keysDown) { // Player holding right
		osmario.myX += 256 * modifier;
		dir = false;
	}
	
	
if((38 in keysDown && !(40 in keysDown)) || (37 in keysDown && !(39 in keysDown)) || (40 in keysDown && !(38 in keysDown)) || (39 in keysDown && !(37 in keysDown))){
		osmario.nextStep(dir);
	}else{
		osmario.stopWalk(dir);
	}
};


// Draw everything
var render = function () {
	ctx.drawImage(sala.image, 0, 0, canvas.width,canvas.height);
	murd.desenhar(390,245,60,100);
	murd2.desenhar(500,245,60,100);
	murd3.desenhar(700,245,60,100);
	loro.desenhar();
	osmario.desenhar();
	/*
	testCtx.clearRect(0, 0, canvasTest.width, canvasTest.height);
	testCtx.fillStyle = "#000000";
	testCtx.lineWidth="1";
	testCtx.rect(0,0,1020,95);
	testCtx.stroke();
	testCtx.fillStyle = "rgb(0, 0, 0)";
	testCtx.font = "24px Helvetica";
	testCtx.textAlign = "left";
	testCtx.textBaseline = "top";
	testCtx.fillText("Numero de passos: " + osmario.realSteps, 2, 0);*/
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();
	then = now;
	requestAnimationFrame(main);
	
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;


var then = Date.now();
main();