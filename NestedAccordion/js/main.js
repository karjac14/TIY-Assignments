
// function clickEvent (eventObject) {
//   var liElement = eventObject.currentTarget.parentElement;
// if (liElement.className === "cbp-ntopen") { //if the li element has class of cbp-ntopen when clicked, remove that class (closing the accordion)
//   liElement.className = "";
// } else { //otherwise give the li element the class of cbp-ntopen when clicked (opening the accordion)
//   liElement.className = "cbp-ntopen";
// }
// //return true;
// }
//
// var headings3 = document.querySelectorAll("h3.cbp-nttrigger"); //returns an array of all h3 headings class of cbp-nttrigger. These are assigned to var headings
// for (var i = 0; i < headings3.length; i++) { //this for loop passes through each item in the array
//   var heading = headings3[i];
//   heading.addEventListener('click', clickEvent); //each item passing through the loop is given the event listener click and the function clickAction
// }
//
// //these lines of code do the exact same thing but for all h4 elements with a class of cbp-nttrigger
// var headings4 = document.querySelectorAll("h4.cbp-nttrigger");
// for (var i = 0; i < headings4.length; i++) {
//   var heading = headings4[i];
//   heading.addEventListener('click', clickEvent);
// }

$ ("h3.na-triga").click(function () {
  $("p.top-content").toggleClass("na-open");
});

$ ("h4.na-triga").click(function () {
  $("p.sub-content").toggleClass("na-open");
});
