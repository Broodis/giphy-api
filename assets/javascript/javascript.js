var topics = ['PubG', 'Fortnite', 'Super Smash Bros', 'Overwatch', 'Far Cry 5', 'League of Legends', 'World of Warcraft',]
var stillImage = '';
var animatedImage = '';
var gifStatus = '';
var stillUrl = '';
var animatedUrl = '';
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
var displayGif = function () {
    var btnTpc = $(this).data("name");
    var apiKey = "unE0UiNlYcS1P3CH0M8fUhjUQBxlkgPk";
    var apiUrl = "https://api.giphy.com/v1/gifs/search?q=" + btnTpc + "&api_key=" + apiKey;
    $.ajax({
        url: apiUrl,
        method: 'GET'
    }).done(function (response) {
        $('.gifImageRow').empty();
        let newH1 = $('<h1>');
        newH1.html(btnTpc);
        $('.gifRow').empty();
        $('.gifRow').append(newH1);

        for (var i = 0; i < 10; i++) {
            stillImage = response['data'][i]['images']['fixed_height_still']['url'];
            animatedImage = response['data'][i]['images']['fixed_height']['url'];
            var rating = response['data'][i]['rating'];
            var newDiv = $('<div class="col-sm-12 col-lg-3">');
            var newP = $('<p>');
            var newImg = $('<img>');
            newImg.attr('data-still', stillImage);
            newImg.attr('data-animate', animatedImage);
            newImg.attr('src', stillImage);
            newImg.attr('data-type', 'still');
            newImg.addClass('gifImage');
            newP.html('Giphy Rating: ' + rating);
            $(newP).appendTo(newDiv)
            $(newImg).appendTo(newDiv);
            $('.gifImageRow').append(newDiv);
        }
    });
}
var startGif = function () {
    gifStatus = $(this).data('type');
    stillUrl = $(this).data('still');
    animatedUrl = $(this).data('animate');
    if (gifStatus === 'still') {
        $(this).attr('src', animatedUrl);
        $(this).data('type', 'animate');
    } else if (gifStatus === 'animate') {
        $(this).attr('src', stillUrl);
        $(this).data('type', 'still');
    }
}

/* Main calls */
createBtn();
$(document).on('click', '.buttons', displayGif);
$(document).on('click', '.gifImage', startGif);