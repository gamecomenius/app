
/*************************
 **************************
 Title: Game Comenius
 Version: Prototype 1.0
 Author: Renan Pinho Assi
 **************************
 **************************/

/*************************
 **************************
Juntei todas tuas funcoes, pois usando a funcação $(function (){}) tu nao consegue usar da forma como tu fez
para usar dessa forma OO tens que criar os prototypes e instancia-las veja o exemplo nesse link

 **************************
 **************************/
//essa função $(function (){}) eh essencial no javascript, pois ela soh vai rodar depois de todo html ter carregado
$(function () {

    //toastr.info("Olá JogadÔ!");
    //toastr.success('We do have the Kapua suite available.', 'Turtle Bay Resort', {timeOut: 2000})

//VARIAVEIS
	var cX = 1310;
    var cY = 768;

    var inAction = false;
    var waitingTarget = false;
    var currentAction = null;
    var clock = 0;

    var clickableElements = new Array();
    var acoes = new Array();
    var alunos = new Array();
    var escolhas = new Array();
	var salaID = null;
	var metodologia = null;
	var initialTime = 2500;
	
	
	var onElement = null;
	var mouseOnElement = null;

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var elemLeft = canvas.offsetLeft;
    var elemTop = canvas.offsetTop;
    canvas.width = cX;
    canvas.height = cY;

    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    document.getElementById('main').appendChild(canvas);

    var canvasInv = document.createElement("canvas");
    var ctxInv = canvasInv.getContext("2d");
    var elemLeftInv = canvasInv.offsetLeft;
    var elemTopInv = canvasInv.offsetTop;
    canvasInv.width = cX;
    canvasInv.height = cY / 5;
    document.getElementById('main').appendChild(canvasInv);

    var corpos = ["img/aluno/corpos/geek_norte.png", "img/aluno/corpos/nerd_norte.png", "img/aluno/corpos/peste_norte.png",
				  "img/aluno/corpos/geek_sul.png", "img/aluno/corpos/nerd_sul.png", "img/aluno/corpos/peste_sul.png",
		 		  "img/aluno/corpos/geek_leste.png", "img/aluno/corpos/nerd_leste.png", "img/aluno/corpos/peste_leste.png",
				  "img/aluno/corpos/geek_oeste.png", "img/aluno/corpos/nerd_oeste.png", "img/aluno/corpos/peste_oeste.png"];
				  
    var pensamentos = ["img/aluno/pensamentos/motivado.png", "img/aluno/pensamentos/normal.png", "img/aluno/pensamentos/tedio.png", "img/aluno/pensamentos/dormindo.png", "img/aluno/pensamentos/duvida.png", "img/aluno/pensamentos/exclamativo.png"];
    var steps = ["animated/mario_step1.png", "animated/mario_step2.png", "animated/mario_step3.png", "animated/mario_step1_I.png", "animated/mario_step2_I.png", "animated/mario_step3_I.png"];
    var playlist = ["effects/step1.wav", "effects/step2.wav"];
   
    var midias = ["img/midias/camera.png", "img/midias/projetor.png", "img/midias/quadro.png", "img/midias/tv.png","img/midias/internet.png", "img/midias/notebook.png","img/midias/smartphone.png","img/midias/caderno.png"];
	
	 var midiasPB = ["img/midias/camera_pb.png", "img/midias/projetor_pb.png", "img/midias/quadro_pb.png", "img/midias/tv_pb.png","img/midias/internet_pb.png", "img/midias/notebook_pb.png","img/midias/smartphone_pb.png","img/midias/caderno_pb.png"];
	 
    var regularIcons = ["img/mapa/buttons/cinema.png", "img/mapa/buttons/casa.png", "img/mapa/buttons/museu.png", "img/quarto/agenda.png", "img/buttons/start.png","img/mapa/buttons/escola.png","img/mapa/buttons/biblioteca.png"];
	
	var fotos = ["img/fotos/foto_circular.png","img/fotos/foto_classica.png","img/fotos/foto_dupla.png","img/fotos/foto_grupos.png","img/fotos/foto_ludoteca.png"];
	
	var salas = ["img/salas/icone_circulo.png", "img/salas/icone_individual.png", "img/salas/icone_duplas.png", "img/salas/icone_grupos.png","img/salas/icone_ludoteca.png" ];
	
	var salasPB = ["img/salas/icone_circulo_pb.png", "img/salas/icone_individual_pb.png", "img/salas/icone_duplas_pb.png", "img/salas/icone_grupos_pb.png","img/salas/icone_ludoteca_pb.png" ];

//FUNCTIONS 



//..................................<script src="js/sala.js"></script>
    var salaAula = function () {
        this.image = new Image();
        this.image.src = "img/assets/SALA.png";
    }

//..................................<script src="js/alunos.js"></script>

    function aluno() {
        var self = this;
        this.image;
        this.myThink;
        this.x;
        this.y;
        this.h;
        this.w;
		this.id;

        /////
        this.atencao;
        this.motivacao;
        this.isNerd;
        this.isGeek;
        this.isBully;
        /////
        this.init = function (x, y, w, h, id, sA, sM) {
            this.image = new Image();
            this.image.src = corpos[id];
            this.myThink = new think();
            this.myThink.init(0);
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
			this.id = id;

            ////
            this.atencao = sA;
            
			if(id%3 == 0){
				this.isGeek = true;
				this.isNerd = false;
           		this.isBully = false;
				this.motivacao = 30 + sM;
			}else if(id%3 == 1){
				this.isGeek = false;
				this.isNerd = true;
           		this.isBully = false;
				this.motivacao = 50 + sM;
			}else{
				this.isGeek = false;
				this.isNerd = false;
           		this.isBully = true;
				this.motivacao = 10 + sM;
			}
            
        }

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
			if(self.id < 3){
				ctx.drawImage(this.myThink.image, this.x + 70, this.y - 20 , 50,50);
			}else if(self.id < 6){
				ctx.drawImage(this.myThink.image, this.x + 35, this.y - 30, 50,50);
			}else if(self.id < 9){
				ctx.drawImage(this.myThink.image, this.x + 40, this.y - 20, 50,50);
			}else{
				ctx.drawImage(this.myThink.image, this.x + 80, this.y - 30, 50,50);
			}
            
        }

        this.clickFunction = function () {
            // console.log("voce clicou em um aluno");

            //toastr.info("Você clicou em um aluno!");
            //this.reThinkOneTime();
        }

        this.reThinkOneTime = function (nivel) {
            if (nivel >= 75) {
                this.myThink.reThink(0); //Motivado
            } else if (nivel >= 40) {
                this.myThink.reThink(1); //Normal
            } else if (nivel >= 20) {
                this.myThink.reThink(2); //Tédio
            } else {
                this.myThink.reThink(3); //Dormindo
            }
        }


        this.takeCare = function (boost) {
            if (self.atencao <= 100) {
                this.atencao += boost;
            }
        }
		
		 this.moralHazard = function (boost) {
            if (self.motivacao > 0) {
                this.motivacao -= boost;
            }
        }

        this.mathFunction = function () {
            if (self.atencao > 0) {
                self.atencao = self.atencao - 1.5;
            }
            self.reThinkOneTime(self.atencao + self.motivacao);
        }

    }

    var think = function () {
        this.image;

        this.init = function (id) {
            this.image = new Image();
            this.image.src = pensamentos[id];
        }

        this.reThink = function (id) {
            this.image.src = pensamentos[id];
        }
    }

//.................................. <script src="js/midias.js"></script>

    var midia = function () {
        this.image;
        this.x;
        this.y;
        this.w;
        this.h;

        this.init = function (src, x, y, w, h) {
            this.image = new Image(w, h);
            this.image.src = src;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        };

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        };

        this.clickFunction = function () {
            toastr.info("Você está usando uma midia!");
            //alert("Você está usando uma midia!");
        };

    };

