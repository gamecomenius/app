
var capa = function(){
	this.image = new Image();
	this.image.src = "img/capa/capa.gif";
}


var sala = function(){
	this.image = new Image();
	this.image.src = "img/agenda.jpg";
	
	
	this.configurar = function(){
		this.image.src = "img/assets/SALA.png";
		var tempArray = buttons;
		buttons = [];
		for(i = 0; i < tempArray.length;i++){
			try{
				buttons.push(escolhas[i].configurar(salaX,salaY));
				salaX = salaX + 60;	
			}catch(exc){}
		} 
		
	}
}


var quarto = function(){
	this.image = new Image();
	this.image.src = "img/assets/QUARTO.png";
}


var mapa = function(){
	this.image = new Image();
	this.image.src = "img/mapa/mapa.jpg";
}

var bar = function(){
	this.image = new Image();
	this.image.src = "img/bar/barTheme.png";
}

var feedback = function(){
	this.image = new Image();
	this.image.src = "img/feedback/feedback.jpg";
}