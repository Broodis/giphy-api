var topics = ['PubG', 'Fortnite', 'Super Smash Bros', 'Overwatch', 'Far Cry 5', 'League of Legends', 'World of Warcraft',]

var $buttonArea = $('#buttonCol');

/* Functions:
/* Creates buttons based on items in topics array */
var createBtn = function () {
    $buttonArea.empty();
    for (var i = 0; i < topics.length; i++) {
        var newBtn = $('<button>');
        newBtn.attr('data-name', topics[i]);
        newBtn.attr('class', 'buttons');
        newBtn.text(topics[i]);
        $buttonArea.append(newBtn);

    }
}
/* Adds new button based on user input (click)*/
$("#addButton").on('click', function (event) {
    addButton();
});
/* Adds new button based on user input (enter)*/
$("#userInput").keydown(function (event) {
    if (event.keyCode == 13) {
        addButton();
        $("#userInput").val("");
        return false
    }
});

var addButton = function () {
    event.preventDefault();
    var input = $("#userInput").val();
    topics.push(input);
    createBtn();
}
var displayGif = function() {
    var btnTpc = $(this).data("name");
    var apiKey = "unE0UiNlYcS1P3CH0M8fUhjUQBxlkgPk";
    var apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + btnTpc + "&api_key=" + apiKey;
}

/* Main calls */
createBtn();
$(document).on('click', '.buttons', displayGif);