//.................................. <script src="js/professora.js"></script>
    function mario(x, y, w, h, d) {
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
        this.desenhar = function () {
            ctx.drawImage(this.image, this.myX, this.myY, this.myWidth, this.myHeight);
        }

        this.nextStep = function (isLeft) {
            var setDir = (+isLeft) * (3);
            this.stepNow++;
            if ((this.stepNow % 5) == 0) {
                var o = this.stepNow % (steps.length / this.dirNumber) + setDir;
                this.image.src = steps[this.stepNow % (steps.length / this.dirNumber) + setDir];
                this.audio.play();
            }
            if (this.audioReady || (this.stepNow % 15) == 0) {
                this.realSteps++;
                this.audioReady = false;
                this.audio.src = playlist[this.stepNow % 2];
                this.audio.play();
            }
        }

        this.stopWalk = function (isLeft) {
            var setDir = (+isLeft) * (3);
            //this.audioReady = true;
            this.stepNow = 0 + setDir;
            this.image.src = steps[this.stepNow];
        }


    }

//.................................. <script src="js/HUD.js"></script>

    var actionButton = function () {
        var self = this;
        this.x;
        this.y;
        this.w;
        this.h;
        this.id;
        this.color;
        this.duration;
		this.lockTime;
        this.isOn;
        this.bonus;
        this.isGroup;
        this.clock;
		this.begin;
		this.mid;
		this.end;
		this.md;

        this.init = function (x, y, w, h, id, duration, lockTime, bonus, isGroup, b, m, e, moralDamage) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.id = id;
            this.isOn = false;
            this.color = "white";
            this.duration = duration;
			this.lockTime = lockTime;
            this.isOn = false;
            this.bonus = bonus;
            this.clock = 0;
            this.isGroup = isGroup;
			this.begin = b;
			this.mid = m;
			this.end = e;
			this.md = moralDamage;
        }

        this.desenhar = function () {
            var newX = self.x + (self.w / 2);
            var newY = self.y + (self.h / 2) + 6;

            ctxInv.beginPath();
            ctxInv.fillStyle = self.color;
            ctxInv.fillRect(self.x, self.y, self.w, self.h);


            ctxInv.fillStyle = "black";
            ctxInv.strokeRect(self.x, self.y, self.w, self.h);
            ctxInv.fillText(self.id, newX, newY);
            ctxInv.fill();
            ctxInv.closePath();
        }

        this.clickFunction = function () {
            if (self.isGroup) {
                self.isOn = true;
                self.color = "red";
                self.desenhar();
                inAction = true;
                currentAction = self;
            } else {
                if (!self.isOn) {
                    waitingTarget = true;
                    self.isOn = true;
                    self.color = "yellow";
                    self.desenhar();
                    currentAction = self;
                } else {
                    waitingTarget = false;
                    self.isOn = false;
                    self.color = "white";
                    self.desenhar();
                    currentAction = null;
                }
            }
        }


        this.restore = function () {
            self.isOn = false;
            self.color = "white";
            self.desenhar();
        }

        this.takeAction = function (time) {
            if (self.isGroup) {
                self.groupBuff(time, alunos);
            } else {
                self.groupBuff(time, self.localTarget);
            }
        }
		
		this.calcBonus = function(time){
			var newBonus = 0;
			if(time > initialTime*0.7){
				newBonus = self.bonus * self.begin;
			}else if(time > initialTime*0.3){
				newBonus = self.bonus * self.mid;
			}else{
				newBonus = self.bonus * self.end;
			}
			return newBonus;
		}


        this.groupBuff = function (time, target) {
            if (time % 30 == 0) {
                if (inAction) {
                    clock++;
                    if (clock >= (self.duration + self.lockTime)) {
						console.log("Fim!")
                        inAction = false;
                        clock = 0;
                    } else if (clock > self.duration && currentAction != null) {
                        currentAction.restore();
                    } else if (clock <= self.duration) {
                        try {
                            target.takeCare(self.calcBonus(time));
							target.moralHazard(self.md);
                        } catch (e) {
                            for (i = 0; i < target.length; i++) {								
                                target[i].takeCare(self.calcBonus(time));
								target[i].moralHazard(self.md);
                            }
                        }
                    }
                }
            }
        }


    }

	var pickSala = function () {
		var self = this;
        this.image;
        this.x;
        this.y;
        this.w;
        this.h;
        this.isOn;
		this.id;

        this.init = function (i, x, y, w, h) {
            this.image = new Image(w, h);
            this.image.src = salasPB[i];
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
			this.id = i;
            this.isOn = false;
        }

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }


        this.clickFunction = function () {
            if (!this.isOn) {
				if(salaID != null){
					salaID.clickFunction();
				}
				salaID = self;
                this.isOn = true;
				this.image.src = salas[self.id];
				this.w += 10;
				this.h += 10;
            } else {
				salaID = null;
                this.isOn = false;
				this.image.src = salasPB[self.id];
				this.w -= 10;
				this.h -= 10;
            }
        }
    }



    var pickMidia = function () {
		var self = this;
        this.image;
        this.x;
        this.y;
        this.w;
        this.h;
        this.myMidia;
        this.isOn;
		this.id;

        this.init = function (i, x, y, w, h) {
            this.image = new Image(w, h);
            this.image.src = midiasPB[i];
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
			this.id = i;
            this.myMidia = new midia();
            this.isOn = false;
        }

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }

        this.configurar = function (x, y) {
            this.myMidia.init(this.image.src, x, y, 50, 60);
            return this.myMidia;
        }

        this.clickFunction = function () {
            if (!this.isOn) {
                escolhas.push(this);
                this.isOn = true;
				this.image.src = midias[self.id];
				this.w += 10;
				this.h += 10;
            } else {
                escolhas.pop(this);
                this.isOn = false;
				this.image.src = midiasPB[self.id];
				this.w -= 10;
				this.h -= 10;
            }
        }
    }

    var roomGenerate = function () {
		var self = this;
        this.image;
        this.x;
        this.y;
        this.w;
        this.h;
        this.sala;
		this.isFirst;

        this.init = function (x, y, w, h, sala, isPickMidia) {
            this.image = new Image(w, h);
            this.image.src = "img/buttons/gerar.png";
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
            this.sala = sala;	
			this.isFirst = isPickMidia;		
        }

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }

        this.clickFunction = function () {
			if(salaID == null || metodologia == null){
				if(salaID == null && metodologia == null){
					toastr.error("Você não terminou de planejar a aula! Escolha uma sala e como a aula vai funcionar!", {timeOut: 2000})
				}else if(salaID == null){
					toastr.error("Você não terminou de planejar a aula! Escolha uma sala!", {timeOut: 2000})
				}else{
					toastr.error("Você não terminou de planejar a aula! Escolha como a aula vai funcionar!", {timeOut: 2000})
				}
			}else{
				softResetCanvas();
            	startAula();
			}
			
            
        }
    }
	
	 var photoButton = function () {
		var self = this;
        this.image;
        this.x;
        this.y;
        this.w;
        this.h;
		this.id;

        this.init = function (x, y, w, h,id) {
            this.image = new Image(w, h);
            this.image.src = fotos[id];
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
			this.id = id;
        }

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }

        this.clickFunction = function () {
			toastr.success("Você escolheu sua sala. Daqui o jogador é enviado para a sala de aula com a configuração escolhida.", {timeOut: 2000})
           // resetCanvas();
           // startQuadro();
        }
    }

	var textButton = function(){
		var self = this;
        this.text;
        this.x;
        this.y;
        this.w;
        this.h;
		this.color;
		this.loadColor;
		this.action;
		
		this.init = function (text, x, y, action) {
			this.text = text;
			this.x = x;
			this.y = y;
			this.w = ctx.measureText(text).width*1.8;
      		this.h = 20*1.5;
			this.color = "black";
			this.loadColor = "black";
			this.action = action;
		}
		
		 this.clickFunction = function () {
			if(metodologia != null){
				metodologia.loadColor = "black";
			}
			metodologia = this;
		 	self.takeAction();
			self.loadColor = "red";
		 }
		 
		 this.takeAction = function () {
			switch (self.action) {
                case 0:
                    //Take Action
                    break;
                case 1:
                    //Take Action
                    break;
                case 2:
                    //Take Action
                    break;
                case 3:
                    //Take Action
                    break;
                default:
                    break;
            }	
		 }
		 
		 this.mouseOver = function(){
			this.color = "green";
		 }
		 
		  this.mouseOff = function(){
			this.color = this.loadColor;
		 }
		 
		 
		  this.desenhar = function () {
			ctx.fillStyle = self.color;
            ctx.font = "18px Arial";
			ctx.fillText(self.text,self.x+20,self.y+20);
			ctx.fillStyle = "black";
        }
		
	}

    var teleportButton = function () {
        var self = this;
        this.image;
        this.id;
        this.x;
        this.y;
        this.w;
        this.h;

        this.init = function (x, y, imgID, id) {
            this.image = new Image(40, 40);
            this.image.src = regularIcons[imgID];
            this.id = id;
            this.x = x;
            this.y = y;
            this.w = 40;
            this.h = 40;
        }

        this.initAndSizeFree = function (x, y, w, h, imgID, id) {
            this.image = new Image(w, h);
            this.image.src = regularIcons[imgID];
            this.id = id;
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }

        this.desenhar = function () {
            ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        }

        this.clickFunction = function () {
            console.log(self.id);
            switch (self.id) {
                case 0:
                    resetCanvas();
                    startBar();
                    break;
                case 1:
                    resetCanvas();
                    startQuarto();
                    break;
                case 2:
                    break;
                case 3:
                    resetCanvas();
                    startPreAgenda();
                    break;
				case 4:
                    resetCanvas();
                    startAgenda();
                    break;
                default:
                    break;
            }
        }
    }

