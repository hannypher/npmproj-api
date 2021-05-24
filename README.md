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