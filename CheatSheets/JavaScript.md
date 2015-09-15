
##  Basic Literal Types types in Javascript:

* **Null** - its basically an "empty" or no value.
    _Example is guess what... `null`._
* **Boolean** - its has a range of just true or false value, no gray area.
    _Example: `True`, `False`_
* **Number** - its has a range of any number whether a negative value or positive as long as it has value. _Example: `1`, `2`, `3`, `4.5`, `5.36723786`, `6.6667`, `-5.03`, `-4`_
* **String** - its a collection of alphabets and/or numbers or any characters. Which are written inside apostrophe. _Example: `"dog"`, `"R2D2"`, `"You can do this!"` , `"Trump's shiny hair`"_

##  Basic Operators in Javascript:

* **Arithmetic** - are operations that are like mathematical operations

      _Example: `+` (plus), `-` (minus), `*` (multiply), `/` (divide), `%` (remainder), `++` (counter or increment by 1)_
* **Comparison** - it does compare two values (one from left and one from right). ANd it returns a vlaue of `true` or `false`.

      _Example: `<` (less than), `>` (more than), `<=` (less than or equal to), `==` (is equal to?)
* **Assignment** -  it assigns a value to a certain operator. The syntax for this is `=`. _

      _Example:  `var myColor = "green";` the operator myColor is assigned to have a string value of "green"
                 `var myFavNum = "5";` the operator myFavNum is assigned to have a number value of 5

##  Built-in constant in Javascript:

* **Undefined** - property that has not been assigned a value, javascript assumes that the property is unknown or undefined.

      _Example: `var myName;   console.log (myName);`  // the JS will print `undefined` because the myName variable was not assigned of any value or type._


* **NaN** - it is a value that JS assumes to be unidentified number, it is ussually a result of a failed mathematical equation.

      _Example: `2 * "anyWord";` will result `NaN` because JS cannot interpret the equation of multiplying a number to a string._

