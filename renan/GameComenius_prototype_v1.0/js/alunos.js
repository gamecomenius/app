var corpos = ["img/aluno/corpos/geek_lado.png","img/aluno/corpos/ruiva_lado.png","img/aluno/corpos/nerd_lado.png"];

var pensamentos = ["img/aluno/pensamentos/motivado.png",
"img/aluno/pensamentos/normal.png","img/aluno/pensamentos/tedio.png","img/aluno/pensamentos/dormindo.png","img/aluno/pensamentos/duvida.png","img/aluno/pensamentos/exclamativo.png"];

function aluno(){
	var self = this;
	this.image;
	this.myThink;
	this.x;
	this.y;
	this.h;
	this.w;
	
	/////
	this.atencao;
	this.motivacao;
	this.isNerd;
	this.isGeek;
	this.isBully;
	/////
	this.init = function(x,y,w,h,id,sA){
		this.image = new Image();
		this.image.src = corpos[id];
		this.myThink = new think();
		this.myThink.init(0);
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h; 
		
		////
		this.atencao = sA;
		this.motivacao = 50;
		this.isNerd = false;
		this.isGeek = false;
		this.isBully = false;
	}
	
	this.desenhar = function(){
		ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
		ctx.drawImage(this.myThink.image,this.x+43,this.y-54,50,50);
	}
	
	this.clickFunction = function(){
		console.log("voce clicou em um aluno");
		//this.reThinkOneTime();
	}
	
	this.reThinkOneTime = function(nivel){
		if(nivel >= 75){
			this.myThink.reThink(0); //Motivado
		}else if(nivel >= 40){
			this.myThink.reThink(1); //Normal
		}else if(nivel >= 20){
			this.myThink.reThink(2); //Tédio
		}else{
			this.myThink.reThink(3); //Dormindo
		}
	}
	
	
	this.takeCare = function(boost){
		if(self.atencao <= 100){
			this.atencao += boost;
		}
	}
	
	this.mathFunction = function(){
		if(self.atencao > 0){
			self.atencao = self.atencao - 1;
		}
		self.reThinkOneTime(self.atencao);
	}
		
}

var think = function(){
	this.image;

	this.init = function(id){
		this.image = new Image();
		this.image.src = pensamentos[id];
	}
	
	this.reThink = function(id){
		this.image.src = pensamentos[id];
	}
}
