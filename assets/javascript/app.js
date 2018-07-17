var app = (function () {

    var private = {
    i:0,
    time: 5 ,
    intervalId:0,
    correctAnswer:0,
    wrongAnswer:0,
    unAnswer:0,

    questions: [
        q1 = {
            question: "What's the name of Bellatrix' husband?",
            response1: "Albert Lestrange",
            response2: "Rolphius Lestrange",
            response3: "Adolph Lestrange",
            answer: "Rodolphus Lestrange",

        },

        q2 = {
            
            question: "Which of these is a type of Love Potion?",
            response1: "Felix Felicis",
            response2: "Veritaserum",
            response3: "Poly Juice Potion",
            answer: "Amortentia",
            

        },

        q3 = {
            question: "What class did Neville end up teaching at Hogwarts?",
            response1: "Astronomy",
            response2: "Muggle Studies",
            response3: "Charms",
            answer: "Herbology",

        },

        q4 = {
            question: "Which of these are not one of Hagrid's many pets?",
            response1: "Fluffy",
            response2: "Aragin",
            response3: "Norberta",
            answer: "Grawp",

        },

        q5 = {
            question: "Which class did Severus Snape always want to teach?",
            response1: "Potions",
            response2: "Charms",
            response3: "Transfiguration",
            answer: "Defence Againts the DA",

        },

        q6 = {
            question: "Which Hogwarts house did harry belong to?",
            response1: "Slytherin",
            response2: "Raven Claw",
            response3: "Hufflepuff",
            answer: "Gryfindor",

        },

        q7 = {
            question: "Which was not one of Voldemort's Horcruxes?",
            response1: "Harry",
            response2: "Nagini",
            response3: "Tom riddle's diary",
            answer: "Helga's Diadem",

        },

        q8 = {
            question: "When is Harry’s birthday?",
            response1: "Jun 20",
            response2: "Aug 6",
            response3: "July 8",
            answer: "July 31",

        },

        q9 = {
            question: "Which one is not a unforgivable spell ?",
            response1: "Avada Kadavra",
            response2: "Cruciatus",
            response3: "Imperius",
            answer: "Spectrum Patronus",

        },
    ],

    interTime: function(){

        clearInterval(private.intervalId);
        private.intervalId = setInterval(private.decrement, 1000);

     
    },

    decrement: function(){
        private.time = arg;
        private.time = private.time - 1;
        if (private.time === 0){
            $(".row").empty();
            private.stop();
            private.i++;
            private.time =5;
        }
    },

    stop: function(){
        clearInterval(private.intervalId);
        
    },

    update: function(){}
    

    };

    return {  

        getI: function(){
            return private.i;
        },

        setI: function(){
            private.i = private.i +1;
        },

        getTimer: function(){
            return private.interTime();
        },

        setTimer: function(arg){
            private.decrement(arg);
        },
        

        init: function(){
            
            private.interTime();
            this.displayquestion(this.getI());
            
        },

  


        reset: function(){},

        displayquestion: function() { 
           this.getTimer();

            $(".quiz").append("<div class = 'row'>"+ private.questions[private.i].question +"</div>");
            $(".quiz").append("<div class = 'row'>"+ private.questions[private.i].response1 +"</div>");
            $(".quiz").append("<div class = 'row'>"+ private.questions[private.i].response2 +"</div>");
            $(".quiz").append("<div class = 'row'>"+ private.questions[private.i].response3 +"</div>");
            $(".quiz").append("<div class = 'row'>"+ private.questions[private.i].answer +"</div>");

        },

        checkAnswer: function(){},

        getTime: function(){}

        




     };

})();

$(document).ready(function () {
 

  app.init();

})