* **Infinity** - it is numerical value that is infinite. In mathematics algebra, the symbol is ∞.

      _Example: `5 / 0;` will result `infinity`. The a number divided by zero is infinity, same as in mathematics._

      ##  Control Flow in Javascript:

      * **Block Statement {}** - is a block statement that is used to group statements. The block is delimited by a pair of curly brackets.

          _Example:_

              ```{ var x =1; var y = 3;
                return x * y;
              }```

          _the three statements, are in all delimited by two curly braces._

      * **If/else** - is a conditional statement that consist of ```if``` statement to execute a statement if a logical condition is true. And optional ```else``` clause to execute a statement if the condition is false.

          _Example:_

              ```if (true) {
                return x * y;
              } else {
                return x /y ;
              }```

          _the `if` statement does multiply operation as the logical condition is `true`._

      * **for Loop** A for loop repeats until a specified condition evaluates to false.

           _Example:_

              ```for( var i= 0; i < x; i++) {
                return x * y;
              }

          _the `for` loop statement above does execute the multiplication operation as the conditon of `i` reached the conditional statement `i < x`. The `i++` serves as the counter to increment the value of `i`. _

      * **for...in Loop** The for...in statement iterates a specified variable over all the enumerable properties of an object.
           _Example:_

              ```for( var i in z) {
                return x * y;
              }

          _the `for...in` loop statement above does execute the multiplication operation once for all the enumerable properties of the object `z`.

      * **while Loop** - A while statement executes its statements as long as a specified condition evaluates to true.

          _Example:_

              ```while (i < x)  {
                return x * y;
                i++
              }

          _the `while` loop statement above does execute the multiplication operation and will repeat as long as the `while` condition is `true`. _

      * **do/while** - The `do...while` statement repeats until a specified condition evaluates to false. This loop is  different from the `while` loop as this executes the statements the forst time without condition. If the consition is still logically true, then the loop iterates again until the condition becaome false.
      *
          _Example:_

              ```do  {
                return x * y;
                i++
              } while (i < x)

          _the `do while` loop statement above does execute the multiplication operation once and will repeat as long as the `while` condition is `true`. _

      * **switch/case** - A `switch` statement allows a program to evaluate an expression and attempt to match the expression's value to a `case` label. If a match is found, the program executes the associated statement.

          _Example:_

              ```switch (num) {
                case 1:
                  return "one";
                  break;
                case 2:
                  return "two";
                  break;
                  default:
                  return "Please choose 1 or 2 only";
                  break;
                  }

          _the `if` statement does multiply operation as the logical condition is `true`._

      ## `Array`

      Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects.

          _Example:_

        ```  var animals = ["Dog", "Dodo", "Donkey"];
             var easy3 = [5, 78, 12];
             var random = ["Carolina", "Beers", 55, True]
        ```
      ## Methods of Arrays

      * **Access an Element in Array** - to access an element in a n Arrays

          _Example:_

          ``` var letters = [a,b,c,d,e];
              var char = letter[2]; // char = c ```

          _the number refers to the order of the elements in array letters starting at index 0.

      * **Length** - returns the length of an array

          _Example:_

              ``` var letters = [a,b,c,d,e];
                  var char = letter.length; // char = 5 ```

          _char is equal to number `5` as the number of element inside `array letters` is 5.

      * **Add to the End** - returns the length of an array

          _Example:_

              ``` var letters = [a,b,c,d,e];
                  var newletters = letters.push(f) // adds f at the end of the array
                  
      * **change array Length** - change the array length.

          _Example:_

              ``` var letters = [];
                  letter.length = 50;
              ```



## Document Object Model (DOM)

A programming interface for HTML, XML, and SVG documents, connecting webpages to scripts. It represents the document as a structured group of nodes and objects (in tree form) making it accessible and changeable. The nodes can have events attached to them.

####Window Object
An object representing a window containing a DOM document.

Properties:
* **document:** This property returns the DOM document which is loaded in the window.
* **location:** Gets/sets the location(URL) or the window object. _Though Window.location is a read-only Location object, you can also assign a DOMString to it._
* **history:** is a read-only property that returns a reference to the History object, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in).

Methods:
* **Window.alert():** Displays an alert dialog.
* **Window.confirm():** Displays a dialog box with a message the user needs to respond to.
* **Window.reload():** Reloads the window.
* **Window.open():** Opens a new window.
* **Window.close():** Closes the current window.

#### Location Object
The Location interface represents the location of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.

#### Document Object
The object created in the browser when a web page loads. Entry point into the web page’s content. Depending on the kind of the document (e.g. HTML or XML), different APIs may be available on the document object.
Properties:
* **head:** Returns the element of the current document.
*docment.body: Returns the element of the current document.
methods:
* **document.getElementById():** Returns an object reference to the identified element.
* **document.getElementsByClassName:** Returns a list of elements with the given class name
* **document.querySelector:** Returns the first Element node within the document, in document order, that matches the specified selectors.
* **document.querySelectorAll:** Returns a list of all the Element nodes within the document that match the specified selectors.
* **create:** Creates whatever is specified i.e. document
* **document.write:** Writes text in a document

#### HTMLElement
The main component of HTML documents.
Properties:
* **id:** The id global attribute defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
* **className:** Classes allows CSS and Javascript to select and access specific elements via the class selectors or functions like the DOM method document.getElementsByClassName.
* **innerHTML:** property sets or gets the HTML syntax describing the element's descendants.
* **outerHTML:** The outerHTML attribute of the element DOM interface gets the serialized HTML fragment describing the element including its descendants. It can be set to replace the element with nodes parsed from the given string.
* **parent, children, nextSibling, and firstChild:** Inheritance. Parent is the root, child inherits from the parent, nextSibling also inherits from the parent but is separate from its sibling, firstChild is the first child called.
methods:
* **EventTarget.addEventListener():** A method that registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest).
* **EventTarget.dispatchEvent():** Dispatches an Event at the specified EventTarget, invoking the affected EventListeners in the appropriate order. The normal event processing rules (including the capturing and optional bubbling phase) apply to events dispatched manually with dispatchEvent().
* **Attribute:** An attribute extends a tag, changing tag behavior or providing metadata. An attribute always has the form name=value (giving the attribute's identifier and the attribute's associated value).

#### HTMLCollection
Interface that represents a generic collection of elements and offers methods and properties when selecting from the list. They are like arrays in that they are a list containing data, however, the each item contains multiple pieces of data.

#### NodeList
List containing objects that are collections of nodes and are returned by Node.childNodes and the document.querySelectorAll method.


07 - Assignments

#### How does an Event Bubbles?

When an event is captured in a single element at the DOM, the event (such as mouse clicks) climbs up to the top of the DOM (or the window). This proces is called a event bubbling.

A good example of this is when a hyperlined text is being clicked, the action goes through a capturing process coming from the `window` passing down to `document`, `html`, `body` all the way down to the element. When it reaches the the element, the event result goes up back, or called the bubbling process. During this bubbling process, each element in the heirarchy have the chance to check the event. Eventlistener commands can be set to perform actions in any of the element within the path.

Event bubbling process may be stopped, at a particular element using the `stopPropagation` method.

Here is a an example of event listener.

	`clickButton.addEventListener( "click", afunction, false);` 
	
	the `false` value refers to the event as bubbling process, while a `true` refers to capturing process.

#### Event Targeting

Event target or `event.target` refers to the object that dispatched the event. It is different than `event.currentTarget` when the event handler is called during the bubbling or capturing phase of the event.

The `event.target` property can be used in order to implement event delegation.

#### Mouse Event types

* ** dblclick** If two clicks happen close together, a `dblclick` (double-click) event is fired, after the second click event. 
* ** mousedown**  is fired not only when the mouse is physically clicked down. When a mouse is clicked and held, the event is fired again every time the mousedown repeats. 
* ** mouseup** is fired when the mouse click is released up.
* ** mouseover** Whenever the mouse pointer enters a node 
* ** mouseout** After the `mouseover`, `mouseout` Whenever the mouse pointer leaves a node 
* ** mousemove** Every time the mouse pointer moves, a `mousemove` event fires. This event can be used to track the position of the mouse. 


#### Form Event types
The HTMLFormElement interface provides methods to create and modify `form` elements; it inherits from properties and methods of the HTMLElement interface.

* ** reset** The HTMLFormElement.reset() method restores a form element's default values. This method does the same thing as clicking the form's reset button.
If a form control (such as a reset button) has a name or id of reset it will mask the form's reset method. It does not reset other attributes in the input, such as disabled.

* ** submit** Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.

#### Other common event types

* ** click** this an event that is fired on the most specific node that contained both the press and the release of the button. 
* ** scroll** Whenever an element is scrolled, a "scroll" event is fired on it. This has various uses, such as knowing what the user is currently looking at or showing some indication of progress 
* ** change** The change event is fired for `input`, `select`, and `textarea` elements when a change to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.
* ** submit** Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
* ** load**  The load event is fired when a resource and its dependent resources have finished loading.
* ** unload** The unload event is fired when the document or a child resource is being unloaded.

# Reading CSS

## Selectors

`.class` -Selects all elements with class

`#id` -Selects the element with id

