$(function(){
    var imageArray = ['ee','lian','mm','neesha'];
    var url = "http://connect.internet.org/assets/images/homepage/masks/"
    var  bgImage= url+ imageArray[Math.floor(Math.random()*imageArray.length)]+".jpg";
    $('.homepage-bg').css('background-image', 'url(' + bgImage + ')');
});
