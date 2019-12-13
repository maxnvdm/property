# Property 24 Real Estate App
This project is a team effort at creating a property 24 application using the React, Express, Node JS, and MongoDB (MERN Stack).

## Getting Started
The following section explains how to make use of the different modules.

### Backend Instructions
To run the backend, run npm install and then node server in the backend folder. At the moment the backend only provides an API for interacting with the database. This api works as follows:
To get a list of all properties and their info from the database, make a GET request to localhost:4000/api. Note the ID field associated with the property is used in future requests to select specific properties.
To add a new property to the database, make a POST request to localhost:4000/api with the body of the request containing a JSON with the properties specifications, for example:
```javascript
{
    "name":"2 Bedroom Apartment",
    "address":"221B Baker Street",
    "price":"R3,500,000",
    "description":"An apartment fit for a detective."
}
```
To edit a property, make a PUT request to localhost:4000/api/propertyID, where propertyID is the ID of the property in the database and can be found when retrieving a list of all the properties. This PUT request should contain a JSON with the field to be updated and the updated value, the following JSON example would be enough to update the name field of the specified property.
```javascript
{
    "name":"5 Bedroom Apartment",
}
```
To delete a property, make a DELETE request to localhost:4000/api/propertyID, where propertyID is the ID of the property to be deleted.
To obtain the information for a single property, make a GET request to localhost:4000/api/propertyID. 