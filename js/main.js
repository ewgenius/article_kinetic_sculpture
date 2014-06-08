function paragrifizeText(text, length) {
    var counter = 0;
    var a = 0;
    var result = '';
    for (var i = 0; i < text.length; i++) {
        counter++;
        if ((
            text[i] == ' ' ||
            text[i] == ',' ||
            text[i] == ';' ||
            text[i] == ':' ||
            text[i] == '!' ||
            text[i] == '?'
        ) && counter >= length) {

            result += '<p>' + text.substr(a, counter) + '</p>';
            a = counter;
            counter = 0;
        }
    }
    return result;
}

$(document).ready(function() {
    $('.container div div').click(function() {
        var container = $(this);
        if (container.hasClass('flipped'))
            container.removeClass('flipped');
        else
            container.addClass('flipped');
    });
});