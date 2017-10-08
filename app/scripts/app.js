import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'mediaelement';
import 'fullpage.js'
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
    $('html,body').animate({ scrollTop: $(document).height() }, 1000);
    return false
    }));

    btnTop.on('click', (function() {
    $('html,body').animate({ scrollTop: 400}, 'slow');
    return false
    }));

});

/* Animating hearts */
$(".items__item-like").on('click touchstart', function(){
    $(this).toggleClass('animating');
});


$(".items__item-like").on('animationend', function(){
    $(this).toggleClass('animating');
});

/* simple hard codex */
var text_service = document.getElementsByClassName('service-desctiption__read-description')[0];
var button_service = document.getElementsByClassName('service-desctiption__read-button')[0];
var text_about = document.getElementsByClassName('about-description__read-description')[0];
var button_about = document.getElementsByClassName('about-description__read-button')[0];
function  readmore() {
            button_service.onclick = function () {
                if (text_service.clientHeight < 155) {
                    text_service.style.height = 155 + 'px'
                } else {
                    text_service.style.height = 50 + 'px'
                }
            }

            button_about.onclick = function () {
                 if (text_about.clientHeight < 155) {
                         text_about.style.height = 155 + 'px'
                 } else {
                        text_about.style.height = 50 + 'px'
                 }
            }
 }

readmore()



var blogContainer = document.getElementsByClassName('blog-container__blog-items')[0].clientHeight;
var buttonShow = document.getElementsByClassName('blog-container__button-show')[0];
var child = document.getElementsByClassName('blog-container__blog-items')[0].childNodes;
console.log(child)
function blogItems(container, show) {
    if (blogContainer > (container / 2) )  {
     show.onclick = function onHide() {
            document.getElementsByClassName('blog-container__blog-items')[0].classList.add('overflow_blog-item');
            return  show.onclick = function onShow() {
                document.getElementsByClassName('blog-container__blog-items')[0].classList.remove('overflow_blog-item');
                return blogItems(container,show)
            }
          }
        }
    }
blogItems(blogContainer,buttonShow)


$('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});


