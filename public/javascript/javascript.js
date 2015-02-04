var canvasHeight = $(window).height();
var floatingBanners = $("#rubywar");
var imageHeight = floatingBanners.height();
var lowerBound = canvasHeight - imageHeight;
var duration = 10000;

function bannerMoveDown(){
    $("#rubywar").animate({top:lowerBound}, duration, 'linear', bannerMoveUp);
}

function bannerMoveUp(){
    $("#rubywar").animate({top:0}, duration, 'linear', bannerMoveDown);
}

bannerMoveDown();