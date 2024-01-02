# Authintication_URL_Backend_Development


This project is a simple Authintication_URL_Backend_Development  with user authentication. Users can sign up, log in, and generate shortened URLs.


Install dependencies:
# npm install

Start the server:
# npm start
The server will run on http://localhost:8080.

**Endpoints**:-
User #Signup
Endpoint: **POST /user/signup**
Description: Register a new user.
Request Body:
          
            {
            "userName": "your_username",
            "password": "your_password"
            }
           
User #Login
Endpoint: **POST /user/login**
Description: Authenticate and log in a user.
Request Body:

            {
            "userName": "your_username",
            "password": "your_password"
            }


**ONLY AFTER USER SIGNUP AND LOGIN THEN BLOW ENDPOINT IS ACCESSIBLE**

This is a simple Todo API with basic CRUD operations.

## Endpoints

### GET /todo/get
Description: GET all todo list


### POST /todo/add
Description: Add new todo list
Request Body:

            {
                "name":"Name",
                "city":"kolkata"
            }

### PATCH /todo/edit/:id

Description: Edits an existing todo item by ID.
 
Request Body:

            {
                "name":"Name",
                "city":"kolkata"
            }


### DELETE /todo/delete/:id

Description: Deletes a todo item by ID.


# Sign up for a new user using the /user/signup endpoint.
# Log in using the /user/login endpoint.
# GET: http://localhost:8080/todo/get
# POST: http://localhost:8080/todo/add (with JSON payload)
# PATCH: http://localhost:8080/todo/edit/1 (with JSON payload)
# DELETE: http://localhost:8080/todo/delete/1
