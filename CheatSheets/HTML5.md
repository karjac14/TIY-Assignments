## `<html>`

represents the root of an HTML document. All other elements must be descendants of this element.
 [`<!DOCTYPE>`](http://www.w3schools.com/tags/tag_doctype.asp), for some reason.

* _parents_: none, it's the top
* _content_: _only_ [`<head>`](#head) and [`<body>`](#body)
* _display_: `block`, `none`

### Attributes

* `class` -- a space-separated list of category names
* `lang` -- declares the language of the document
*  manifest -- Specifies the address of the document's cache manifest (for offline browsing)
*  xmlns -- Specifies the XML namespace attribute (If you need your content to conform to XHTML)


## `<!DOCTYPE>`

declaration is not an HTML tag; it is an instruction to the web browser about what version of HTML the page is written in.

### Attributes

none


## ``<!-- -->``

are used to insert comments in HTML.

### Attributes

none

## ``<head>``

provides general information (metadata) about the document, including its title and links to or definitions of scripts and style sheets

* _parents_: <html>
* _content_: no category
* _display_: NA

### Attributes

none

## ``<body>``

represents the content of an HTML document. There can be only one <body> element in a document.

* _parents_: <html>
* _content_: sectioning root, flow content
* _display_: `block`, `inline`, `inline-block`

### Attributes

none

## `<div>`

is the generic container for flow content, which does not inherently represent anything.

* _parents_: anything that accepts [Flow Content][1], which is apparently a lot of things.
* _content_: any [Flow Contant][1],
* _display_: `block`, `inline`, `inline-block`

## Rules of Html Tags:

There are five important rules for coding with HTML tags.

Tags are always surrounded by angle brackets (less-than/greater-than characters), as in <HEAD>.
Most tags come in pairs and surround the material they affect. They work like a light switch: the first tag turns the action on, and the second turns it off. (There are some exceptions. For instance, the <BR> tag creates a blank line and doesn't have an "off switch." Once you've made a line break, you can't unmake it.)
The second tag—the "off switch"—always starts with a forward slash. For example, you turn on bold with <B>, shout your piece, and then go back to regular text with </B>.
First tag on, last tag off. Tags are embedded, so when you start a tag within another tag, you have to close that inner tag before closing the outer tag. For instance, the page will not display properly with the tags in this order:
<HEAD><TITLE>Your text</HEAD></TITLE>.

The correct order is:

<HEAD><TITLE>Your text</TITLE></HEAD>.

Many tags have optional attributes that use values to modify the tag's behavior. The <P> (paragraph) tag's ALIGN attribute, for instance, lets you change the default (left) paragraph alignment. For example, <P ALIGN=CENTER> centers the next paragraph on the page. [2]
. . .



## ``<ul>``

unordered list element (<ul>) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.

* _parents_: div, section, article
* _content_: sectioning root, flow content
* _display_: `block`, `inline`, `inline-block`

### Attributes

## ``<ol>``

represents an ordered list of items. Typically, ordered-list items are displayed with a preceding numbering, which can be of any form, like numerals, letters or Romans numerals or even simple bullets. This numbered style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.


* _parents_: div, section, article
* _content_: sectioning root, flow content
* _display_: `block`, `inline`, `inline-block`

### Attributes

## ``<dl>``

Description List Element encloses a list of pairs of terms and descriptions. Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).


* _parents_: div, section, article
* _content_: sectioning root, flow content
* _display_: `block`, `inline`, `inline-block`

### Attributes

## ``<form>``

represents a document section that contains interactive controls to submit information to a web server.

* _parents_: div, section, article
* _content_: Flow content, palpable content
* _display_: `block`, `inline`

## ``<input>``

 is used to create interactive controls for web-based forms in order to accept data from the user. How an <input> works varies considerably depending on the value of its type attribute.

* _parents_: form, div, section, article
* _content_: Flow content, listed, submittable, resettable, form-associated element, phrasing content.
If the type is not hidden, then labellable element, palpable content.
* _display_: `block`, `inline`

## ``<label>``

 represents a caption for an item in a user interface. It can be associated with a control either by placing the control element inside the <label> element, or by using the for attribute. Such a control is called the labeled control of the label element.

* _parents_: form, div, section, article
* _content_: Flow content, phrasing content, interactive content, form-associated element, palpable content.
* _display_: `block`, `inline`

### ``type``

The type of control to display. The default type is text, if this attribute is not specified. Possible values are:
button: A push button with no default behavior.
checkbox: A check box. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected. You can also use the indeterminate attribute to indicate that the checkbox is in an indeterminate state (on most platforms, this draws a horizontal line across the checkbox).
color: HTML5 A control for specifying a color. A color picker's UI has no required features other than accepting simple colors as text (more info).
date: HTML5 A control for entering a date (year, month, and day, with no time).
datetime: HTML5 A control for entering a date and time (hour, minute, second, and fraction of a second) based on UTC time zone.
datetime-local: HTML5 A control for entering a date and time, with no time zone.
email: HTML5 A field for editing an e-mail address. The input value is validated to contain either the empty string or a single valid e-mail address before submitting. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
file: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
hidden: A control that is not displayed, but whose value is submitted to the server.
image: A graphical submit button. You must use the src attribute to define the source of the image and the alt attribute to define alternative text. You can use the height and width attributes to define the size of the image in pixels.
month: HTML5 A control for entering a month and year, with no time zone.
number: HTML5 A control for entering a floating point number.
password: A single-line text field whose value is obscured. Use the maxlength attribute to specify the maximum length of the value that can be entered.
radio: A radio button. You must use the value attribute to define the value submitted by this item. Use the checked attribute to indicate whether this item is selected by default. Radio buttons that have the same value for the name attribute are in the same "radio button group"; only one radio button in a group can be selected at a time.
range: HTML5 A control for entering a number whose exact value is not important. This type control uses the following default values if the corresponding attributes are not specified:
min: 0
max: 100
value: min + (max-min)/2, or min if max is less than min
step: 1
reset: A button that resets the contents of the form to default values.
search: HTML5 A single-line text field for entering search strings; line-breaks are automatically removed from the input value.
submit: A button that submits the form.
tel: HTML5 A control for entering a telephone number; line-breaks are automatically removed from the input value, but no other syntax is enforced. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
text: A single-line text field; line-breaks are automatically removed from the input value.
time: HTML5 A control for entering a time value with no time zone.
url: HTML5 A field for editing a URL. The input value is validated to contain either the empty string or a valid absolute URL before submitting. Line-breaks and leading or trailing whitespace are automatically removed from the input value. You can use attributes such as pattern and maxlength to restrict values entered in the control. The :valid and :invalid CSS pseudo-classes are applied as appropriate.
week: HTML5 A control for entering a date consisting of a week-year number and a week number with no time zone.


## ``<fieldset>``

element is used to group several controls as well as labels (<label>) within a web form.

## ``<legend>``

represents a caption for the content of its parent <fieldset>.

  * _parents_: ``<fieldset>``
  * _content_: Phrasing content.
  * _display_: `block`, `inline`


###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
[2](http://www.techrepublic.com/article/basic-html-rules/)
