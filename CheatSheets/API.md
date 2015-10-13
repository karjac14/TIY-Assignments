# [GitHub API](https://developer.github.com/v3/)

## [Authentication](https://developer.github.com/v3/#authentication)

> Do I need to authenticate?

Not really.  But by authenticating, developers can access more data.

> What can I do with an unauthenticated request?

Requests that require authentication will return 404 Not Found, instead of 403 Forbidden, in some places. This is to prevent the accidental leakage of private repositories to unauthorized users.

> What _can't_ I do with an unauthenticated request?

We can make 60 requests per hour without authenticating.

> How can I authenticate my request?

1.  Basic Authentication
```
$ curl -u "username" https://api.github.com
```
2.  OAuth2 Token (sent in a header)
```
$ curl -H "Authorization: token OAUTH-TOKEN" https://api.github.com
```
3.  OAuth2 Token (sent as a parameter)
```
$ curl https://api.github.com/?access_token=OAUTH-TOKEN
```

## [Users](https://developer.github.com/v3/users/)

> How do I ask the API for the profile information for a specific user?

```
GET /users/:username
```
. . .


###> What are the endpoints for fetching...
		◦	the profile data for a user?
		```
		- URL: https://api.github.com/users/USERNAME
		```
		◦	the organizations a user belongs to?
		```
		- URL: https://api.github.com/users/USERNAME/orgs
		```
		◦	the repositories a user has created?
		```
		- URL: https://api.github.com/users/USERNAME/repos
		```
		◦	a filtered list of repositories?
		```
		https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}
		where in we change the last part according to the required filters
		```
		◦	a sorted list of repositories?
		```
		https://api.github.com/search/repositories?q={query}{sort}
		where in we change the last part according to the required filters
		```
		◦	public events for a user?
		```
		- URL: https://api.github.com/users/USERNAME/events/public
		```
###> When fetching public events for a user...
		◦	How many results are returned by default?
		```
		- The fixed page size is 30 items. Fetching up to ten pages is supported, for a total of 300 events.
		```
		◦	What limitations exist on fetching more results?
		```
		- Only events created within the past 90 days will be included in timelines. Events older than 90 days will not be included (even if the total number of events in the timeline is less than 300).
		```
		◦	What is the basic structure of the results?
		◦	What fields are included in each result?
		◦	What are the data types for each field?
		◦	What are some of the different values for the type field?


### >How can I use the Github API to...
				◦	get all the comments for a particular issue?
					```
					GET /user/issues  filter = comments
					```
				◦	add a comment to an issue?
				```
					POST /repos/:owner/:repo/issues/:number/comments
				```
				
### >How can I use the jQuery API to...
				◦	get the HTML contents of an element?
				```
				.html()
				```
				◦	create a new HTML element?
				```
				$("p").append("Some appended text.");
				```
				
				◦	add an HTML element to the page?
### >How can I use the Lodash API to...
				◦	replace placeholders with values from an object?
				
				◦	repeat code for every item of an array
				```
				.forEach(collection, [iteratee=_.identity], [thisArg])
				```



