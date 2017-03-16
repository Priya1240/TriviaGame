var count = 30;

var unanswered = 0;
var correct = 0;
var incorrect = 0;


var counter = setInterval(timer, 1000); //1000 will  run it every 1 second



$("#game").hide();
$("#results").hide();

$("#button").on("click", function() {
    $("#game").show();

    $(this).hide();
    startGame();

})

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        endGame();

    }

    $("#time").html(count)

}

function endGame() {

    var trivia = $(".question");
    console.log(trivia);

    for (var i = 0; i < trivia.length; i++) {

        var userGuess = $(trivia[i]).find("input:checked");

        if (userGuess.length == 0) {
            unanswered++;

        } else if (userGuess.val() == questions[i].solution) {
            correct++;
        } else {
            incorrect++;
        }

    }

    console.log(correct, incorrect, unanswered);

    var result = "Correct: " + correct + "<br>";
    result += "Incorrect: " + incorrect + "<br>";
    result += "Unanswered: " + unanswered + "<br>";


    $("#results").html(result);
    $("#results").show();

    $("#game").hide();

}

var questions = [

    {
        text: "1. What is the capital of Japan?",
        answers: ["Tokyo", "Okinawa", "Saporo", "Ichiban"],
        solution: 0
    },

    {
        text: "2. Santiago is the capital city of which country?",
        answers: ["Brazil", "Peru", "Colombia", "Chile"],
        solution: 3
    },

    {
        text: "3. Wellington is the capital city of which country?",
        answers: ["Austria", "New Zealand", "England", "Ireland"],
        solution: 1
    },

    {
        text: "4. How many countries are there in North America?",
        answers: [9, 22, 14, 23],
        solution: 3
    },

    {
        text: "5. Taipei is the capital of which independent country?",
        answers: ["China", "Vietnam", "Taiwan", "Cambodia"],
        solution: 2
    },

    {
        text: "6. What is the tallest mountain in the world?",
        answers: ["Mt. Everest", "Mt. Kilimanjaro", "Diamond Head", "Mt. Rushmore"],
        solution: 0
    },

    {
        text: "7. How many states does the United States of America have?",
        answers: [38, 45, 52, 51],
        solution: 2
    },

    {
        text: "8. The Pacific, Atlantic, Indian, Southern and Arctic make up what part of Earth?",
        answers: ["Continents", "Countries", "Oceans", "Mountain Ranges"],
        solution: 2
    },

    {
        text: "9. What name is given to the line between the Northern and Southern hemisphere?",
        answers: ["Prime-Meridian", "Equator", "Tropic of Cancer", "Latitude"],
        solution: 1
    },

    {
        text: "10. On Earth, the lithosphere is broken up into which type of plates?",
        answers: ["Glass Plates", "Tectonic Plates", "Glacial Plates", "Cosmic Plates"],
        solution: 1
    },

    {
        text: "11. What is the longest mountain range in the world?",
        answers: ["Andes", "Appalachian", "Colorado", "Himalayan"],
        solution: 0
    },

    {
        text: "12. What is highest waterfall in the world?",
        answers: ["Victoria Falls", "Angel Falls", "Niagara Falls", "Tugela Falls"],
        solution: 1
    },

    {
        text: "13. Which ocean does the Amazon River empty into?",
        answers: ["Pacific", "Atlantic", "Carribean", "Indian"],
        solution: 1
    },

    {
        text: "14. What is the capital of Bermuda?",
        answers: ["Hamilton", "St. John", "Seattle", "Arlington"],
        solution: 0
    },

    {
        text: "15. The largest volcano on Earth is located in Hawaii, what is its name?",
        answers: ["Diamond Head", "Kilauea", "Maunaloa", "Loihi"],
        solution: 1
    }
]



function createQuest(question, questionNum) {
    var html = "";

    html += "<div class='question'>";
    html += "<h1>";
    html += question.text;
    html += "</h1>";

    var btnName = "q_" + questionNum;

    for (var i = 0; i < question.answers.length; i++) {

        html += "<input type = 'radio' name = '" + questionNum;
        html += "' value = '" + i + " '>";
        html += question.answers[i];
    }

    html += "</div>";
    console.log(html);
    return html;
}

function startGame() {

    for (var i = 0; i < questions.length; i++) {
        var qHtml = createQuest(questions[i], i)
        $("#questions").append(qHtml);

    }

}
