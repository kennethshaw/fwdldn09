	// this is a single line comment
	/*
	 * this is a multi-line comment
	 */

	 //Prompt the user for their name and last name. 

	 var name = prompt("what is your name?");
	 var surname = prompt("what is your surname?");

	//Create a new variable called full name and store the users full name.
	
	var fullname = name + surname
	
	//Print the full name to the console.
	
	console.log(fullname)

	//Prompt the user for their age.
	
	var age 
	age = prompt("give me your age. NOW!");

	//Add 10 to the age and print the output to the console.
	
	var newage = parseInt(age)+ 10;
	console.log(newage);
	
	//Verify that the user is over 18 and print if they are a minor or adult to the console.

	if (age >= 18) {
		console.log('adult')}
	else{
		console.log('minor')};

	
	//Verify if the first name is "General" and the last name is NOT "Assembly"

	if (name == "General" && surname !== "Assembly") {

		console.log("you are not the right General")
	}