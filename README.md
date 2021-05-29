## TODO QUEENS API
-a simple API for our restuarant reviews app
-Application Programming Interface (API)

#### Functionality
-fetchReviews => GET
-fetchSingleReview => GET/:id
-addReviews => POST
-makeChanges to a Review => PUT
-deleteReview => DELETE


Request methods:
-POST => to create something and send it to the server
-GET => to receive something from the server
-PUT => to update or make changes to something already existing on the server
-DELETE => to remove something from the server

#### Expressjs Architecture
-express operates on an MVC architecture
-MVC(Model, View, Controller)
-Model => the data storage
-Views handle requests from clients(browser, mobile app, standalone desktop apps, tv boxes, watches) ===Devices accessing the API
-Controller handles the business logic (full brains of the api). when a request id sent, the controller calls on the model to do something.
a controller ends up being a middle man between the view and the model


CRUD (operations) and HTTP request equivalents
-C => Create, to create or POST something
-R => READ, GET something
-U => Update something, (PUT, PATCH)
-D => Delete, DELETE something from the server


#### How to Update
-Find the item
-Make the change
-Save the change if the item exists
-If the item doesn't exist, notify the user

#### how to delete
-check if there are items
-find a specific item
-delete the item
-show a message or return the data that doesn't have that deleted item


## traditional databases (sql databases)
-always have a pre-defined structure (how data is supposed to look)
{
    primary key id int,
    fullName char defined_length
}

## nosql databases
-store data without a pre-defined structure
{
    fullName: 'sdsdsdd',
    age: 34,
    address: {
        poBox:2324
    }
}
{
      fullName: 'sdsdsdd',
    age: 34,
    address: {
    pronvince: 'central'
    }
}

[read more](https://docs.mongodb.com/)
[read more on mongoose]()

# Schema
-A structure of how the data to be stored is formulated