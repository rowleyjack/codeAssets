// JavaScript Document

//This JS affects the following pages:

// m.dish.com/default.aspx
// m.dish.com/packages/default.aspx
// m.dish.com/special-offers/default.aspx

$(document).ready(function(){
	
	//set's the default indicator to the minus image for accordians that are expanded upon page load
	$('#changeImage').attr('src', '/includes/packages/images/minus.png');
	
	$(".show_hide").show();
	
	$('.show_hide').click(function(){
	$(".slidingReviews").slideToggle();

	var src = ($("#changeImage").attr('src') == '/includes/packages/images/plus.png')
            ? '/includes/packages/images/minus.png'
            : '/includes/packages/images/plus.png';
         $("#changeImage").attr('src', src);
	if ($("#changeImage").attr('src').indexOf('closed.png') >= 0) {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/closed/','WT.dl','20');
	} else {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/open/','WT.dl','20');
	}
	});
	


$(".slidingReviews2").hide();
	$(".show_hide2").show();
	
	$('.show_hide2').click(function(){
	$(".slidingReviews2").slideToggle();

	var src = ($("#changeImage2").attr('src') == '/includes/packages/images/plus.png')
            ? '/includes/packages/images/minus.png'
            : '/includes/packages/images/plus.png';
         $("#changeImage2").attr('src', src);
	
	if ($("#changeImage2").attr('src').indexOf('closed.png') >= 0) {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/closed/','WT.dl','20');
	} else {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/open/','WT.dl','20');
	}
	});
	
$(".slidingReviews3").hide();
	$(".show_hide3").show();
	
	$('.show_hide3').click(function(){
	$(".slidingReviews3").slideToggle();

	var src = ($("#changeImage3").attr('src') == '/includes/packages/images/plus.png')
            ? '/includes/packages/images/minus.png'
            : '/includes/packages/images/plus.png';
         $("#changeImage3").attr('src', src);
	
	if ($("#changeImage3").attr('src').indexOf('closed.png') >= 0) {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/closed/','WT.dl','20');
	} else {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/open/','WT.dl','20');
	}
	});


$(".slidingReviews4").hide();
	$(".show_hide4").show();
	
	$('.show_hide4').click(function(){
	$(".slidingReviews4").slideToggle();

	var src = ($("#changeImage4").attr('src') == '/includes/packages/images/plus.png')
            ? '/includes/packages/images/minus.png'
            : '/includes/packages/images/plus.png';
         $("#changeImage4").attr('src', src);
	
	if ($("#changeImage4").attr('src').indexOf('closed.png') >= 0) {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/closed/','WT.dl','20');
	} else {
		dcsMultiTrack('DCS.dcsuri','/accordian' + unescape(window.location.pathname.toLowerCase().replace('.aspx','/')) + $(this).find("img").attr("alt").toLowerCase() + '/open/','WT.dl','20');
	}
	});

});

//HTML Structure
/*


      <div class="accordion" id="AT120">
        <div class="pack-button show_hide2" onClick="return false;">
          <div class="pack-header">
            <h2>America's Top<br>
              <span>120</span><br>
              190+ Channels</h2>
            <img src="/includes/packages/images/arrow-right.jpg" alt="right arrow"> </div>
          <div class="middle"><img src="/includes/packages/images/price-120.jpg" alt="America's Top 120 Package"></div>
          <div class="open-close"><img id="changeImage2" src="/includes/packages/images/plus.png" alt="" width="22" height="19"></div>
        </div>
        <div class="slidingReviews2 more-info">
          <div class="shadow"></div>
          <div class="pack-desc">
            <p>Package Features:</p>
            <ul>
              <li>Multi-Sport Pack Included until 12/31/14<sup>&dagger;</sup></li>
              <li>Free HD for 24 months<sup>3</sup></li>
              <li>Free Professional Installation</li>
              <li><img src="/includes/packages/images/premiums.jpg" alt="DISH Premium Channels" width="149" height="14">Free for 3 months:<sup>1</sup></li>
              <li><img src="/includes/packages/images/free-hopper-upgrade.jpg" width="215" height="16" alt="Free Hopper Upgrade"></li>
            </ul>
            <div class="channel-section">
              <div class="channel-shadow-top"></div>
              <h3>240+ Channels Including:</h3>
              <ul>
                <li>Nickelodeon</li>
                <li>Disney Channel</li>
                <li>TNT</li>
                <li>USA</li>
                <li>TBS</li>
                <li>ESPNU</li>
                <li>Cartoon Network</li>
              </ul>
              <ul>
                <li>FOX News Channel</li>
                <li>CNN</li>
                <li>MSNBC</li>
                <li>CNBC</li>
                <li>History</li>
                <li>A&amp;E</li>
                <li>Lifetime</li>
              </ul>
              <ul class="no-border">
                <li>TLC</li>
                <li>HGTV</li>
                <li>Discovery Channel</li>
                <li>ABC Family</li>
                <li>Spike TV</li>
                <li>E!</li>
                <li>IFC</li>
              </ul>
            </div>
            <div class="package-cta">
              <p class="yellow-button"><a class="aphone" href="tel:1-888-658-7943" tracking="AT120Plus">Call Now</a></p>
            </div>
          </div>
        </div>
      </div>
      <!-- end AT120 Plus -->


*/