//---------------------------------------//

Welcome to Notes RESTful API

//---------------------------------------//

API Reference
The API is organized around REST. My API has predictable, resource­-oriented URLs, and uses HTTP response codes to indicate API errors. I support cross­origin resource sharing, allowing you to interact securely with my API from a clientside web application. JSON is returned by all API responses, including errors.

API Root:
http//localhost:3000

//Till now I've not deployed it.
//You can use [npm start] in your terminal with the project directory
//as your active directory. The Mongodb database is open to all IP
//addresses.
-------------------------------------------------------------------------------------------

HTTP status code summary:
Code Explanation

    200 ­ OK |Everything worked as expected.

    400 ­ Bad Request |The request was unacceptable, often due to missing a required parameter.

    404 ­ Not Found |The requested resource doesn’t exist.

    500­ Server Errors |Something went wrong on the API’s end.

-------------------------------------------------------------------------------------------

Endpoints:
/notes/

-------------------------------------------------------------------------------------------

Useful methods:

GET_NOTES:
This method will return an object with following propreties.
Keys: count, notes
Values: [returns an integer displaying the number of existing notes], [returns an object which will be]