//<script src="http://code.jquery.com/jquery.min.js"></script>


//////////////// Timed functionality

<script>
$(document).ready(function () {
	var currentDate = new Date();
	var currentYear = currentDate.getFullYear ();
	var currentMonth = currentDate.getMonth ();
	var currentDay = currentDate.getDate ();
	//alert(currentDay);

	if (currentYear == 2015 && currentMonth == 0 && currentDay >= 5) {
		$('#hours').remove();
	} else {
	}
});
</script>