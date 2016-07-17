//mobile menu accordian
$(document).ready(function(){

	//page load with nav section hidden
	$('.hidden-menu').css('display', 'none');

	$('.show_hide').click(function () {

		$('.hidden-menu').slideToggle();
	});

	//interpage navigation to top funcionality
	$('#top-return').click(function () {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	  	return false;	
	}); 
 	
 	//show or hide interpage nav top functionality based on body tag height
 	 if ($('body').height() <= 2000) { //change number to set when nav shows
 	 	$('#floating-up').remove();
 	 } else {
 	 	
 	 }

});
