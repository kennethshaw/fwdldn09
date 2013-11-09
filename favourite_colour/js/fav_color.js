$(


  function(event) {
  	//Start to type below here. Make sure not to delete any "{}" braces. 

  	var favColour = prompt("what is your favorite colour");

  	console.log(favColour);

  	if (

  		(favColour === "blue") ||
  		(favColour === "red") ||
  		(favColour === "yellow") ||
  		(favColour === "green") 

  	) {

		$("body").css("background-color",favColour);

  	} else {

  		$("h2").text("Sorry, we don't have that colour")
  		
  	}

}
);