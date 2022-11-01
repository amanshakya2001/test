let i = 0;
let interval = setInterval(() => {
    $('.progress').css('width',i+'%');
    $('.loading').text(i+'%');
    i++;
    if(i > 100) {
        clearInterval(interval);
        $('.progress-section').remove();
        $('.document').removeClass('d-none');
    }
}, 100);
