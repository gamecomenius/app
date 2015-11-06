var midias = ["img/midias/camera.png", "img/midias/projetor.png", "img/midias/slide.png", "img/midias/quadro.png", "img/midias/tv.png"];
var regularIcons = ["img/mapa/buttons/bar.png", "img/mapa/buttons/casa.png", "img/mapa/buttons/museu.png", "img/quarto/agenda.png", "img/buttons/start.png"];

//Buttons

var actionButton = function () {
    var self = this;
    this.x;
    this.y;
    this.w;
    this.h;
    this.id;
    this.color;
    this.duration;
    this.isOn;
    this.bonus;
    this.isGroup;
    this.clock;

    this.init = function (x, y, w, h, id, duration, bonus, isGroup) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.id = id;
        this.isOn = false;
        this.color = "white";
        this.duration = duration;
        this.isOn = false;
        this.bonus = bonus;
        this.clock = 0;
        this.isGroup = isGroup;
        this.localTarget;
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


    this.groupBuff = function (time, target) {
        if (time % 30 == 0) {
            if (inAction) {
                console.log("!!!");
                clock++;
                if (clock >= (self.duration * 5)) {
                    inAction = false;
                    clock = 0;
                } else if (clock > self.duration && currentAction != null) {
                    currentAction.restore();
                } else if (clock <= self.duration) {
                    try {
                        console.log(target.atencao);
                        target.takeCare(self.bonus);
                    } catch (e) {
                        for (i = 0; i < target.length; i++) {
                            console.log("--- " + i);
                            console.log(target);
                            target[i].takeCare(self.bonus);
                            console.log("OK");
                        }
                    }
                }
            }
        }
    }


}


var pickMidia = function () {
    this.image;
    this.x;
    this.y;
    this.w;
    this.h;
    this.myMidia;
    this.isOn;

    this.init = function (i, x, y, w, h) {
        this.image = new Image(w, h);
        this.image.src = midias[i];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
            console.log("Você colocou esta midia na sua lista");
        } else {
            escolhas.pop(this);
            this.isOn = false;
            console.log("Você retirou esta midia da sua lista");
        }
    }
}


var roomGenerate = function () {
    this.image;
    this.x;
    this.y;
    this.w;
    this.h;
    this.sala;

    this.init = function (x, y, w, h, sala) {
        this.image = new Image(w, h);
        this.image.src = "img/buttons/gerar.png";
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.sala = sala;
    }

    this.desenhar = function () {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    this.clickFunction = function () {
        resetCanvas();
        startAula();
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
                startAgenda();
                break;
            default:
                break;
        }
    }
}


