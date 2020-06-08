

# Welcome to Notes RESTful API



## API Reference
The API is organized around REST. My API has predictable, resource­-oriented URLs, and uses HTTP response codes to indicate API errors. I support cross­origin resource sharing, allowing you to interact securely with my API from a clientside web application. JSON is returned by all API responses, including errors.

API Root:
`
http//localhost:3000
`

##### Till now I've not deployed it.
##### You can use [npm start] in your terminal with the project directory as your active directory, to run the server (http//localhost:3000) 
##### The Mongodb database is open to all IP addresses.


## HTTP status code summary:
Code Explanation

    200 ­ OK |Everything worked as expected.

    400 ­ Bad Request |The request was unacceptable, often due to missing a required parameter.

    404 ­ Not Found |The requested resource doesn’t exist.

    500­ Server Errors |Something went wrong on the API’s end.

-------------------------------------------------------------------------------------------

## Endpoints:
```
/notes/
```
-------------------------------------------------------------------------------------------

## Useful requests:

### Get all notes

Request
```
GET /notes/
```

Response
```
{
    "count": 20,
    "notes": [
        {
            "name": "testlast",
            "_id": "5ede7bb3dbbaaab2a8cc0498",
            "content": "some ideal description",
            "request": {
                "type": "GET, UPDATE, DELETE",
                "url": "http://localhost:3000/notes/5ede7bb3dbbaaab2a8cc0498"
            }
        },
        {
            "name": "latest",
            "_id": "5ede7bcddbbaaab2a8cc0499",
            "content": "some even better description",
            "request": {
                "type": "GET, UPDATE, DELETE",
                "url": "http://localhost:3000/notes/5ede7bcddbbaaab2a8cc0499"
            }
        },
        {
            "name": "Hey There!!",
            "_id": "5ede7becdbbaaab2a8cc049a",
            "content": "Today I have to deploy my website over heroku",
            "request": {
                "type": "GET, UPDATE, DELETE",
                "url": "http://localhost:3000/notes/5ede7becdbbaaab2a8cc049a"
            }
        },
        //Several other notes here
    ]
}
```

### Post a note

Request
```
POST /notes/
```
Body (JSON)
```
{
	"name" : "Example Note!!",
	"content" : "Sample Text - Today I have to deploy my website over heroku."
}
```

If `name` is not mentioned in the request body, the `name` will automatically be `Untitled`. In other words, default `name` is `Untitled`.

Similarly, if `content` is not mentioned in the request body, the `content` will automatically be ` ` (""). In other words, default `content` is ` `("").

Response
```
{
    "message": "New note made",
    "createdNote": {
        "name": "Example Note!!",
        "content": "Sample Text - Today I have to deploy my website over heroku.",
        "_id": "5ede7fd0dbbaaab2a8cc049b",
        "request": {
            "type": "GET, UPDATE, DELETE",
            "url": "http://localhost:3000/notes/5ede7fd0dbbaaab2a8cc049b"
        }
    }
}
```

### Get a specific note

Request
```
GET /notes/{_id}
```
Example
```
GET /notes/5ede7fd0dbbaaab2a8cc049b
``` 

Response
```
{
    "name": "Example Note!!",
    "content": "Sample Text - Today I have to deploy my website over heroku.",
    "_id": "5ede7fd0dbbaaab2a8cc049b",
    "request": {
        "type": "GET, UPDATE, DELETE",
        "url": "http://localhost:3000/notes/5ede7fd0dbbaaab2a8cc049b"
    }
}
```
