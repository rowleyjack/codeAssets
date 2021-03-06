<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<title>form test</title>
<link href="css/form.css" rel="stylesheet" type="text/css">
<style>
<!--
#form-wrapper {
	overflow: hidden;
	width: 500px;
	margin: 0 auto;
}
#form-wrapper div {
	float: left;
	width: 50%;
}
#form-wrapper input, #form-wrapper select {
	background: linear-gradient(#f0f0f0, #CCC); /* Standard syntax */
	border: 1px solid #999;
	border-radius: 5px;
	font-size: 14px;
	line-height: 30px;
	float: right;
	width: 250px;
	height: 30px;
	padding-left: 10px;
}
#form-wrapper select, #form-wrapper input.submit-btn {
	width: 262px;
}
#form-wrapper p {
	width: 100%;
	padding: 20px 0;
	clear: both;
	line-height: 30px;
}
#form-wrapper label {
	float: left;
}
#form-wrapper input.submit-btn {
	cursor: pointer;
	width: 150px;
	line-height: 14px;
}
#form-wrapper input.submit-btn:hover {
	background: linear-gradient(#ccc, ##f0f0f0); /* Standard syntax */
	border: 1px solid #333;
}
-->
</style>
</head>

<body>

<?php 
$action=$_REQUEST['action']; 
if ($action=="")    /* display the contact form */ 
    { 
    ?> 

<div id="wrapper">
 <div id="form-wrapper">
 	<form name="test-form" method="post" action="#" enctype="multipart/form-data">
    	<h2>Reserve a time online</h2>
        <p><label>Full Name:</label><input type="text" required name="name"></p>
        <p><label>Email Address:</label><input type="email" required name="email" required></p>
        <p><label>Phone Number:</label><input type="tel" name="telephone"></p>
        <p><label>Date:</label><select name="date"><option selected>November 14th</option><option>November 15th</option></select></p>
        <p><label>Time:</label><select name="time"><option selected>10 AM</option><option>11 AM</option><option>12 PM</option><option>1 PM</option></select></p>
    	<p><input class="submit-btn" type="submit" name="submit" value="Send Reservation"></p>
    </form>
 </div>
</div>
<?php 
    }  
else                /* send the submitted data */ 
    { 
    $name=$_REQUEST['name']; 
    $email=$_REQUEST['email']; 
    $telephone=$_REQUEST['telephone']; 
    $date=$_REQUEST['date']; 
    $time=$_REQUEST['time']; 
	
    if (($name=="")||($email=="")||($telephone=="")||($date=="")||($time=="")) 
        { 
        echo "All fields are required, please fill <a href=\"\">the form</a> again."; 
        } 
    else{         
        $from="From: $name<$email>\r\nReturn-path: $email"; 
        $subject="Message sent using your contact form"; 
        mail("rowleyjack@gmail.com", $subject, $message, $from); 
        echo "Email sent!"; 
        } 
    }   
?> 
</body>
</html>
