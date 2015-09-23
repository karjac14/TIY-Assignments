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




###### Footnotes

[1](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Flow_content)
[2](http://www.techrepublic.com/article/basic-html-rules/)
