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
