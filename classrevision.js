// chrome dev tools --> console


// print on console
console.log("Hello Javascript")

5 + 5;
5 + "5";
5 - 5;
5 - "5";
5 + "a";

// define a variable
var a = 10;


// function definition
function add(a, b){
	return a + b;
}

// this is same as above
var add = function(a, b){
	return a + b;
}

// function definition
add

// function call
add(1, 2);



// arrays are heterogenuous and can contain methods also
var arr = [1, 2, 3, 4, "a", "something else", add];


// hoisting
function hoistingMethod(){
	console.log('c = ', c);
	if (true){
		var c = 10; //this c gets hoisted, that is, gets declared at the top

		let w = 100; // this is local/block scope
	}

	return c; //as c was defined before, so it gets defined

}


// everything is inside window and is an API
// run these commands in console
window

// this is the complete code in your html
window.document
document
screen


//**************Open your resume html in the browser


// there are different events in javascript for mouse and keyboard
// run this in console: 
function clickedWindow(){
	console.log('clicked');
}

// this creates a listener
window.addEventListener('click', clickedWindow);


// getting elements

document.getElementById("element-id");

document.getElementsByClassName("elements-class");

document.getElementsByTagName("tag name like div, ul, li");

document.querySelectorAll("anything like css selectors  .classname #body-header");


// this was the code which we used to change the background-color of the header text
window.addEventListener('load', function(){
	console.log("window loaded");
	var x = 0;
	var headerText = document.getElementById("intro-text-header");
	var colors = ["red", "blue", "green"];
	headerText.addEventListener('click', function(){
			this.style.background = colors[x];
		   	x += 1;
	console.log(this.style.backgroundColor);
	});
});



// creating basic smooth scroll
var x = setInterval(function(){
  window.scrollBy(0, 3);

}, 10);

// and to clear the interval (stop the scroll)
clearInterval(x);



// remember the data attribute for the html tags
// you can set it to data-anything="anything else so it can be used to store the id of the section to scroll to"
<li id="about-link" data-sectionid="#about">About</li>

// ******************* ASSIGNMENT
// Step1: Take each <li> (menu item) in a variable [var lItem = document.getElementById('about-link')]
// Step2: Find corresponding section in another variable [var mySection = li.getAttribute('data-sectionid')];
// Step3: Add click event listener to lItem with a function which scrolls down to mySection (get the offset of the section from top)
// Step4: What if you are at a lower placed section and need to go back to a section above
// Step5: Improve the logic/make it more generic wherever you think










