function soundButton(x,y,w,h){
	this.image = new Image();
	this.image.src = "img/HUD/loro.png";
	this.myX = x;
	this.myY = y;
	this.myHeight = h;
	this.myWidth = w;
	this.audio = new Audio('mp3/evil_papagali.mp3');
	this.audio.volume  = 0.3;
	this.audio.currentTime = 40;
	this.isOn = false;
	this.desenhar = function(){
		ctx.drawImage(this.image,this.myX,this.myY,this.myWidth,this.myHeight);
	}	
	
	this.clickFunction = function(core){
		if(!this.isOn){
			this.audio.play();
			this.isOn = true;
		}else{
			this.audio.pause();
			this.audio.currentTime = 40;
			this.isOn = false;
		}
	}
	
	this.selectThis = function(){
	}
	
	this.deselectThis = function(){
	}		
}




