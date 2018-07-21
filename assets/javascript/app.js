var app = (function () {

    var private = {
    _Time:0,
    currentQuestion:0,
    timeRes:10,
    intervalId:0,
    correctAnswer:0,
    wrongAnswer:0,
    unAnswer:0,

    questions: [
        q1 = {
            question: "What's the name of Bellatrix' husband?",
            response:["Albert Lestrange","Rolphius Lestrange","Adolph Lestrange","Rodolphus Lestrange"],
            answer: 3,

        },

        q2 = {
            
            question: "Which of these is a type of Love Potion?",
            response:["Felix Felicis","Veritaserum","Amortentia","Poly Juice Potion"],
            answer: 2,
            
            

        },

        q3 = {
            question: "What class did Neville end up teaching at Hogwarts?",
            response:["Herbology","Charms","Muggle Studies","Astronomy"],
            answer: 0,

        },

        q4 = {
            question: "Which of these are not one of Hagrid's many pets?",
            response:["Fluffy","Grawp","Aragin","Norberta"],
            answer: 1,
         

        },

        q5 = {
            question: "Which class did Severus Snape always want to teach?",
            response:["Potions","Transfiguration","Charms","Defence Againts the DA" ],
            answer: 3,
        },

        q6 = {
            question: "Which Hogwarts house did harry belong to?",
            response:["Slytherin","Raven Claw","Gryfindor","Hufflepuff" ],
            answer: 2,
    
        },

        q7 = {
            question: "Which was not one of Voldemort's Horcruxes?",
            response:["Harry","Helga's Diadem","Nagini","Tom riddle's diary"],
            answer: 1,
        
        },

        q8 = {
            question: "When is Harry’s birthday?",
            response:["Jun 20","Aug 6","July 8","July 31"],
            answer: 3,
        },

        q9 = {
            question: "Which one is not a unforgivable spell ?",
            response:["Avada Kadavra","Spectrum Patronus","Cruciatus","Imperius"],
            answer: 1,

        },
    ],

    interTime: function(){

        clearInterval(private.intervalId);
        private.intervalId = setInterval(private.decrement, 1000);

     
    },

    decrement: function(){

        console.log(private._Time);
        private._Time = private._Time - 1;
        
        $("display-time").append(private._Time);
        if (private._Time === 0){
           
            private.stop();
            private._Time = 0;
        

        }
    },

    stop: function(){
        clearInterval(private.intervalId);
        
    },

    update: function(){}
    

    };

    return {  

    

        getQuestionLenght: function(){
           return private.questions.length;

        },

         getCurrentQuestion: function(){
            return private.currentQuestion;

         },

         setCurrentQuestion: function(){

            private.currentQuestion +=1;
         },

         setCorrectAnswer: function(){

            private.correctAnswer+=1;
         },

         getCorrecAnswer: function(){

            return private.correctAnswer;
         },

         setWrongAnswer: function(){
             private.wrongAnswer+=1;
         },

         getWrongAnswer: function(){

            return private.wrongAnswer;
         },



         setUnAnswer: function(){

            private.unAnswer+=1;
         },

         getUnAnswer: function(){
             return private.unAnswer;
         },


        getStop: function(){
            private.stop();
        },

        get_Time: function(){
            return private._Time;
        },
        set_Time: function(arg){
            private._Time = arg;
        },

        getQuestionsL: function(){
            return private.questions.length;
        },



        

        init: function(){
        
            this.displayquestion();
            
        },


        displayquestion: function () {
          
            $(".quiz").empty();
        
    
            var a = $("<div>");
            a.addClass("row inner");
            a.text(private.questions[this.getCurrentQuestion()].question);
            $(".quiz").append(a);


            for (var i = 0; i < 4; i++) {
                var b = $("<div>");
                b.attr("data-state", i);
                b.addClass("row index inner");
                b.attr("onclick", "app.checkAnswer(event)");
                b.text(private.questions[this.getCurrentQuestion()].response[i]);
                $(".quiz").append(b);
            }
        },

        checkAnswer: function(){
        

           
        if (this.getCurrentQuestion() <= this.getQuestionLenght()){

        var userInput = $(event.srcElement).attr("data-state");

        if ( userInput  == private.questions[this.getCurrentQuestion()].answer){
        
        this.setCurrentQuestion();
        this.setCorrectAnswer();
        this.displayAnswer("Correct");
        setTimeout(()=> {this.displayquestion();
        },5000);

        }else {
            this.setCurrentQuestion();
            this.setWrongAnswer();
            this.displayAnswer("Incorrect");
            setTimeout(()=> {this.displayquestion();
                },5000);
            console.log("Incorrect");

        }

    }
    else {
        console.log("Game Over");
    }
        
        },

    displayAnswer: function(arg,arg2){

        
    
        this.set_Time(5);  
        private.interTime(); 
        $(".quiz").empty();
        var a = $("<div>");
        a.addClass("row");
        a.text(arg);
        $(".quiz").append(a);
        
        
    }

     };

})();

$(document).ready(function () {
 
$(".btn").on("click", function(){
    $(".quiz").empty();
    app.init()

})


})
