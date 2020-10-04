//array which contains the object: the array "database".
var database =  [
{
	username:"kolia",
	password:"zuper"
},
{
	username:"sally",
	password:"123"
},
{
	username:"ingrid",
	password:"777"
}
];

//array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
{
	username:"bobby",
	timeline: "so tired from all that learning"
},
{
	username: "sally",
	timeline: "fb is so cool"
},
{
	username:"mitch",
	timeline: "JS is pretty nice"
}
];



function isUserValid(username, password) {
//when sign in
for (var i=0; i < database.length; i++){
// i- 0,1,2 etc. database length
	if(database[i].username === username &&
		database[i].password === password) {
		// if user is valid return
		return true;
	} 
}
// if user isnt valid return
return false;

}

function signIn(username, password) {
	// console.log(isUserValid(username, password)); 
if (isUserValid(username, password)) {
		console.log(newsFeed);
	} else {
		alert("Sorry wrong user and password");
	}
}


var userNamePrompt = prompt("what's your user name");
var passwordPrompt = prompt("what's your pass");

signIn(userNamePrompt, passwordPrompt);


//////////////////////////////////////////////////////////////

// list functions start //////////////////////////////////////
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");




function createListElement () {
	//click creates a new <li> element
	var li = document.createElement("li")
	// append the last li element and to display - must have a value
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	// placeholder - after entering the value = empty string
	input.value = "";
}


function inputLength() {
	//length - a number of characters a string has
	return input.value.length;
}

button.addEventListener("click", function(){
	//if input value > 0 add to the list
	if (inputLength() > 0) {
		createListElement();
			
	}
})

//press enter
input.addEventListener("keypress", function(event){
	//if input value > 0 add to the list 
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
})

// list functions end ///////////////////////////////////////




