
// Clicking grid icon
//    grandparent div id = "cbp-vm" will have class "cbp-vm-switcher cbp-vm-view-grid"
//    1st atag(grid) will have class "cbp-vm-icon" "cbp-wm-grid" "cbp-vw-selected" and data-view "cbp-vw-view-grid"
//    2nd atag will have class "cbp-vm-icon" "cbp-wm-list" and data view "cbp-vw-view-list"
// Clicking Grid icon
//    grandparent div id = "cbp-vm" will have class "cbp-vm-switcher cbp-vm-view-list"
//    1st atag(grid) will have class "cbp-vm-icon" "cbp-wm-grid" "cbp-vw-selected" and data-view "cbp-vw-view-grid"
//    2nd atag will have class "cbp-vm-icon" "cbp-wm-list" "cbp-vw-selected" and data view "cbp-vw-view-list


// var divVm = document.querySelector("div#cbp-vm");
// var aGrid = document.querySelector('a.cbp-vm-icon.cbp-vm-grid');
// var aList = document.querySelector('a.cbp-vm-icon.cbp-vm-list');
// // assign elements "parent div", and the two a-tags.
//
// console.log (divVm);
// console.log (aGrid);
// console.log (aList);
// // prints in console, just to check if getting correct elements.
//
//
// function clickGrid (clickButton) {
//   var curButton = clickButton.currentTarget; // targets the current element which is grid
//   divVm.className = "cbp-vm-switcher cbp-vm-view-grid"; //assigns classes to parent div
//   curButton.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
//   aList.className = "cbp-vm-icon cbp-vm-list"; //assigns classes to list a tag
// }
//
// function clickList (clickButton) {
//   var curButton = clickButton.currentTarget; // targets the current element which is list
//   divVm.className = "cbp-vm-switcher cbp-vm-view-list"; //assigns classes to parent div
//   curButton.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
//   aGrid.className = "cbp-vm-icon cbp-vm-grid"; //assigns classes to grid a tag
// }
//
// aGrid.addEventListener('click', clickGrid, true); //listens clicks at grid icon
// aList.addEventListener('click', clickList, true); //listens clicks at list icon

// Jquery Starts here


$('a.cbp-vm-grid').click(function() {
  $(this).addClass('cbp-vm-selected');
  $('a.cbp-vm-icon.cbp-vm-list').removeClass('cbp-vm-selected');
  $('div#cbp-vm').removeClass('cbp-vm-view-list');
  $('div#cbp-vm').addClass('cbp-vm-view-grid');
});

$('a.cbp-vm-list').click(function() {
  $(this).addClass("cbp-vm-selected");
  $('a.cbp-vm-icon.cbp-vm-list').removeClass("cbp-vm-selected");
  $('div#cbp-vm').removeClass("cbp-vm-view-grid");
  $('div#cbp-vm').addClass("cbp-vm-view-list");
});
