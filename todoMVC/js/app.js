// (function (window) {
// 	'use strict';
//
// 	// Your starting point. Enjoy the ride!
//
// })(window);

// User Stories
// I can add a task to my todo list so that I can remember to do it later.
//  - TODO: Accepts strings from element input.new-todo,
//          addEventListener with event "change" and "enter key "to store string.
// I can edit a task on my todo list so that I can correct typos.
//  - TODO: On the listed tasks, addEventListener with event dblclick.
//          Current String should be able to be edited.
// I can mark a task as complete so that I remember that I have done it.
//  - TODO: an input element with type checkbox, can be ticked
//          changes the class of the corresponding li element to "completed"
// I can mark a completed task as incomplete so that I actually complete it this time.
//  - TODO: an input element with type checkbox, can be unticked
//          changes the class of the corresponding li element to empty
// I can delete a task from my todo list so that I don't have to see it any more.
//  - TODO: a button with class destroy, with addEventListener for click, will move the
//          the corresponding text or task to a different array perhaps "completed"
// I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
//  - TODO:  a button with class "clear-completed", with addEventListener for click
//           will delete all strings in completed array
// I can filter the list of tasks so that I can see just what tasks I have completed and what are left to do.
//  - TODO: two anchor tag, with display text of "All" and "Active" have addEventListener for clicks
//          will then add class of "selected" to the rescpective anchor tag.


//Attempted beast mode below

// document.querySelector("input.new-todo")
//   .addEventListener("keyup", storeNew (), true);

var newTodo = document.querySelector("input.new-todo");
newTodo.addEventListener("change", storeNew); // listen to any change in values, same as the original

var todoList = []; // store new lists

function storeNew () {
    console.log(newTodo.value); // prints current
    todoList.push(newTodo.value); // store current value to array. may not be useful.
}

// document.querySelector("label")
//         .addEventListener("dblclick", function (){
//           //edit string
//         })
