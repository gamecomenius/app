var core = function(){
	
	
	this.configurarCapa = function(){
		var myTitle = new capa();
		
		var startBT = new teleportButton();
		startBT.initAndSizeFree(cX*0.45,cY*0.5,129,43,4,1);
		clickableElements.push(startBT);
		
		this.render = function () {
			ctx.drawImage(myTitle.image, 0, 0, canvas.width,canvas.height);
			for(i = 0; i < clickableElements.length;i++){
				clickableElements[i].desenhar();
			}
		};

	}
	
	this.configurarFeedback = function(){
		var myFeedback = new feedback();
		var id = setInterval(function(){
			resetCanvas();
			startMapa();
			clearInterval(id);
		},2500);
		// Draw everything
		this.render = function () {
			ctx.drawImage(myFeedback.image, 0, 0, canvas.width,canvas.height);
		};

	}
	
	this.configurarBar = function(){
		var myBar = new bar();
		var id = setInterval(function(){
			alert("Oh não! A professora bebeu whiskey e martini demais e acabou desmaiando, mas felizmente uma amiga a levou devolta para casa!");
			resetCanvas();
			startQuarto();
			clearInterval(id);
		},2500);
		// Draw everything
		this.render = function () {
			ctx.drawImage(myBar.image, 0, 0, canvas.width,canvas.height);
		};

	}
	
	this.configurarQuarto = function(){
		var myQuarto = new quarto();
		
		var agenda = new teleportButton();
		agenda.init(330,210,3,3);
		
		
		clickableElements.push(agenda);

		
		// Draw everything
		this.render = function () {
			ctx.drawImage(myQuarto.image, 0, 0, canvas.width,canvas.height);
			for(i = 0; i < clickableElements.length;i++){
				clickableElements[i].desenhar();
			}
		};

	}
	
	
	this.configurarMapa = function(){
		var myMapa = new mapa();
		var barBT = new teleportButton();
		barBT.init(120,20,0,0);
		var casaBT = new teleportButton();
		casaBT.init(100,250,1,1);
		var museuBT = new teleportButton();
		museuBT.init(310,390,2,2);
		
		
		clickableElements.push(barBT);
		clickableElements.push(casaBT);
		clickableElements.push(museuBT);
		

		
		
		
		// Draw everything
		this.render = function () {
			ctx.drawImage(myMapa.image, 0, 0, canvas.width,canvas.height);
			for(i = 0; i < clickableElements.length;i++){
				clickableElements[i].desenhar();
			}
		};

	}
	
	
	this.configurarAula = function(){
		var buff = 0;
		var time = 5000;
		var mySala = new salaAula();
		var aluno1 = new aluno();
		aluno1.init(500,310,60,60,0,47);
		var aluno2 = new aluno();
		aluno2.init(560,270,60,60,1,100);
		var aluno3 = new aluno();
		aluno3.init(630,240,60,60,2,5);
		alunos.push(aluno2);
		alunos.push(aluno1);
		
		alunos.push(aluno3);
		
			var bt = new actionButton();
			bt.init (20,30,150,40, "Grupo", 5, 10,true);
			bt.desenhar();
			acoes.push(bt);
			
			var bt = new actionButton();
			bt.init (200,30,150,40, "Individual", 2, 10,false);
			bt.desenhar();
			acoes.push(bt);
		
		
	
		this.checkTime = function(){
			if(time > 0){
				//ctx.font = "20px Arial";
				//ctx.fillText("Time: " + time,5,20);
                                $("#menu .time").text("Time: " + time);
				time--;
			}else if(time < 0) {
				//ctx.font = "20px Arial";
				//ctx.fillText("Time: Teste time",5,20);
			}else{
				console.log("Fim da Aula");
				resetCanvas();
				startMapa();
			}
		}
		
		
		
		// Draw everything
		this.render = function () {
			ctx.drawImage(mySala.image, 0, 0, canvas.width,canvas.height);
			this.checkTime();
			
			try{currentAction.takeAction(time);}catch(e){}
			
			for(i = 0; i < alunos.length;i++){
				alunos[i].desenhar();
				if(time%30 == 0){
					alunos[i].mathFunction();
				}
			}
		}
	};
	
	this.configurarAgenda = function(){
		var startX = 180;
		var startY = 0;
		var salaX = 400;
		var salaY = 300;
		
		var mySala = new sala();
		var btGen = new roomGenerate();

		btGen.init(900,0,100,30,mySala);
		clickableElements.push(btGen);
		
		for(i = 0; i < midias.length;i++){
			var newButton = new pickMidia();
			startY = startY + 110 - (110*(i%2));
			newButton.init(i,startX + 140*(i%2),startY,100,100);
			clickableElements.push(newButton);
		}
		
		
		// Draw everything
		this.render = function () {
			ctx.drawImage(mySala.image, 0, 0, canvas.width,canvas.height);
			for(i = 0; i < clickableElements.length;i++){
				clickableElements[i].desenhar();
			}
		};
		

	}
	

	
}