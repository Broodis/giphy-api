var topics = ['PubG', 'Fortnite', 'Super Smash Bros', 'Overwatch', 'Far Cry 5', 'League of Legends', 'World of Warcraft',]

var $buttonArea = $('#buttonCol');

/* Functions:
/* Creates buttons based on items in topics array */
var createBtn = function() {
    for (var i = 0; i < topics.length; i++) {
        var newBtn = $('<button>');
        newBtn.attr('data-name', topics[i]);
        newBtn.attr('class', 'buttons');
        newBtn.text(topics[i]);
        $buttonArea.append(newBtn);

    }
}
createBtn();