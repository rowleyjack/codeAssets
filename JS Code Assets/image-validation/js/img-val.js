/**/

$(document).ready(function() {
	//alert('works');

	var ranNum = Math.random()
	var visitPic = ranNum * 100;
	//alert(visitPic);

	//Set Image
	if (visitPic >= 66.66) {
		$('#selectedImage').attr('src', 'images/3.jpg');
		
	} else if (visitPic >= 33.33) {
		$('#selectedImage').attr('src', 'images/2.jpg');
		
	} else {
		$('#selectedImage').attr('src', 'images/1.jpg');
	
	}

	








});


function checkWho () {

var whoValue = document.getElementById('checker').value;
alert(whoValue);
	
		if (document.getElementById('checker').value == 'Blue' || document.getElementById('checker').value == 'Green' || document.getElementById('checker').value == 'Red') {
			//event.preventDefault();
		 	document.getElementById('message').innerHTML= 'Thanks, we will review your information and contact you soon!';
		 } else {
		 	document.getElementById('message').innerHTML= 'Try Again';
		 	event.preventDefault();
		 }	

			


}
