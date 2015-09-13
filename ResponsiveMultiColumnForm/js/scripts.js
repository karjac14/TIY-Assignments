// The webpage is a template for creating forms. The form is typically for
// accepting personal informations of a person.
//
// The layout is minimalist. When the blanks are being clicked, the outline changes
// color to show that you have selected that particular blank form.
// The form aso have default sample values to show the user what format
// to key in such as as the name, email phone number.
//
// The JS file is expected to control the behavious of the forms when being
// selected.



// check other websites, see how inputs might be turned in or pron to console.
//

var formsubmit = document.querySelector(".cbp-mc-submit"); //define submit element
console.log(formsubmit);
formsubmit.addEventListener("click", function(event) {

    console.log(formelements.elements[0].value);
    console.log(formelements.elements[1].value);
    console.log(formelements.elements[2].value);
    console.log(formelements.elements[3].value);
    console.log(formelements.elements[4].value);
    console.log(formelements.elements[5].value);
    console.log(formelements.elements[6].value);
    console.log(formelements.elements[7].value);
    console.log(formelements.elements[8].value);
    console.log(formelements.elements[9].value);
    console.log(formelements.elements[10].value);
    console.log(formelements.elements[11].value);
    console.log(formelements.elements[12].value);
    console.log(formelements.elements[13].value);
    console.log(formelements.elements[14].value);
    event.preventDefault();
  });

  var formelements = document.querySelector("form");  //define all elements inside form
  console.log(formelements);
