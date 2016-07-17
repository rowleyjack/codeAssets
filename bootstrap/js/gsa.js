$( document ).ready(function() {

	$('#sign-in-area').hide();

	//url parameter functionality

	var urlPath = window.location.href;
	var paramCheck = 'medium_business_frontend';

	if (urlPath.indexOf(paramCheck) != -1) {
		$('#ttSmallBusHeaderTN').html('Call Us: 800-871-9244');
		$('#tpl_logo').attr('href', 'http://www.centurylink.com/business/');
		$('#sb_global-nav-contact-us').attr('href', 'http://www.centurylink.com/business/contact-us.html');

		//main nav link updates for Medium business

		$('#sb_mam').hide();
		$('#sign-in-area').show();
		$('#tpl_global-nav2').css('margin-right', '83px');
		$('#menu_top_sb li').removeClass('currMenuTop');

		$('#homeTopLink').html('Home').attr('href', 'http://www.centurylink.com/business/');
		$('#productsTopLink').html('Products &amp; Solutions').attr('href', 'http://www.centurylink.com/business/products-overview.html');
		$('#industriesTopLink').html('Industries').attr('href', 'http://www.centurylink.com/business/industries-overview.html');
		$('#resourcesTopLink').html('Resources').attr('href', 'http://www.centurylink.com/business/resource-center/overview/index.html');
	}

	//dropdown hover functionality

	$('#sign-in-drop').hide();
	
	$('#sign-in-area').hover(function() {
		$('#sign-in-drop').show();
	});

	$('#sign-in-area').mouseleave (function() {
		$('#sign-in-drop').hide();
	});

	//hover states for the dropdown links

    $('#sign-in-drop li').hover(function() {
    	$(this).css('background', '#D0E7B5');
    });
    $('#sign-in-drop li').mouseleave(function() {
    	$(this).css('background', '#f2f2f2');
    });

});

