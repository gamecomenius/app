var objects = ["img/saltitao.png","img/mordecai.png","img/rigby.png","img/pairulito.png","img/musculoso.png","img/fantasmao.png","img/benson.png","img/thomas.png"];

function murdecai(){
	var self = this;
	this.image = new Image();
	this.image.src = "img/mordecai.png";
	this.myThink = new think();
	this.myX;
	this.myY;
	this.myHeight;
	this.myWidth;
	this.desenhar = function(x,y,w,h){
		this.myX = x;
		this.myY = y;
		this.myHeight = h;
		this.myWidth = w;
		ctx.drawImage(this.image,x,y,w,h);
		ctx.drawImage(this.myThink.image,x-35,y-80,75,80);
		ctx.drawImage(this.myThink.thinkImage,x-10,y-75,30,50);
	}
	
	this.clickFunction = function(){
		this.reThinkOneTime();
	}
	
	this.reThinkOneTime = function(){
		this.myThink.reThink();
	}
	
	this.reThink = function(){
		setInterval(function(){self.myThink.reThink()},1000);
	}
	
	this.selectThis = function(){
		this.image.src = "img/mordecai_highlighted.png";
	}
	
	this.deselectThis = function(){
		this.image.src = "img/mordecai.png";
	}
		
}

var think = function(){
	this.image = new Image();
	this.image.src = "img/think.png";
	this.thinkImage = new Image();
	this.thinkImage.src;
	this.reThink = function(){
		var a = Math.floor(Math.random()*objects.length);
		this.thinkImage.src = objects[a];
	}
}
