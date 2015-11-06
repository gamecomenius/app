
var midia = function(){
	this.image;
	this.x;
	this.y;
	this.w;
	this.h;
	
	this.init = function(src,x,y,w,h){
		this.image = new Image(w,h);
		this.image.src = src;
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h; 
	}
	
	this.desenhar = function(){
		ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
	}
	
	this.clickFunction = function(){
		alert("Você está usando uma midia!");
	}
	
}



