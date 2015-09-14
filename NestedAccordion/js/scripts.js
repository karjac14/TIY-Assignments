/**
 * ## What does it do?
 *
 * - When I click on a heading, the text below hides and shows.
 * - When I click a heading with no text visible (closed accordion):
 *   - the `<li>` that contains the heading I click turns into `<li class="cbp-ntopen">`
 * - When I click a heading with text visible (open accordion):
 *   - the `<li class="cbp-ntopen">` that contains the heading I click turns into `<li>`
 */



function clickEvent (eventObject) {
  var liElement = eventObject.currentTarget.parentElement;
if (liElement.className === "cbp-ntopen") { //if the li element has class of cbp-ntopen when clicked, remove that class (closing the accordion)
  liElement.className = "";
} else { //otherwise give the li element the class of cbp-ntopen when clicked (opening the accordion)
  liElement.className = "cbp-ntopen";
}
//return true;
}

var headings3 = document.querySelectorAll("h3.cbp-nttrigger"); //returns an array of all h3 headings class of cbp-nttrigger. These are assigned to var headings
for (var i = 0; i < headings3.length; i++) { //this for loop passes through each item in the array
  var heading = headings3[i];
  heading.addEventListener('click', clickEvent); //each item passing through the loop is given the event listener click and the function clickAction
}

//these lines of code do the exact same thing but for all h4 elements with a class of cbp-nttrigger
var headings4 = document.querySelectorAll("h4.cbp-nttrigger");
for (var i = 0; i < headings4.length; i++) {
  var heading = headings4[i];
  heading.addEventListener('click', clickEvent);
}




// The webpage shows a sample of navigation buttons. Each buttons
// has short text decription under each one. Another three buttons are nested
// which also have some text under it. The DOM which in this case, is consisted of
// an HTML, CSS and Javascript. The HTML is the backbone of the DOM, where in
// different CSS and JS files are being "called" or linked.
//
// The movements from the text when clicking the buttons are interactive. Looking
// at the dev tools, the <li> is having class of "cbp-nttrigger".
//
// Clicking the buttons activates the movement, and clicking again resets back the
// the original position of the texts under the button.
//
// Linking a JS file that will control the bahavious of the buttons is needed.
// Perhaps a JS script that accepts an input of click or hover will do. The JS
// will also have an output changing the class of objects in the index.html
