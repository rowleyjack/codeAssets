$( document ).ready(function() {
	$('.corp-nav .drop').show();

	$('.click-drop').click(function() {
		$(this).parent().find('.drop').addClass('dropped');
		$(this).parent().find('.drop').toggle();
	});

	//$('div').not($('.test')).css('border', 'red 5px solid');

$('body').not('body .corp-links .nav .click-drop').on('click', function (e) {
    e.stopPropagation(); //prevent the event from bubbling through the DOM hierarchy
    alert('click');
});

            //.addClass('jack');

        //     $('.corp-links .dropdown.has-sub .dropdown-menu').hide();
        //     $(".dropdown-menu").removeClass("open");
        //     alert('hit area clicked');
        // });

	//$('li').not($('.test')).css('border', 'red 5px solid');

	// $('body').click(function(event) {
	// 	alert('click on body');

	// 	var visibleDrop = 'display: block;';
	// 	var hiddenDrop = 'display: none;';

	// 	if ($('div.drop').attr('style') == 'display: none;') && () {
	// 		alert('is display none');
	// 	} else {

	// 	}
	// });


    //$('.corp-nav .drop').();

    // Show hide popover
    // $('.corp-nav .click-drop').click(function(){
    //     $('.corp-nav .drop').hide();
    //     $(this).parent().find('.drop').toggle();
    // });





alert('script ran');



});


//alert('script ran');
