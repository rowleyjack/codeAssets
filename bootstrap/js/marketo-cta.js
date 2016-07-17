//Logic for Medium Business Header layout changes.
$( document ).ready(function() {

	var emailInput1 = '<iframe src="modal.html" frameborder="0" scrolling="no"></iframe>';
	var emailInput2 = '<p class="email2-input">email 2<input type="text"></p>';
	var emailInput3 = '<p class="email3-input">email 3<input type="text"></p>';
	var emailInput4 = '<p class="email4-input">email 4<input type="text"></p>';

	$('.button-area button').click(function () {		

		//values from dialog properties assigned to jquery variables
		var marketoURL = $(this).children('.marketo-url').html();
		//alert(marketoURL);

		var marketoNurture = $(this).children('.marketo-nurture').html();
		//alert(marketoNurture);

		var marketoID = $(this).children('.marketo-id').html();
		//alert(marketoID);

		var marketoFormStyle = $(this).children('.marketo-form-style').html();
		//alert(marketoFormStyle);

		$('#marketo-form form').attr('action', marketoURL);
		$('#marketo-form form p .passed-form-id').html(marketoID);
		$('#marketo-form form p .passed-nurture').html(marketoNurture);

		if (marketoFormStyle == 'email1') {
			$( '.input-area').html(emailInput1);
		} 
		else if (marketoFormStyle == 'email2') {
			$( '.input-area').html(emailInput2);
		}
		else if (marketoFormStyle == 'email3') {
			$( '.input-area').html(emailInput4);
		}
		else if (marketoFormStyle == 'email4') {
			$( '.input-area').html(emailInput4);
		} else {
			alert('oops');
		}

	});
});