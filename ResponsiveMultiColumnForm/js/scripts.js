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

var formsubmit = document.querySelector(".cbp-mc-submit");
console.log(formsubmit);
formsubmit.addEventListener("click", function(event) {
    //console.log(document.querySelector('input#first_name'));
    console.log(formelements.elements[0].value);
    console.log(formelements.elements[1].value);
    console.log(formelements.elements[2].type);
    console.log(formelements.elements[3].type);
    console.log(formelements.elements[4].type);
    console.log(formelements.elements[5].type);
    console.log(formelements.elements[6].type);
    console.log(formelements.elements[7].type);
    console.log(formelements.elements[8].type);
    console.log(formelements.elements[9].type);
    console.log(formelements.elements[10].type);
    console.log(formelements.elements[11].type);
    console.log(formelements.elements[12].type);
    console.log(formelements.elements[13].type);
    console.log(formelements.elements[14].type);
    console.log(formelements.elements[15].type);

  event.preventDefault();
  });

  var formelements = document.querySelector("form");
  console.log(formelements);
