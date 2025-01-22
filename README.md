# Car Dealership CRUD Web App

This project is a CRUD (Create, Read, Update, Delete) web application for managing a car dealership's inventory. It allows users to perform various operations such as adding, viewing, editing, and deleting cars in a MongoDB database.

## Features

### **Home Page**
- Links to all the main functionalities of the app.
- Navigation buttons for:
  - Adding cars
  - Editing cars
  - Finding cars
  - Deleting cars
  - Viewing all cars

### **Add a Car**
- Form to add a new car with fields for:
  - **Make**
  - **Model**
  - **Price**
  - **Year**
- Prevents duplicate entries by checking the database.

### **Find a Car**
- Search functionality with filters for:
  - **Make**
  - **Model**
  - **Year**
- Displays search results dynamically in a styled table.
- Validates that at least one filter is selected.

### **View All Cars**
- Displays a complete list of cars in the database.
- Includes a scrollable, paginated table for better readability.

### **Edit a Car**
- Allows users to update details of a car:
  - **Make**
  - **Model**
  - **Price**
  - **Year**
- Saves updates in the database.

### **Delete a Car**
- Form to delete a car based on:
  - **Make**
  - **Model**
  - **Year**
- Verifies car existence before deletion.

---

## Installation and Setup

### **Clone the Repository**
```bash
git clone https://github.com/your-repo/car-dealership-crud.git
cd car-dealership-crud
```

### **Install Dependencies**
```bash
npm install
```
### **Setup MongoDB**
 - Ensure MongoDB is installed and running locally
 - Create a database named CarDealership

### **Run the App**
```bash
node server.js
```
The app will be accessible at: http://localhost:3000


## Technologies Used
- Node.js: Backend runtime environment.
- Express.js: Web framework for handling routes and middleware.
- MongoDB: NoSQL database to store car details.
- Mongoose: ODM for defining schemas and querying data.
- EJS: Template engine for dynamic HTML rendering.
- CSS: For a clean and user-friendly interface.


## Next Steps
- Authentication:
    - Add user login and role-based access (e.g., admin, staff).
- Pagination:
    - Improve handling of large datasets in the "View All Cars" table.
- Sorting and Filtering:
    - Enable sorting by price, year, etc., in the "View All Cars" table.
- Deployment:
    - Host the app on platforms like Heroku or Vercel.
## License

[MIT](https://choosealicense.com/licenses/mit/)

