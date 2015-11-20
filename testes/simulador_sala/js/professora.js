var steps = ["animated/mario_step1.png","animated/mario_step2.png","animated/mario_step3.png","animated/mario_step1_I.png","animated/mario_step2_I.png","animated/mario_step3_I.png"];
var playlist = ["effects/step1.wav", "effects/step2.wav"];
function mario(x,y,w,h,d){
	var self = this;
	this.image = new Image();
	this.image.src = "animated/mario_step1.png";
	this.audio = new Audio();
	this.audio.src = playlist[0];
	this.audioReady = true;
	this.myX = x;
	this.myY = y;
	this.myHeight = h;
	this.myWidth = w;
	this.stepNow = 0;
	this.realSteps = 0;
	this.dirNumber = d;
	this.desenhar = function(){
		ctx.drawImage(this.image,this.myX,this.myY,this.myWidth,this.myHeight);
	}
	
	this.nextStep = function(isLeft){
			var setDir = (+ isLeft)*(3);
			this.stepNow++;
			if((this.stepNow%5) == 0){
				var o = this.stepNow%(steps.length/this.dirNumber) + setDir;
				this.image.src = steps[this.stepNow%(steps.length/this.dirNumber) + setDir];
					this.audio.play();
			}
			if(this.audioReady || (this.stepNow%15) == 0){
				this.realSteps++;
				this.audioReady = false;
				this.audio.src = playlist[this.stepNow%2];
				this.audio.play();
			}
	}
	
	this.stopWalk = function(isLeft){
		var setDir = (+ isLeft)*(3);
		//this.audioReady = true;
		this.stepNow = 0 + setDir;
		this.image.src = steps[this.stepNow];
	}
	
		
}

