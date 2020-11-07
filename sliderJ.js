var slider = document.getElementById("myRange");		//Reference: Credit to https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_rangeslider//
var output = document.getElementById("demo");

//grabs two values from the html page and stores them in slider and output
output.innerHTML = slider.value; 

slider.oninput = function() {     //prints the slider value back out onto the html page //
  output.innerHTML = this.value;
}