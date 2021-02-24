

# Welcome to Notes RESTful API



# API Reference
The API is organized around REST. My API has predictable, resource­-oriented URLs, and uses HTTP response codes to indicate API errors. I support cross­origin resource sharing, allowing you to interact securely with my API from a clientside web application. JSON is returned by all API responses, including errors.

API Root:
`
http//localhost:3000
`

##### Till now I've not deployed it.
##### You can use [npm start] in your terminal with the project directory as your active directory, to run the server (http//localhost:3000) 
##### My Mongodb database is open to all IP addresses.


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

### 1) Get all notes

#### Request
```
GET /notes/
```

##### Queries

`limit` | This query sets a limit to number of notes returned. In simpler words it allows client to set the maximum number of notes which can be returned. It should be an integer.

If the limit is not set, then it becomes 200. In other words, default value of `limit` is 200.

An example of expected `limit` query usage.
```
GET /notes/?limit=2
```

The response of the example with `limit` query
```
{
    "count": 2,
    "notes": [
        {
            "name": "Example with limit",
            "_id": "5eddffccad537944b06705ea",
            "content": "Hey there developer!",
            "request": {
                "type": "GET, UPDATE, DELETE",
                "url": "http://localhost:3000/notes/5eddffccad537944b06705ea"
            }
        },
        {
            "name": "Another example with limit query",
            "_id": "5eddfff5b1c0a52bb04f00e5",
            "content": "Oh did we just meet dev? >.<",
            "request": {
                "type": "GET, UPDATE, DELETE",
                "url": "http://localhost:3000/notes/5eddfff5b1c0a52bb04f00e5"
            }
        }
    ]
}
```


#### Response (response to `GET /notes/` (without any query))
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

### 2) Add a note

#### Request
```
POST /notes/
```
#### Body (JSON)
```
{
	"name" : "Example Note!!",
	"content" : "Sample Text - Today I have to deploy my website over heroku."
}
```

If `name` is not mentioned in the request body, the `name` will automatically be `Untitled`. In other words, default `name` is `Untitled`.

Similarly, if `content` is not mentioned in the request body, the `content` will automatically be ` ` (""). In other words, default `content` is ` `("").

#### Response
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

### 3) Get a specific note

#### Request
```
GET /notes/{_id}
```
An example of an ideal request
```
GET /notes/5ede7fd0dbbaaab2a8cc049b
``` 

#### Response
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

### 4) Modify a specific note

#### Request
```
PATCH /notes/{_id}
```
An example of an ideal request

```
PATCH /notes/5ede7fd0dbbaaab2a8cc049b
```

#### Body (JSON)

The body is expected to be an array of objects, each of the object(s) must contain two keys: 

First `propName` which specifies the property you wish to edit.

Second `value` which specifies the new value you want to give to the property mentioned in the `propName`.


##### It is okay if you only wish to edit just some properties instead of all. Only the properties you mention in your body will be overwritten.

An example of expected body (JSON):

```
[
	{"propName" : {the_property_you_want_to_edit}, "value" : the_value_you_want_to_give_to_it},
	{"propName" : {another_property_you_want_to_edit}, "value" : the_value_you_want_to_give_to_it}
]
```
##### Note: Till date, `propName` can be either `"name"` which specifies the name (or title) of your note or `"content"` which specifies the content or description of your note.


#### Response
```
{
    "message": "Note Updated",
    "updatedNote": {
        "name": "Example Note!!",
        "content": "Sample Text - Today I have to deploy my website over heroku.",
        "_id": "5ede7fd0dbbaaab2a8cc049b",
        "__v": 0
    },
    "request": {
        "type": "GET, UPDATE, DELETE",
        "url": "http://localhost:3000/notes/5ede7fd0dbbaaab2a8cc049b"
    }
}
``` 

### 5) Delete a note

#### Request

```
DELETE /notes/{_id}
```
An example of an ideal request
```
DELETE /notes/5ede7fd0dbbaaab2a8cc049b
``` 

#### Response

```
{
    "message": "Note deleted",
    "deletedNote": {
        "id": "5ede7fd0dbbaaab2a8cc049b"
    }
}
```
