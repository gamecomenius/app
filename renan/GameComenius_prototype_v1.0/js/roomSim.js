
/*************************
**************************
   Title: Game Comenius
  Version: Prototype 1.0
 Author: Renan Pinho Assi
**************************
**************************/

var cX = 1024;
var cY = 512;

var inAction = false;
var waitingTarget = false;
var currentAction = null;
var clock = 0;

var clickableElements = new Array();
var acoes = new Array();
var alunos = new Array();
var escolhas = new Array();
	// Main canvas
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var elemLeft = canvas.offsetLeft;
	var elemTop = canvas.offsetTop;
	canvas.width = cX;
	canvas.height = cY;
	document.getElementById('main').appendChild(canvas);
	
	// Inventary/Actions canvas
	var canvasInv = document.createElement("canvas");
	var ctxInv = canvasInv.getContext("2d");
	var elemLeftInv = canvasInv.offsetLeft;
	var elemTopInv = canvasInv.offsetTop;
	canvasInv.width = cX;
	canvasInv.height = cY/5;
	document.getElementById('main').appendChild(canvasInv);
	
	
	
	var mycore = new core();
	//startCapa();
	startAula();
	
	
	function getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
		  x: evt.clientX - rect.left,
		  y: evt.clientY - rect.top
		};
	  }		
	  
	 
	canvasInv.addEventListener('click', function(event) {
		var x = event.pageX - elemLeftInv;
		var y = event.pageY - elemTopInv - cY - 11;
		// Collision detection between clicked offset and element.
		acoes.forEach(function(element) {
			if (y > element.y && y < element.y + element.h
				&& x > element.x && x < element.x + element.w) {
					if(!inAction){
						element.clickFunction();
					}
			}
		});
	
	}, false);
	
	canvas.addEventListener('click', function(event) {
		var x = event.pageX - elemLeft;
		var y = event.pageY - elemTop;
	
		// Collision detection between clicked offset and element.
		clickableElements.forEach(function(element) {
			if (y > element.y && y < element.y + element.h
				&& x > element.x && x < element.x + element.w) {
				element.clickFunction();
			}
		});
		
		if(waitingTarget){
			alunos.forEach(function(element) {
				if (y > element.y && y < element.y + element.h
					&& x > element.x && x < element.x + element.w) {
					element.clickFunction();
					currentAction.localTarget = element;
					currentAction.color = "red";
					currentAction.desenhar();
					inAction = true;
				}
			});
		}
	
	}, false);
	
	
	var main = function () {
		var now = Date.now();
		var delta = now - then;
		mycore.render();
		then = now;
		requestAnimationFrame(main);
		
	};

		var w = window;
		requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
		
		
		var then = Date.now();
		main();
	

	
	function startAula(){
		canvasInv.style.display = "block";
		ctxInv.beginPath();
		ctxInv.font = "20px Arial";
		ctxInv.textAlign = 'center';
		ctxInv.fillText("Ações",canvasInv.width/2,20);
		ctxInv.rect(0,0,canvasInv.width,canvasInv.height);
		ctxInv.stroke();
		ctxInv.closePath();
		mycore.configurarAula();
			
	}
	
	function startMapa(){
		mycore.configurarMapa();
		
	}
	
	function startAgenda(){
		mycore.configurarAgenda();
	}
	
	function startQuarto(){
		clickableElements = new Array();
		escolhas = new Array();
		mycore.configurarQuarto();
	}
	
	function startBar(){
		mycore.configurarBar();
	}
	
	function startFeedback(){
		mycore.configurarFeedback();
	}
	
	function startCapa(){
		mycore.configurarCapa();
	}
	
	function resetCanvas(){
		clickableElements = [];
		alunos = [];
		inAction = false;
		currentAction = null;
		canvasInv.style.display = "none";
		
		acoes = [];
	}	