//.................................. <script src="js/background.js"></script>

    var capa = function () {
        this.image = new Image();
        this.image.src = "img/capa/capa.gif";
    }
		
    var sala = function () {
        this.image = new Image();
        this.image.src = "img/quarto/agenda_large.png";


        this.configurar = function () {
            this.image.src = "img/assets/SALA.png";
            var tempArray = buttons;
            buttons = [];
            for (i = 0; i < tempArray.length; i++) {
                try {
                    buttons.push(escolhas[i].configurar(salaX, salaY));
                    salaX = salaX + 60;
                } catch (exc) {
                }
            }

        }
    }

    var quarto = function () {
        this.image = new Image();
        this.image.src = "img/assets/QUARTO.png";
    }

    var mapa = function () {
        this.image = new Image();
        this.image.src = "img/mapa/mapa.jpg";
    }

    var bar = function () {
        this.image = new Image();
        this.image.src = "img/bar/barTheme.png";
    }

    var feedback = function () {
        this.image = new Image();
        this.image.src = "img/feedback/feedback.jpg";
    }
//.................................. <script src="js/core.js"></script>
    var core = function () {


        this.configurarCapa = function () {
            var myTitle = new capa();

            var startBT = new teleportButton();
            startBT.initAndSizeFree(cX * 0.45, cY * 0.5, 129, 43, 4, 1);
            clickableElements.push(startBT);

            this.render = function () {
                ctx.drawImage(myTitle.image, 0, 0, canvas.width, canvas.height);
                for (i = 0; i < clickableElements.length; i++) {
                    clickableElements[i].desenhar();
                }
            };

        }

        this.configurarFeedback = function () {
            var myFeedback = new feedback();
            var id = setInterval(function () {
                resetCanvas();
                startMapa();
                clearInterval(id);
            }, 2500);
            // Draw everything
            this.render = function () {
                ctx.drawImage(myFeedback.image, 0, 0, canvas.width, canvas.height);
            };

        }

        this.configurarBar = function () {
            var myBar = new bar();
            var id = setInterval(function () {
                alert("Oh não! A professora bebeu whiskey e martini demais e acabou desmaiando, mas felizmente uma amiga a levou devolta para casa!");
                resetCanvas();
                startQuarto();
                clearInterval(id);
            }, 2500);
            // Draw everything
            this.render = function () {
                ctx.drawImage(myBar.image, 0, 0, canvas.width, canvas.height);
            };

        }

        this.configurarQuarto = function () {
            var myQuarto = new quarto();

            var agenda = new teleportButton();
			agenda.init(430, 330, 3, 4);

            clickableElements.push(agenda);


            // Draw everything
            this.render = function () {
                ctx.drawImage(myQuarto.image, 0, 0, canvas.width, canvas.height);
                for (i = 0; i < clickableElements.length; i++) {
                    clickableElements[i].desenhar();
                }
            };

        }

		
		

        this.configurarMapa = function () {
            var myMapa = new mapa();
            var cinemaBT = new teleportButton();
            cinemaBT.initAndSizeFree(980, 150,80,80, 0, 2);
			
            var casaBT = new teleportButton();
            casaBT.initAndSizeFree(100, 400, 80, 80, 1, 1);
			
            var museuBT = new teleportButton();
            museuBT.initAndSizeFree(820, 60, 80, 80, 2, 2);
			
			var escolaBT = new teleportButton();
            escolaBT.initAndSizeFree(430, 150, 80, 80, 5, 2);
			
			var bibliotecaBT = new teleportButton();
            bibliotecaBT.initAndSizeFree(400, 550, 80, 80, 6, 2);


            clickableElements.push(cinemaBT);
            clickableElements.push(casaBT);
            clickableElements.push(museuBT);
			clickableElements.push(escolaBT);
			clickableElements.push(bibliotecaBT);





            // Draw everything
            this.render = function () {
                ctx.drawImage(myMapa.image, 0, 0, canvas.width, canvas.height);
                for (i = 0; i < clickableElements.length; i++) {
                    clickableElements[i].desenhar();
                }
            };

        }



		

        this.configurarAula = function () {
            var buff = 0;
            var time = initialTime;
            var mySala = new salaAula();
			
			
			for(a = 0; a < 12; a++){
				var newAluno = new aluno();
				alunos.push(newAluno);
			}






			var moralBonus = 0;
				switch (metodologia) {
					case 0:
						for(i = 0; i < escolhas.length; i++){
							if(escolhas[i].id == 0){
								//camera
								moralBonus -= 5;
							}else if(escolhas[i].id == 1){
								//projetor
								moralBonus += 5;
							}else if(escolhas[i].id == 2){
								//quadro
								moralBonus += 5;
							}else if(escolhas[i].id == 3){
								//tv
								moralBonus += 5;
							}else if(escolhas[i].id == 4){
								//internet
								moralBonus -= 5;
							}else if(escolhas[i].id == 5){
								//notebook
								moralBonus -= 5;
							}else if(escolhas[i].id == 6){
								//smartphone
								moralBonus -= 5;
							}else{
								//caderno
								moralBonus += 5;
							}
						}
						
						if(salaID == 0){
							//circulo
							moralBonus -= 20;
						}else if(salaID == 1){
							//classica
							moralBonus += 20;
						}else if(salaID == 2){
							//dupla
							moralBonus += 20;
						}else if(salaID == 3){
							//trio
							moralBonus -= 20;
						}else{
							//grupo
							moralBonus -= 20;
						}
						break;
					case 1:
						for(i = 0; i < escolhas.length; i++){
							if(escolhas[i].id == 0){
								//camera
								moralBonus -= 5;
							}else if(escolhas[i].id == 1){
								//projetor
								moralBonus += 5;
							}else if(escolhas[i].id == 2){
								//quadro
								moralBonus -= 5;
							}else if(escolhas[i].id == 3){
								//tv
								moralBonus += 5;
							}else if(escolhas[i].id == 4){
								//internet
								moralBonus += 5;
							}else if(escolhas[i].id == 5){
								//notebook
								moralBonus += 5;
							}else if(escolhas[i].id == 6){
								//smartphone
								moralBonus -= 5;
							}else{
								//caderno
								moralBonus += 5;
							}
						}
						
						if(salaID == 0){
							//circulo
							moralBonus -= 20;
						}else if(salaID == 1){
							//classica
							moralBonus += 20;
						}else if(salaID == 2){
							//dupla
							moralBonus += 20;
						}else if(salaID == 3){
							//trio
							moralBonus += 20;
						}else{
							//grupo
							moralBonus -= 20;
						}
						break;
					case 2:
						for(i = 0; i < escolhas.length; i++){
							if(escolhas[i].id == 0){
								//camera
								moralBonus -= 5;
							}else if(escolhas[i].id == 1){
								//projetor
								moralBonus += 5;
							}else if(escolhas[i].id == 2){
								//quadro
								moralBonus += 5;
							}else if(escolhas[i].id == 3){
								//tv
								moralBonus += 5;
							}else if(escolhas[i].id == 4){
								//internet
								moralBonus += 5;
							}else if(escolhas[i].id == 5){
								//notebook
								moralBonus += 5;
							}else if(escolhas[i].id == 6){
								//smartphone
								moralBonus -= 5;
							}else{
								//caderno
								moralBonus -= 5;
							}
						}
						
						if(salaID == 0){
							//circulo
							moralBonus += 20;
						}else if(salaID == 1){
							//classica
							moralBonus -= 20;
						}else if(salaID == 2){
							//dupla
							moralBonus -= 20;
						}else if(salaID == 3){
							//trio
							moralBonus -= 20;
						}else{
							//grupo
							moralBonus += 20;
						}
						break;
					case 3:
						for(i = 0; i < escolhas.length; i++){
							if(escolhas[i].id == 0){
								//camera
								moralBonus += 5;
							}else if(escolhas[i].id == 1){
								//projetor
								moralBonus += 5;
							}else if(escolhas[i].id == 2){
								//quadro
								moralBonus -= 5;
							}else if(escolhas[i].id == 3){
								//tv
								moralBonus += 5;
							}else if(escolhas[i].id == 4){
								//internet
								moralBonus += 5;
							}else if(escolhas[i].id == 5){
								//notebook
								moralBonus += 5;
							}else if(escolhas[i].id == 6){
								//smartphone
								moralBonus += 5;
							}else{
								//caderno
								moralBonus -= 5;
							}
						}
						
						if(salaID == 0){
							//circulo
							moralBonus += 20;
						}else if(salaID == 1){
							//classica
							moralBonus -= 20;
						}else if(salaID == 2){
							//dupla
							moralBonus -= 20;
						}else if(salaID == 3){
							//trio
							moralBonus += 20;
						}else{
							//grupo
							moralBonus += 20;
						}
						break;
					default:
						break;
				}



			switch (salaID.id) {
                case 0: // Circulos
					alunos[0].init(570, 240, 90, 90, 4, Math.floor((Math.random() * 50)), moralBonus);
					alunos[1].init(520, 270, 90, 90, 5, Math.floor((Math.random() * 50)), moralBonus);
					alunos[2].init(470, 300, 90, 90, 3, Math.floor((Math.random() * 50)), moralBonus);
					
					alunos[3].init(470, 360, 90, 90, 6, Math.floor((Math.random() * 50)), moralBonus);
					alunos[4].init(515, 385, 90, 90, 7, Math.floor((Math.random() * 50)), moralBonus);
					alunos[5].init(560, 410, 90, 90, 8, Math.floor((Math.random() * 50)), moralBonus);
					
					alunos[6].init(650, 250, 90, 90, 10, Math.floor((Math.random() * 50)), moralBonus);
					alunos[7].init(695, 275, 90, 90, 9, Math.floor((Math.random() * 50)), moralBonus);
					alunos[8].init(740, 300, 90, 90, 11, Math.floor((Math.random() * 50)), moralBonus);
					
					alunos[9].init(750, 350, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[10].init(700, 380, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					alunos[11].init(650, 410, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					//ctx.rotate(-31*Math.PI/180);
                    break; 
                case 1: // Clássica
					alunos[0].init(620, 210, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[1].init(570, 240, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[2].init(520, 270, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					alunos[3].init(470, 300, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					
					alunos[4].init(720, 260, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[5].init(670, 290, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					alunos[6].init(620, 320, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[7].init(570, 350, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
						
					alunos[8].init(800, 320, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[9].init(750, 350, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[10].init(700, 380, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[11].init(650, 410, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
                    break;
                case 2: // Fila Dupla
					
					alunos[0].init(605, 225, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[1].init(570, 240, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[2].init(500, 285, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					alunos[3].init(470, 300, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					
					alunos[4].init(705, 275, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[5].init(670, 290, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
					alunos[6].init(600, 335, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[7].init(570, 350, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
						
					alunos[8].init(785, 335, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[9].init(750, 350, 90, 90, 0, Math.floor((Math.random() * 50)), moralBonus);
					alunos[10].init(685, 395, 90, 90, 2, Math.floor((Math.random() * 50)), moralBonus);
					alunos[11].init(650, 410, 90, 90, 1, Math.floor((Math.random() * 50)), moralBonus);
                    break;
                case 3: // Tri Grupo
					alunos[1].init(605, 265, 90, 90, 10, Math.floor((Math.random() * 50)), moralBonus);
					alunos[0].init(570, 255, 90, 90, 9, Math.floor((Math.random() * 50)), moralBonus);
					alunos[2].init(520, 285, 90, 90, 8, Math.floor((Math.random() * 50)), moralBonus);
					alunos[3].init(550, 295, 90, 90, 7, Math.floor((Math.random() * 50)), moralBonus);
					
					alunos[6].init(520, 385, 90, 90, 6, Math.floor((Math.random() * 50)), moralBonus);
					alunos[7].init(550, 395, 90, 90, 7, Math.floor((Math.random() * 50)), moralBonus);
					alunos[5].init(600, 365, 90, 90, 11, Math.floor((Math.random() * 50)), moralBonus);
					alunos[4].init(570, 350, 90, 90, 10, Math.floor((Math.random() * 50)), moralBonus);
						
					alunos[10].init(705, 275, 90, 90, 8, Math.floor((Math.random() * 50)), moralBonus);
					alunos[11].init(735, 285, 90, 90, 6, Math.floor((Math.random() * 50)), moralBonus);
					alunos[9].init(785, 255, 90, 90, 9, Math.floor((Math.random() * 50)), moralBonus);
					alunos[8].init(745, 240, 90, 90, 11, Math.floor((Math.random() * 50)), moralBonus);
                    break;
				case 4: // Grupo
					alunos[6].init(520, 270, 90, 90, 6, Math.floor((Math.random() * 50)), moralBonus);
					alunos[7].init(550, 285, 90, 90, 7, Math.floor((Math.random() * 50)), moralBonus);
					alunos[8].init(580, 300, 90, 90, 8, Math.floor((Math.random() * 50)), moralBonus);
					alunos[9].init(610, 315, 90, 90, 8, Math.floor((Math.random() * 50)), moralBonus);
					alunos[10].init(640, 330, 90, 90, 6, Math.floor((Math.random() * 50)), moralBonus);
					alunos[11].init(670, 345, 90, 90, 7, Math.floor((Math.random() * 50)), moralBonus);

					alunos[0].init(570, 240, 90, 90, 10, Math.floor((Math.random() * 50)), moralBonus);
					alunos[1].init(600, 255, 90, 90, 9, Math.floor((Math.random() * 50)), moralBonus);	
					alunos[2].init(630, 270, 90, 90, 11, Math.floor((Math.random() * 50)), moralBonus);
					alunos[3].init(660, 285, 90, 90, 9, Math.floor((Math.random() * 50)), moralBonus);
					alunos[4].init(690, 300, 90, 90, 10, Math.floor((Math.random() * 50)), moralBonus);
					alunos[5].init(720, 315, 90, 90, 11, Math.floor((Math.random() * 50)), moralBonus);
                    break;
                default:
                    break;
            }
			

			var bt = new actionButton();
			//////// x,  y,   w,  h,  id, dur, lock, bonus, isGroup, begin, mid, end, moral Damage
            bt.init(20, 30, 150, 40, "Pedir Silêncio", 2, 4, 5, true,1,1,1,1);
            bt.desenhar();
            acoes.push(bt);
			
			bt = new actionButton();
			bt.init(220, 30, 160, 40, "Explicar Conceito", 4, 3, 24, false,0.7,1,1,0);
            bt.desenhar();
            acoes.push(bt);
			
			bt = new actionButton();
			bt.init(420, 30, 220, 40, "Chamar Atenção Aluno", 5, 2, 12, false,0.7,1,1,0);
            bt.desenhar();
            acoes.push(bt);
			
			bt = new actionButton();
			bt.init(420, 30, 220, 40, "Chamar Atenção Grupo", 5, 2, 6, true,0.7,1,1,0);
            bt.desenhar();
            acoes.push(bt);
			
			bt = new actionButton();
			bt.init(680, 30, 260, 40, "Fazer Perguntas a um Aluno", 2, 4, 15, false,1,0.7,0.3,0);
            bt.desenhar();
            acoes.push(bt);
			
			bt = new actionButton();
			bt.init(980, 30, 150, 40, "Andar pela Sala", 2, 6, 9, true,1,1,1,0);
            bt.desenhar();
            acoes.push(bt);



            this.checkTime = function () {
                if (time > 0) {
                    //ctx.font = "20px Arial";
                    //ctx.fillText("Time: " + time,5,20);
                    $("#menu .time").text("Time: " + time);
                    time--;
                } else if (time < 0) {
                    //ctx.font = "20px Arial";
                    //ctx.fillText("Time: Teste time",5,20);
                } else {
                    console.log("Fim da Aula");
					var feedback = 0;
					for(i = 0; i < alunos.length; i++){
						feedback += alunos[i].motivacao + alunos[i].atencao;
					}
					feedback = feedback / alunos.length;
					if(feedback > 80){
						toastr.info("Parabéns. Você foi muito bem na sua aula! Você merece uma volta pela praça para descansar!!");
					}else if(feedback > 50){
						toastr.info("Sua aula foi boa, contudo você ainda pode melhorar! Na sua volta pela praça, de passada na biblioteca para estudar!");
					}else{
						toastr.info("Que pena, sua aula não foi muito boa, vá para a biblioteca para estudar mais!");
					}
                    resetCanvas();
                    startMapa();
                }
            }



            // Draw everything
            this.render = function () {
                ctx.drawImage(mySala.image, 0, 0, canvas.width, canvas.height);
                this.checkTime();

                try {
                    currentAction.takeAction(time);
                } catch (e) {
                }
				
				for (i = 0; i < escolhas.length; i++) {
					ctx.drawImage(escolhas[i].image, 10, 20 + 30*i, 25, 25);
                }
				
                for (i = 0; i < alunos.length; i++) {
                    alunos[i].desenhar();
                    if (time % 30 == 0) {
                        alunos[i].mathFunction();
                    }
                }
            }
			
	
		
			
        };
		
		
		this.configurarPreAgenda = function () {
			this.image = new Image();
       		this.image.src = "img/professora_pensando.png";
			
			var newBT = new textButton();
			var newBT2 = new textButton();
			var newBT3 = new textButton();
			var newBT4 = new textButton();
			newBT.init("1) Dar aula expositiva explicando os conceitos dos jogos eletrônicos.",590,200 );
			newBT2.init("2) Apresentar um vídeo que apresenta as características dos jogos. ",590,230 );
			newBT3.init("3) Organizar grupos que discutem e apresentam sobre os dos jogos.",590,260 );
			newBT4.init("4) Organizar grupos para produzirem um vídeo educativo. ",590,290 );
			clickableElements.push(newBT);
			clickableElements.push(newBT2);
			clickableElements.push(newBT3);
			clickableElements.push(newBT4);
			

			
            // Draw everything
            this.render = function () {
                ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
				ctx.font = "30px Arial";
				ctx.fillText("Hummmm, eu preciso pensar ",715,120);
				ctx.fillText("como eu vou dar esta aula. Eu poderia...",645,170);
				
				
                for (i = 0; i < clickableElements.length; i++) {
                    clickableElements[i].desenhar();
                }
            };


        }

		this.configurarQuadro = function () {
			var startX = 100;
			var startY = 300;
            this.image = new Image();
       		this.image.src = "img/fotos/quadro.jpg";
			
			for(a = 0; a < fotos.length; a++){
				var randomY = Math.floor((Math.random() * 10)*10);
				if( Math.floor((Math.random() * 10)) < 5){
					randomY = randomY*(-1);
				}
				var newPhoto = new photoButton();
				newPhoto.init(startX + 220*a, startY + randomY,200,200,a);
				clickableElements.push(newPhoto);
			}
			
            this.render = function () {
                ctx.drawImage(this.image, 0, 0, canvas.width, canvas.height);
                for (i = 0; i < clickableElements.length; i++) {
                    clickableElements[i].desenhar();
                }
            };


        }
		
		
        this.configurarAgenda = function () {
            var startX = 150;
            var startY = 250;
            var salaX = 900;
            var salaY = -80;
			var txtY = 150;

            var mySala = new sala();
            var btGen = new roomGenerate();

            btGen.init(1210, 0, 100, 30, mySala);
            clickableElements.push(btGen);
			
			
			var newBT = new textButton();
			var newBT2 = new textButton();
			var newBT3 = new textButton();
			var newBT4 = new textButton();
			newBT.init("1) Dar aula expositiva explicando os conceitos dos jogos eletrônicos.",35,txtY );
			newBT2.init("2) Apresentar um vídeo que apresenta as características dos jogos. ",35,txtY+30 );
			newBT3.init("3) Organizar grupos que discutem e apresentam sobre os jogos.",35,txtY+60 );
			newBT4.init("4) Organizar grupos para produzir e apresentar um vídeo educativo. ",35,txtY+90 );
			clickableElements.push(newBT);
			clickableElements.push(newBT2);
			clickableElements.push(newBT3);
			clickableElements.push(newBT4);
			
			
			
            for (i = 0; i < midias.length; i++) {
                var newButton = new pickMidia();
                if((i%3) == 0){
					startY += 120;
				}
				newButton.init(i, startX + (140 * (i%3)) , startY, 100, 100);
                clickableElements.push(newButton);
            }

				
			for (i = 0; i < salas.length; i++) {
                var newButton = new pickSala();
                if((i%2) == 0){
					salaY += 180;
				}
				newButton.init(i, salaX + (200 * (i%2)) , salaY, 200, 200);
                clickableElements.push(newButton);
            }


            // Draw everything
            this.render = function () {
                ctx.drawImage(mySala.image, 0, 0, canvas.width, canvas.height);
				ctx.font="18px Arial";
				ctx.fillText("Missão: Ampliar o Conhecimento dos alunos sobre jogos eletrônicos",40,50);
				ctx.rect(40, txtY - 20, 580, 160);
				ctx.stroke();
                for (i = 0; i < clickableElements.length; i++) {
                    clickableElements[i].desenhar();
                }
            };


        }



    }
//.................................. <script src="js/roomSim.js"></script>


    function startAula() {
        canvasInv.style.display = "block";
        ctxInv.beginPath();
        ctxInv.font = "20px Arial";
        ctxInv.textAlign = 'center';
        ctxInv.fillText("Ações", canvasInv.width / 2, 20);
        ctxInv.rect(0, 0, canvasInv.width, canvasInv.height);
        ctxInv.stroke();
        ctxInv.closePath();
        mycore.configurarAula();

    }

    function startMapa() {
        mycore.configurarMapa();

    }
	
	function startQuadro() {
        mycore.configurarQuadro();

    }
	
	function startPreAgenda() {
        mycore.configurarPreAgenda();
    }
	
    function startAgenda() {
        mycore.configurarAgenda();
    }

    function startQuarto() {
        clickableElements = new Array();
        escolhas = new Array();
        mycore.configurarQuarto();
    }

    function startBar() {
        mycore.configurarBar();
    }

    function startFeedback() {
        mycore.configurarFeedback();
    }

    function startCapa() {
        mycore.configurarCapa();
    }

    function resetCanvas() {
        clickableElements = [];
        alunos = [];
        inAction = false;
        currentAction = null;
        canvasInv.style.display = "none";
		document.body.style.cursor =  "default";
		salaID = null;
		metodologia = null;
		onElement = null;
		mouseOnElement = null;
		escolhas = [];
        acoes = [];
    }
	
	function softResetCanvas() {
        clickableElements = [];
        alunos = [];
        inAction = false;
        currentAction = null;
        canvasInv.style.display = "none";
		document.body.style.cursor =  "default";
		onElement = null;
		mouseOnElement = null;
        acoes = [];
    }

    function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
   
    function preload() {
        $(regularIcons).each(function () {
            $('<img/>')[0].src = this;
        });

        $(midias).each(function () {
            $('<img/>')[0].src = this;
        });
		
		$(midiasPB).each(function () {
            $('<img/>')[0].src = this;
        });
		
		$(salas).each(function () {
            $('<img/>')[0].src = this;
        });
		
		$(salasPB).each(function () {
            $('<img/>')[0].src = this;
        });
		
		
        $(pensamentos).each(function () {
            $('<img/>')[0].src = this;
        });

        $(corpos).each(function () {
            $('<img/>')[0].src = this;
        });
		
		$(fotos).each(function () {
            $('<img/>')[0].src = this;
        });
		

        $('<img/>')[0].src = "img/capa/capa.gif";
        $('<img/>')[0].src = "img/quarto/agenda_large.png";
        $('<img/>')[0].src = "img/assets/SALA.png";
        $('<img/>')[0].src = "img/assets/QUARTO.png";
        $('<img/>')[0].src = "img/mapa/mapa.jpg";
        $('<img/>')[0].src = "img/bar/barTheme.png";
        $('<img/>')[0].src = "img/feedback/feedback.jpg";
		$('<img/>')[0].src = "img/fotos/quadro.jpg";
    }
   
   
   
 ///////////////////////////////////////////
    var mycore = new core();
    startCapa(); 
	//startPreAgenda();
	//startAgenda();
 ///////////////////////////////////////////


//EVENTOS
    canvasInv.addEventListener('click', function (event) {
        var x = event.pageX - elemLeftInv;
        var y = event.pageY - elemTopInv - cY - 11;
        // Collision detection between clicked offset and element.
        acoes.forEach(function (element) {
            if (y > element.y && y < element.y + element.h
                    && x > element.x && x < element.x + element.w) {
                if (!inAction) {
                    element.clickFunction();
                }
            }
        });

    }, false);

    canvas.addEventListener('click', function (event) {
        var x = event.pageX - elemLeft;
        var y = event.pageY - elemTop;

        // Collision detection between clicked offset and element.
        clickableElements.forEach(function (element) {
            if (y > element.y && y < element.y + element.h
                    && x > element.x && x < element.x + element.w) {
                element.clickFunction();
            }
        });

        if (waitingTarget) {
            alunos.forEach(function (element) {
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
	
	canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
		clickableElements.forEach(function (element) {
            if (mousePos.y > element.y && mousePos.y < element.y + element.h
                    && mousePos.x > element.x && mousePos.x < element.x + element.w) {
				mouseOnElement = element;
				document.body.style.cursor =  "pointer";
                try{
					if(onElement != null){
						onElement.mouseOff();
					}
					element.mouseOver();
					onElement = element;
				}catch(e){}
            }else{
				if(element == mouseOnElement){
					mouseOnElement = null;
					document.body.style.cursor =  "default";
				}
				 try{
					element.mouseOff();
				}catch(e){}
			}	
        });
		
	}, false);

//LOADER  
    preload();

    var main = function () {
        var now = Date.now();
        var delta = now - then;
        mycore.render();
        then = now;
        requestAnimationFrame(main);

    };
    var then = Date.now();
    main();


});