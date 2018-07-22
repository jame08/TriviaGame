var app = (function () {

    var private = {
        _Time: 0,
        currentQuestion: 0,
        intervalId: 0,
        correctAnswer: 0,
        wrongAnswer: 0,
        unAnswer: 0,
        _displayAns: null,
        userInput:null,
        giphy:null,

        wrongg: ['assets/Giphy/wrong1.gif','assets/Giphy/wrong2.gif','assets/Giphy/wrong3.gif','assets/Giphy/wrong5.gif'],
        correctg: ['assets/Giphy/correct.gif','assets/Giphy/correctt.gif','assets/Giphy/correct3.gif','assets/Giphy/correct4.gif','assets/Giphy/correct5.gif'],

        questions: [
            q1 = {
                question: "What's the name of Bellatrix' husband?",
                response: ["Albert Lestrange", "Rolphius Lestrange", "Adolph Lestrange", "Rodolphus Lestrange"],
                answer: 3,

            },

            q2 = {

                question: "Which of these is a type of Love Potion?",
                response: ["Felix Felicis", "Veritaserum", "Amortentia", "Poly Juice Potion"],
                answer: 2,



            },

            q3 = {
                question: "What class did Neville end up teaching at Hogwarts?",
                response: ["Herbology", "Charms", "Muggle Studies", "Astronomy"],
                answer: 0,

            },

            q4 = {
                question: "Which of these are not one of Hagrid's many pets?",
                response: ["Fluffy", "Grawp", "Aragin", "Norberta"],
                answer: 1,


            },

            q5 = {
                question: "Which class did Severus Snape always want to teach?",
                response: ["Potions", "Transfiguration", "Charms", "Defence Againts the DA"],
                answer: 3,
            },

            q6 = {
                question: "Which Hogwarts house did harry belong to?",
                response: ["Slytherin", "Raven Claw", "Gryfindor", "Hufflepuff"],
                answer: 2,

            },

            q7 = {
                question: "Which was not one of Voldemort's Horcruxes?",
                response: ["Harry", "Helga's Diadem", "Nagini", "Tom riddle's diary"],
                answer: 1,

            },

            q8 = {
                question: "When is Harry’s birthday?",
                response: ["Jun 20", "Aug 6", "July 8", "July 31"],
                answer: 3,
            },

            q9 = {
                question: "Which one is not a unforgivable spell ?",
                response: ["Avada Kadavra", "Spectrum Patronus", "Cruciatus", "Imperius"],
                answer: 1,

            },
        ],

        interTime: function () {
            

            clearInterval(private.intervalId);
            private.intervalId = setInterval(private.decrement, 1000);


        },

        decrement: function () {

            console.log(private._Time);
            private._Time = private._Time - 1;

            $(".display-time").text(private._Time);
            if (private._Time === 0) {

                
                private.stop();
                private._Time = 0;
                $(".display-time").empty();
               

            }
            else if (private._Time === 0 && private.userInput === null){

                private.stop();
                private._Time = 0;
                $(".display-time").empty();
                

            }
               
            
       
        },



        stop: function () {
            clearInterval(private.intervalId);

        },




    };

    return {



        getQuestionLenght: function () {
            return private.questions.length;

        },

        getCurrentQuestion: function () {
            return private.currentQuestion;

        },

        setCurrentQuestion: function () {

            private.currentQuestion += 1;
        },

        setCorrectAnswer: function () {

            private.correctAnswer += 1;
        },

        getCorrecAnswer: function () {

            return private.correctAnswer;
        },

        setWrongAnswer: function () {
            private.wrongAnswer += 1;
        },

        getWrongAnswer: function () {

            return private.wrongAnswer;
        },



        setUnAnswer: function () {

            private.unAnswer += 1;
        },

        getUnAnswer: function () {
            return private.unAnswer;
        },


        getStop: function () {
            private.stop();
        },

        get_Time: function () {
            return private._Time;
        },
        set_Time: function (arg) {
            private._Time = arg;
        },

        getQuestionsL: function () {
            return private.questions.length;
        },





        init: function () {
            private._Time = 0;
            private.currentQuestion = 0;
            private.intervalId= 0;
            private.correctAnswer = 0;
            private.wrongAnswer=0;
            private.unAnswer=0;
            private._displayAns = null;
            private.userInput = null;
            private.Giphy = null;
          

            this.displayquestion();
            this.displaytime(15);

        },


        displayquestion: function () {

            $(".display-time").text(15);
            if (this.getCurrentQuestion() != 9) {

                this.displaytime(15);
                $(".quiz").empty();
                var a = $("<div>");
                a.addClass("row txt");
                a.text(private.questions[this.getCurrentQuestion()].question);
                $(".quiz").append(a);

                private._displayAns = private.questions[this.getCurrentQuestion()].response[private.questions[this.getCurrentQuestion()].answer];
                console.log(private._displayAns);
                for (var i = 0; i < 4; i++) {
                    var b = $("<object>");
                    b.attr("data-state", i);
                    b.attr("width", 300);
                    b.addClass("row index txt mt-2");
                    b.attr("onclick", "app.getUserInput(event)");
                    b.text(private.questions[this.getCurrentQuestion()].response[i]);
                    $(".quiz").append(b);
                }
            } else {

                this.scoreDash();
            }

        },

        getUserInput: function () {

            private.userInput = $(event.srcElement).attr("data-state");
            this.checkAnswer();
            console.log(private.userInput);

        },

        checkAnswer: function(){

            if (private.userInput == private.questions[this.getCurrentQuestion()].answer) {


                this.displaytime(5),
                this.setCurrentQuestion();
                this.setCorrectAnswer();
                this.displayAnswer("Correct");
                this.randomGiphy("Correct");
                setTimeout(() => {
                    this.displayquestion();
                }, 5000);

            } else {
                
                this.displaytime(5);
                this.setCurrentQuestion();
                this.setWrongAnswer();
                this.randomGiphy("Incorrect");
                this.displayAnswer("Incorrect");
                setTimeout(() => {
                    this.displayquestion();
                }, 5000);

            }




        },

        displayAnswer: function (arg) {

            $(".quiz").empty();
            $(".display-time").text(5);
            var a = $("<div>");
            var b = $("<div>");
            a.addClass("row txt mt-3");
            b.addClass("row txt mt-3");
            a.text(arg);
            $(".quiz").append(a);
            b.text("The Answear is: " + private._displayAns);
            $(".quiz").append(b);
            console.log(private.giphy);
            $(".quiz").append('<iframe src= "'+ private.giphy +'" width="480" height="320" frameBorder="0" class = "mt- 3"></iframe>');


        },

        displaytime: function (arg) {
            
            this.set_Time(arg);
            private.interTime();
        },

        scoreDash: function () {
            var score = (this.getCorrecAnswer() / (this.getWrongAnswer() + this.getWrongAnswer()) * 100);
            $(".quiz").empty();
            var a = $("<div>");
            a.addClass("row txt");
            a.text("that wasnt hard !");
            $(".quiz").append(a);

            $(".quiz").append('<div class = "row txt mt-1">' + "Correct Answers: " + this.getCorrecAnswer() + '</div>');
            $(".quiz").append('<div class = "row txt mt-1">' + "Incorrect Answers: " + this.getWrongAnswer() + '</div>');
            $(".quiz").append('<div class = "row txt mt-1">' + "Unnnswer questions : " + this.getUnAnswer() + '</div>');
            $(".quiz").append('<div class = "row txt mt-1">' + "Total Points: " + score + '</div>');
            $(".quiz").append('<button class = "row txt btn btn-dark resetb mt-1"> Restart Quiz</button>');

            $(".resetb").on("click", function() { 

                app.init();
            })


        },

  

        randomGiphy:function(arg){

            if(arg === "Correct"){
            private.giphy =  private.correctg[Math.floor(Math.random()*private.correctg.length)];
            }

            else {
            private.giphy = private.wrongg[Math.floor(Math.random()*private.wrongg.length)];
            }

        } 

    };

})();

$(document).ready(function () {

    $(".btn").on("click", function () {
        $(".quiz").empty();
        app.init()

    })


})