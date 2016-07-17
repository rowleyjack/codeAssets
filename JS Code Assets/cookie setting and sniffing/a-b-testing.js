// JavaScript Document

//Home Page Function
function split ()
{
	var cookieVal = readCookie("family-friend");
	//alert ("cookie: " + cookieVal);
	
	if (cookieVal==""||cookieVal==null)
	{
		
		var test = Math.random(10);
		var chance = (Math.random()*100);
	
		if (chance <= 50) 
			{
				displayContent ("contentA")
				createCookie("family-friend", "contentA", .09);
			}
            else
			{
				displayContent ("contentB")
				createCookie("family-friend", "contentB", .09);
			}
	}

	else
	{
		displayContent (cookieVal);
	}

}


function displayContent (val) 
{
		if (val == "contentA")
		{
			$("#overview h2").html("IT PAYS TO HAVE GOOD FRIENDS.");
			$("#overview p:first-child").html("Your friends already have DISH, don’t you want to know what all the hype is about? Save $50 off of your first month’s bill when you’re referred by a DISH customer!*");
			$("head").append("<meta name='DCSext.w_Project' content='Customer Referring'>");
			$("head").append("<meta name='DCSext.w_TestID' content='Friends and Family'>");
			$("head").append("<meta name='DCSext.w_ExperimentID' content='Good Friends'>");
		}
		else
		{	$("#overview h2").html("GET REFERRED,<br> SAVE $50");
			$("#overview p:first-child").html("Your friends already have DISH. Now, when you’re referred by a friend who is a current DISH customer, you’ll save $50 off of your first month’s bill!*");
			$("head").append("<meta name='DCSext.w_Project' content='Customer Referring'>");
			$("head").append("<meta name='DCSext.w_TestID' content='Friends and Family'>");
			$("head").append("<meta name='DCSext.w_ExperimentID' content='Save $50'>");
		}
}



