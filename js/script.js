window.dataLayer = window.dataLayer || [];
function gtag(){
	dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-118371833-1');

// Eliminate funky background jump on mobile upon scroll due to URL bar. More info here: https://stackoverflow.com/questions/24944925/background-image-jumps-when-address-bar-hides-ios-android-mobile-chrome
// var bg = $(".content");

// function resizeBackground() {
//     bg.height( $(window).height() + 60);
// }

// $(window).resize(resizeBackground);
// resizeBackground();