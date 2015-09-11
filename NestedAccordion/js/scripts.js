/**
 * ## What does it do?
 *
 * - When I click on a heading, the text below hides and shows.
 * - When I click a heading with no text visible (closed accordion):
 *   - the `<li>` that contains the heading I click turns into `<li class="cbp-ntopen">`
 * - When I click a heading with text visible (open accordion):
 *   - the `<li class="cbp-ntopen">` that contains the heading I click turns into `<li>`
 */

/**
var headingClose = document.querySelectorAll('li');               //creates array of closed accordion
var headingOpen = document.querySelectorAll('li.cbp-ntopen');     //creates array of opened accordion

console.log(headingClose);
console.log(headingOpen);
//if (headingClose.length > 0){
for  (var i=0; i < headingClose.length; i++){
headingClose[i].addEventListener('click', function() {
    headingClose[i].className ='cbp-ntopen';
}, false)}
//}

for  (var j=0; j < headingOpen.length; j++){
headingOpen[j].addEventListener('click', function() {
    headingOpen[j].className = "";
}, false)}
*/


var heading = document.querySelector('li.nttrigger');

heading.addEventListener('click', function() {

  if (document.querySelector("li").className !== "cbp-ntopen"){
    document.querySelector("li").className = "cbp-ntopen";
    return true;
  }
  if (document.querySelector("li").className === "cbp-ntopen"){
    document.querySelector("li").className = "";
    return true;
  }
}
)







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
