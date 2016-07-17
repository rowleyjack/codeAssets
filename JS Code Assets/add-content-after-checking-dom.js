
        $(document).ready (function() {
            
            var titleData = $('title').html();

            $('.main-content').prepend('<p class="aurthor-instruct">To create an article, click on "Properties" under the gear icon above.</p>');
            if($('title').html() !== 'CenturyLink |') {
                $('.main-content p').html(titleData);
            } else {
            }
        });
