import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'mediaelement';

$(() => {
	svg4everybody();
});


$('#youtubevideo').mediaelementplayer({
    videoWidth: '100%',
    videoHeight: '100%',
    plugins: ['flash'],
    pluginPath: '/swf/',
    flashName: 'flashmediaelement.swf'
});

var btnBottom = $('.home__arrow');
var btnTop = $('.footer__arrow-up');

$(document).ready(function() {
    btnBottom.on('click', (function() {
    $('html,body').animate({ scrollTop: $(document).height() }, 'slow');
    return false
    }));

    btnTop.on('click', (function() {
    $('html,body').animate({ scrollTop: 400}, 'slow');
    return false
    }));

});




