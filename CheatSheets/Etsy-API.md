# [Etsy API](https://www.etsy.com/developers/documentation)

###How do I make API requests?
	####What is the base URL for all requests?
	URL: `https://openapi.etsy.com/v2`

	####Are there any headers or query parameters required?
	Many API methods take one or more parameters, either as query parameters of the URL itself, or as POST parameters. All listed [here](https://www.etsy.com/images/apps/documentation/anchor.gif)
	
	####What kind of response should I expect?
	JSON Data and JSONP.
###How does the API handle authentication?
	####Do I need to authenticate? with user credentials?
	The Etsy API requires an application key that is provided during app registration. The key identifies your application to the Etsy web service, and is used to track overall call usage. It's passed using the standard api_key parameter.

	For write access and for accessing private user data, an OAuth access token is required. Your application key is required to start the OAuth authentication process.

	####What can I do with an unauthenticated request?
	Using public (api key-based) authentication, clients are allowed 10,000 requests per 24-hour period, with a limit of 10 queries per second. Etsy use a progressive rate limit structure, where a 24 hour period is chunked into 12 two-hour blocks.

	####How can I authenticate my request? (what methods)
	Etsy API uses OAuth 1.0 to give developers access to an Etsy member's private account data
	
###What Resource in the API represents...
	####an individual product?
	[Listing](https://www.etsy.com/developers/documentation/reference/listing)
	####a group or collection of products?
	[Taxonomy](https://www.etsy.com/developers/documentation/reference/taxonomy)
	####images associated with a product?
	[ListingImage](https://www.etsy.com/developers/documentation/reference/listingimage)
	####sizes and colors for a product?
	[Style](https://www.etsy.com/developers/documentation/reference/style)
	
###What actions and endpoints exist for each of these Resources?
###What parameters do each endpoint require or accept?

###What fields are returned for each Resource, specifically:
	####an individual product?
	####a group or collection of products?

###What additional fields can be requested for each?

