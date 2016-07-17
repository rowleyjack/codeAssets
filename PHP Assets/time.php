<?php



function toShowOrNot () {

	$todayYear = date ('Y');
	$todayMonth = date('m');
	$todayDay = date('d');

	//echo "it works";
	if ($todayDay >= '06' && $todayMonth == '01' && $todayYear == '2015') {
		echo 'show';
	}
	else {
		echo 'no-show';
	}
}



// if ($sent) {
// 	print "Your email was sent successfully";
// } else {
// 	print "There is a problem";
// }

?>

<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
<link rel="stylesheet" href="css/form.css">
<style>
	.show {
		display: block;
	}
	.no-show {
		display: none;
	}
</style>
</head>

<body>
<div id="form-wrapper">
	<h1>Thanks</h1>
	<p></p>
	<form class="<?php toShowOrNot(); ?>" method="post">
	
		<div id="left-form">
			<p>Name:</p>
			<p>Email:</p>
			<p>Comments:</p>
		</div>
		<div id="left-form">
			<input type="text-field" name="name">
			<input type="email" name="email">
			<textarea name="message"></textarea>
			<input type="submit" name="submit">

		</div>
	</form>
</div>

</body>
</html>
