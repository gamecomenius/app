

(function ($) {
    "use strict";
    var allQuestions = [
        {question: "<img src='img/q1.jpg'/><h2>Esta imagem pertence a qual filme?</h2>", choices: ["A ilha das Flores", "A corrente do Bem", "A onda", "Nenhuma"], answer: 0},
        {question: "<img src='img/q2.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["Entre os muro da escola", "Ao mestre com carinho", "O sorriso de monalisa", "Nenhuma"], answer: 0},
        {question: "<img src='img/q3.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["Ao Mestre com Carinho", "A onda", "A ilha das flores", "Nenhuma"], answer: 0},
        {question: "<img src='img/q4.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["A sociedade dos poetas mortos", "Patch Admans - o amor é contagioso", "Diário de Motocicleta", "Nenhuma"], answer: 0},
        {question: "<img src='img/q5.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["O sorriso de monalisa", "A corrente do Bem", "Entre os muros da escola", "Nenhuma"], answer: 0},
        {question: "<img src='img/q6.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["A onda", "Ao mestre com carinho", "Sociedade dos Poetas Mortos", "Nenhuma"], answer: 0},
        {question: "<img src='img/q7.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["A corrente do bem", "Patch Admans - o amor é contagioso", "A ilha das flores", "Nenhuma"], answer: 0},
        {question: "<img src='img/q8.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["Central do Brasil", "A ilha das flores", "Diário de Motocicleta", "Nenhuma"], answer: 0},
        {question: "<img src='img/q9.jpg'/><h2>Esta imagem pertence a qual filme?<h2>", choices: ["Diário de Motocicleta", "A corrente do Bem", "O sorriso de monalisa", "Nenhuma"], answer: 0},
        {question: "<img src='img/q10.jpg'/><h2>O que o professor tenta mostrar aos seua alunos no filme'A Onda'?<h2>", choices: ["Através de um experimento como é possível manipular um grande grupo de pessoas", "que trabalhar com a educação é uma tarefa árdua", "Como a física pode ajudar na hora de surfar ", "Nenhuma"], answer: 0},
        {question: "<img src='img/q11.jpg'/><h2>O livro 'Dom Casmurro' conta a trama amorosa de quais personagens?<h2>", choices: ["Bentinho e Capitú", "Gabriela e Nacib", "Brás Cubas e esposa", "Nenhuma"], answer: 0},
        {question: "<img src='img/q12.jpg'/><h2>Machado de Assís é o escritor de qual livro?<h2>", choices: ["Dom Casmurro", "Vidas Secas", "Comédias para se ler na escola", "Nenhuma"], answer: 0},
        {question: "<img src='img/q13.jpg'/><h2>Manuel Antônio de Almeida é o escritor de qual livro?<h2>", choices: ["Memórias de um Sargento de Milícias", "Gabriela Cravo e Canela", "Dom Casmurro", "Nenhuma"], answer: 0},
        {question: "<img src='img/q14.jpg'/><h2>Graciliano Ramos é o escritor de qual livro?<h2>", choices: ["Vidas Secas", "Capitães de Areia", "Memórias de um Sargento de Milícias", "Nenhuma"], answer: 0},
        {question: "<img src='img/q15.jpg'/><h2>Jorge Amado é o escritor de qual livro?<h2>", choices: ["Capitães de Areia", "Comédias para se ler na escola", "O presidente Negro", "Nenhuma"], answer: 0},
        {question: "<img src='img/q16.jpg'/><h2>Luiz Fernando Veríssimo é o escritor de qual livro?<h2>", choices: ["Comédias para se ler na escola", "Dom Casmurro", "Capitães de Areia", "Nenhuma"], answer: 0},
        {question: "<img src='img/q14.jpg'/><h2>Graciliano Ramos foi um escritor pertencente a qual movimento?<h2>", choices: ["Do Modernismo (geração de 30)", "Do Realismo", "Do Romantismo ", "Nenhuma"], answer: 0},
        {question: "<img src='img/q15.jpg'/><h2>Jorge Amado era um  escritor pertencente a qual movimento?<h2>", choices: ["Do Modernismo (geração de 30)", "Do Modernismo", "Do Realismo", "Nenhuma"], answer: 0},
        {question: "<img src='img/q13.jpg'/><h2>Manuel Antônio  de Almeida era um escritor de qual movimento?<h2>", choices: ["Do romantismo (segunda geração)", "Do Realismo", "Do Modernismo", "Nenhuma"], answer: 0},
        {question: "<img src='img/q17.jpg'/><h2>Iracema é um livro escrito por qual autor?<h2>", choices: ["José de Alencar", "Luiz Fernando Veríssimo", "Jorge Amado", "Nenhuma"], answer: 0},
        {question: "<img src='img/q18.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["As pirâmides do Egito", "Coliseu", "Machu Picchu", "Nenhuma"], answer: 0},
        {question: "<img src='img/q19.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Muralha da China", "Machu Picchu", "Petra", "Nenhuma"], answer: 0},
        {question: "<img src='img/q20.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Petra", "Cristo Redentor", "Pirâmide de Kukulkán", "Nenhuma"], answer: 0},
        {question: "<img src='img/q21.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Pirâmide de Kukulkán", "Pirâmide do Egito", "Machu Picchu", "Nenhuma"], answer: 0},
        {question: "<img src='img/q22.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Coliseu", "Machu Picchu", "Pirâmide de Kukulkán", "Nenhuma"], answer: 0},
        {question: "<img src='img/q23.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Machu Picchu", "Pirâmide do Egito", "Pirâmide de Kukulkán", "Nenhuma"], answer: 0},
        {question: "<img src='img/q24.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Taj Mahal", "Petra", "As grandes muralhas da China", "Nenhuma"], answer: 0},
        {question: "<img src='img/q25.jpg'/><h2>Esta imagem é referente a qual monumento?<h2>", choices: ["Cristo Redentor", "Coliseu", "Maracanã", "Nenhuma"], answer: 0},
        {question: "<img src='img/q26.jpg'/><h2>As sete maravilhas do mundo são:<h2>", choices: ["Coliseu, Cristo Redentor, Taj Mahal, Pirâmides de Kukulkán, Machu Picchu, Petra e As muralhas da China", "Coliseu, Maracanã, Taj Mahal, Torre Eiffel, Muralhas da China, Machu Picchu e As pirâmides de Egito", "Coliseu, Cristo Redentor, Torre Eiffel, Pirâmides do Egito, Muralhas da China, Petra e Pirâmides de Kukulkán", "Nenhuma"], answer: 0},
        {question: "<img src='img/q25.jpg'/><h2>A estátua do Crito Redentor fica localizada:<h2>", choices: ["No Morro do Corcovado", "No Morro do Alemão", "No Morro da Cruz", "Nenhuma"], answer: 0},
        {question: "<img src='img/q27.jpg'/><h2>Edvard Munch pintou qual quadro?<h2>", choices: ["O Grito", "Mona Lisa", "A Persistência da Memória", "Nenhuma"], answer: 0},
        {question: "<img src='img/q28.jpg'/><h2>Salvador Dali pintou qual quadro?<h2>", choices: ["A Persistência da Memória", "Noite Estrelada", "O Grito", "Nenhuma"], answer: 0},
        {question: "<img src='img/q29.jpg'/><h2>Tarsila do Amaral pintou qual quadro?<h2>", choices: ["Os Operários", "Guernica", "Mona Lisa", "Nenhuma"], answer: 0},
        {question: "<img src='img/q30.jpg'/><h2>Pablo Picasso pintou qual quadro?<h2>", choices: ["Guernica", "A Persistência da Memórria", "O Grito", "Nenhuma"], answer: 0},
        {question: "<img src='img/q31.jpg'/><h2>Vicent Van Gogh pintou qual quadro?<h2>", choices: ["Noite Estrelada", "Os Operários", "Guernica", "Nenhuma"], answer: 0},
        {question: "<img src='img/q32.jpg'/><h2>Frida Kahlo pintou qual quadro?<h2>", choices: ["Las dos Fridas", "Mona Lisa", "O Grito", "Nenhuma"], answer: 0},
        {question: "<img src='img/q33.jpg'/><h2>Auguste Rodin é o autor de qual escultura?<h2>", choices: ["O Pensador", "Vênus de Milo", "David", "Nenhuma"], answer: 0},
        {question: "<img src='img/q34.jpg'/><h2>Michelangelo é o autor de qual escultura?<h2>", choices: ["David", "O Pensador", "Vênus de Milo", "Nenhuma"], answer: 0},
        {question: "<img src='img/q35.jpg'/><h2>Na obra 'Os Operários' de Tarsila do Amaral, o que a pintora buscou retatar?<h2>", choices: ["A Indrustrialização Brasileira", "A época do café no Brasil", "A libertação dos escravos", "Nenhuma"], answer: 0},
        {question: "<img src='img/q30.jpg'/><h2>Qual a nacionalidade do pintor Pablo Picasso?<h2>", choices: ["Espanhola", "Francesa", "Alemã", "Nenhuma"], answer: 0}

    ];

    var qnum = 0;
    var correct = 0;
    var _runningTime = new Date().getTime();
    var mapPointer = [];

    function showQuestion(qnum) {
        $("input[type='checkbox']").attr('checked', false);
        $("#current-question").html(qnum + 1);
        $('#question').html(allQuestions[ qnum ].question);
        var board = [];
        for (var i = 0; i < 4; i++) {
            board.push(i);
        }
        board.sort(function () {
            return .5 - Math.random();
        });
        $('#answer').html("");
        $.each(board, function (i) {
            $('#answer').append("<li class='col-md-3 col-sm-3 hero-feature'> <input type='radio' name='yes' id='checkAnswer" + board[i] + "'/> <label id='answer" + board[i] + "' for='checkAnswer" + board[i] + "'> " + allQuestions[ qnum ].choices[board[i]] + "</label> </li>");
        });

    }

    function changeQuestion() {
        if (qnum < allQuestions.length) {
            var isCorrect = "errado";
            if ($("#checkAnswer" + allQuestions[ qnum ].answer).is(":checked")) {
                correct++;
                isCorrect = "correto";
                toastr["success"]('correto');
            } else {
                isCorrect = "errado";
                toastr["warning"]('errado');
            }
            mapPointer.push({
                qnum: qnum,
                points: correct,
                answer: isCorrect
            });
            qnum++;
            showQuestion(qnum);
        } else {
            toastr["success"]("Você é um persistente, parabéns boa sorte, feliz desaniversário!"); 
            toastr["success"]("Quiz completo, você fez " + correct + " / " + allQuestions.length + " corretos.");

        }

        saveLogData();
    }


    function saveLogData() {
        var quiz = {};
        var endtime = new Date().getTime();
        quiz._runningTime = _runningTime;
        quiz.domain = document.domain;
        quiz.time = endtime - _runningTime;
        quiz.timestamp = moment(Date.parse(new Date())).format('YYYY-MM-DD HH:mm:ss');
        quiz.endtime = endtime;
        quiz.mapPointer =  JSON.stringify(mapPointer);
        quiz.levels = qnum;
        quiz.learnerid = _runningTime;
        quiz.learnername = '';
        quiz.idusers = 0;
        console.log("quiz: " + quiz)
        window.localStorage['com.gamecomenenius.quiz'] = JSON.stringify(quiz);
        $.getJSON("https://escoladocerebro.org/eduscada/c/index.php/gc_log_games", {iduser: quiz.idusers, log: JSON.stringify(quiz)})
                .done(function (json) {
                    if (json !== null) {
                        //toastr["success"]("Seu dados foram salvos " + quiz.learnername);
                        toastr["success"]("Próxima questão!");

                    } else {
                        toastr["warning"]("Você parece estar off-line!");
                        return false;
                    }
                })
                .fail(function (jqxhr, textStatus, error) {
                    toastr["warning"]("Você parece estar off-line!");
                    return false;
                });

    }


    $.ajax("questions.js")
            .done(function (json) {
                allQuestions = eval(json);
                showQuestion(qnum); 
            })
            .fail(function (jqxhr, textStatus, error) {
                toastr["warning"]("Você parece estar off-line!");
            });
    $('#next').on('click', changeQuestion);
    $("#lenght-question").html(allQuestions.length);
})(jQuery);
