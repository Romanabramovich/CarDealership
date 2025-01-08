Car Dealership CRUD Web App

This project is a CRUD (Create, Read, Update, Delete) web application for managing a car dealership's inventory. It enables users to perform various operations such as adding, viewing, editing, and deleting cars in a MongoDB database. The app is built using Node.js, Express.js, Mongoose, EJS (Embedded JavaScript Templates), and styled with CSS.

Features

Home Page

Links to all the main functionalities of the app.

Provides navigation buttons to Add, Edit, Find, Delete, and View Cars.

Add a Car

Form to add a new car to the database with fields for:

Make

Model

Price

Year

Prevents duplicate entries by checking the database for existing cars.

Find a Car

Search for cars by filtering based on:

Make

Model

Year

Displays results dynamically in a styled table.

Validates that at least one filter is selected.

View All Cars

Displays a complete list of cars in the database.

Includes a scrollable, paginated table for better readability.

Edit a Car

Allows users to modify details of a car, such as:

Make

Model

Price

Year

Ensures that changes are saved and updated in the database.

Delete a Car

Form to delete a car based on Make, Model, and Year.

Confirms that the car exists before deletion.

Installation and Setup

Clone the Repository:

git clone https://github.com/your-repo/car-dealership-crud.git
cd car-dealership-crud

Install Dependencies:

npm install

Set Up MongoDB:

Ensure MongoDB is installed and running locally.

Create a database named CarDealership.

Run the App:

node server.js

The app will be accessible at http://localhost:3000.

Project Structure

car-dealership/
├── backend/
│   ├── crud-operations/
│   │   └── crud.js
│   ├── models/
│   │   └── Car.js
│
├── frontend/
│   ├── forms/
│   │   ├── addCar.ejs
│   │   ├── editCar.ejs
│   │   ├── deleteCar.ejs
│   │   ├── findCar.ejs
│   │   └── viewCars.ejs
│   ├── styles/
│   │   └── styles.css
│   ├── views/
│
├── server.js
└── package.json

Technologies Used

Node.js: Backend runtime environment.

Express.js: Web framework for handling routes and middleware.

MongoDB: Database to store car details.

Mongoose: ODM for MongoDB to define schemas and query data.

EJS: Template engine for dynamic HTML rendering.

CSS: Styling for a clean, user-friendly interface.

Future Improvements

Authentication:

Add user login and role-based access (e.g., admin, staff).

Pagination:

Implement pagination for View All Cars to handle large datasets more efficiently.

Sorting and Filtering:

Allow sorting cars by price, year, etc., in the View All Cars table.

Deployment:

Host the app on platforms like Heroku or Vercel.

License

This project is licensed under the MIT License.

