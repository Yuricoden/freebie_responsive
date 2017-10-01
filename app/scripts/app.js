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


