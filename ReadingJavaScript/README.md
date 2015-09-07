
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


      * **Add to the End** - returns the length of an array  
