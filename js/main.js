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
    result += '<p>' + text.substr(a, text.length - a) + '</p>';
    return result;
}

Math.randomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

$(document).ready(function() {
    $('.part_1').click(function() {
        $('.part_1 div div').each(function(i, element) {
            var row = $(element);
            if (row.hasClass('rotated')) {
                row.transition({
                    perspective: '1200px',
                    rotate3d: '1, 0, 0, ' + '0deg'
                }, 5000, 'easeInOutSine');

                row.removeClass('rotated');
            } else {
                row.data('angle', Math.randomInt(-720, 720));

                var vector = Math.randomInt(-10, 10) + ', ' + Math.randomInt(-10, 10) + ', ' + Math.randomInt(-10, 10) + ', ';


                row.transition({
                    perspective: '1200px',
                    rotate3d: vector + row.data('angle') + 'deg'
                }, 5000, 'easeInOutSine');

                row.addClass('rotated');
            }
        });
    });


    /*$('.part_1 div div').click(function() {
        var container = $(this);
        if (container.hasClass('flipped'))
            container.removeClass('flipped');
        else
            container.addClass('flipped');
    });*/

    $('.part_2 b').click(function() {
        var element = $(this);
        if (element.hasClass('bold'))
            element.removeClass('bold');
        else
            element.addClass('bold');
    });

    $('.part_3').click(function() {
        var container = $(this).find('span');
        if (container.hasClass('flipped'))
            container.removeClass('flipped');
        else
            container.addClass('flipped');
    });
});