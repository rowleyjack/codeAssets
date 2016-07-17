$( document ).ready(function() {

	var currentURL = window.location.href;

	$('#moreSearchResults').find('a').each(function(e) {
        var resultURL = ($(this).attr('href'))
        if (currentURL == resultURL) {
            $(this).addClass('currentSearchResult');
            $(this).children('div').removeClass('searchItems');
        }
    });
});