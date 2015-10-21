#  Reading the unstoppable APIs

###[Firebase Rest API](https://www.firebase.com/docs/rest/)

#####What operations does the Firebase REST API support?
GET - Reading Data,
Data from our Firebase database can be read by issuing an `HTTP GET` request to an endpoint.
PUT- To write data to a Firebase
POST - Pushing Data,
To accomplish the equivalent of the JavaScript `push()` method
PATCH - Updating Data,
We can update specific children at a location without overwriting existing data using a `PATCH` request. Named children in the data being written with PATCH will be overwritten, but omitted children will not be deleted. This is equivalent to the JavaScript update() function.
DELETE - Removing Data
We can delete data with a `DELETE` request.

#####Do I need to authenticate with Firebase to read or create data?
Firebase gives you full control over user authentication by allowing you to authenticate users using secure JSON Web Tokens, or JWTs. We provide helper libraries in several languages for generating JWTs

Supported by all request types. Authenticates this request to allow access to data protected by Security and Firebase Rules. The argument can either be your Firebase app's secret or an authentication token.

#####What format does Firebase expect data to be in?

Language	Libraries
Clojure	talka by Cloudfuji
Go	Go Firebase by Cosmin Nicolaescu and Justin Tulloss
Go	Firego by Steven Berlanga and Tim Gossett
Java	firebase4j by Brandon Gresham
Perl	Firebase-Perl by Kiran Kumar and JT Smith
PHP	firebase-php by Tamas Kalman
Python	python-firebase by Özgür Vatansever
python-firebase by Michael Huynh
Ruby	firebase-ruby by Oscar Del Ben
BigBertha by Fernand Galiana
rest-firebase by Codementor


###[Restangular](https://github.com/mgonto/restangular)

#####How do I configure a REST-ful API like Github?
By appliying **properties**, Restangular comes with defaults for all of its properties but you can configure them. So, if you don't need to configure something, there's no need to add the configuration. You can set all these configurations in RestangularProvider or Restangular service to change the global configuration or you can use the withConfig method in Restangular service to create a new Restangular service with some scoped configuration.
#####How would I request a list of...
#####...Repos for the class Org?

#####...Issues for the class Repo?
#####...Issues for a specific Milestone?

###[ng-Router](https://docs.angularjs.org/api/ngRoute)

#####How do I define...
#####...a route for my application with ngRouter?
`<script src="angular.js">`
`<script src="angular-route.js">`
#####...dynamic pieces (params) to routes?
#####...the template to load for a route?
ngView is a directive that complements the $route service by including the rendered template of the current route into the main layout (index.html) file.
#####...the controller to trigger for a route?
#####How do I retrieve...
#####...the params from a route in a controller?
#####...the controller for a route in the view?