`*` -Selects all

element - select all element with the element name, such as <p>, <div> , <li>

element, element - select two kinds of element, such as <p> and <div>



## Properties

`display` is CSS's most important property for controlling layout. Every element has a default display value depending on what type of element it is. The default for most elements is usually block or inline. 

`position` property specifies the type of positioning method used for an element (static, relative, fixed or absolute)

`float` property specifies whether or not an element should float.

`clear` property is used to control the behavior of floating elements.

`span` is the standard inline element. An inline element can wrap some text inside a paragraph without disrupting the flow of that paragrap

`width` is used for setting a block-level element will prevent it from stretching out to the edges of its container to the left and right.

`max-width` property is used to set the maximum width of a given element. It prevents the used value of the width property from becoming larger than the value specified for max-width.

`box-sizing` property is used to alter the default CSS box model used to calculate widths and heights of elements. It is possible to use this property to emulate the behavior of browsers that do not correctly support the CSS box model specification.

<percentage> CSS data types represent a percentage value. Many CSS properties can take percentage values, often to define sizes in terms of parent objects. Percentages are formed by a <number> immediately followed by the percentage sign %

`vertical-align` CSS property specifies the vertical alignment of an inline or table-cell box.


### [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/color) 

The text color of an element and its decorations (??)

#### Possible Values: [any `<color>` value](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)

* a hexadecimal color value: `#012345`, `#CCC`
* a color keyword: `cornflowerblue`, `purple`, `orange`
* RGB decimal notation: `rgb(0,0,0)`, `rgb(255, 255, 255)`
* RGBa (transparency) notation: `rgba(0,0,0,0)`, `rgba(255, 255, 255, 0.8)`
* HSL decimal notation: `hsl(0, 100%, 50%)`


