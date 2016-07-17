// $(document).ready (function () {

//search for head meta tag

    if ( $('head meta').attr('charset') == 'test' ) {
    	alert('found it');
    	//$('head').append('<link href="css/test.css" rel="stylesheet">');
    } else {
    	alert('did not find meta');
    }

// });

//search url for a string
// var currentURL = window.location.pathname;

// if (currentURL.indexOf('parameter') > -1) {
//  	$('head').append('<link href="css/test.css" rel="stylesheet">');
// } else {
//   alert('not url');
// }




//Search DOM for a class
// function runAuthorCheck() {

//     if ( $('body div').hasClass('test') ) {
//     	$('head').append('<link href="css/test.css" rel="stylesheet">');
//     } 
// }

