
$(document).ready(function () {
	//hides modal window on page load
	$('#modal-wrapper').css('display', 'none');

	//modal functionality
	$('.modal-button-toggle').click(function () {
		
		//Checks to see if modal is showing
		if ($('#modal-wrapper:visible').length == 0) {
			$('#modal-wrapper').fadeIn(300);
		}  
		else {
			$('#modal-wrapper').fadeOut(300);
		}
	});

	 //external link functionality
	 $('.modal-button-continue').click(function() {

	 	//variable to pass url link
	 	var outsideUrl = 'http://www.dh.com';
	    window.open(outsideUrl);
	 });

})
	