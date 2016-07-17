/*$(document).ready(function () {

	var alt0 = 'this is alt text for image 1';
	var alt1 = 'this is alt text for image 2';
	var alt2 = 'this is alt text for image 3';
	var alt3 = 'this is alt text for image 4';
	var alt4 = '';
	var alt5 = '';

	//$('.image-container').css('border', 'red thin solid');

	var thumbsArray = [
		alt0, alt1, alt2, alt3, alt4, alt5
	];

	$('#image0 img').attr('alt', thumbsArray[0]);
	$('#image1 img').attr('alt', thumbsArray[1]);
	$('#image2 img').attr('alt', thumbsArray[2]);
	$('#image3 img').attr('alt', thumbsArray[3]);
	$('#image4 img').attr('alt', thumbsArray[4]);
	$('#image5 img').attr('alt', thumbsArray[5]);


	for (var i = 0; i < thumbsArray.length; ++i) {

		if (thumbsArray[i] == '') {
			$('#image' + i).hide();
		} else {

		}
		
	} 

});/*