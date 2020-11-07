var arbval = 0;     // Sets an arbitrary variable to be used //
var txt = 'Featured Products!'; //reference https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_typewriter //
//text to be printed //
var speed = 100; //speed at which to type //

function typeWriter() {   //start of function
	  if (arbval < txt.length) {    //if the value of the arbitrary variable is less than the length of the text to be printed: //
	    document.getElementById("animation-link").innerHTML += txt.charAt(arbval); //add a character //
	    arbval++; //increment the arbitrary value//
	    setTimeout(typeWriter, speed); //timeout//
  }
}