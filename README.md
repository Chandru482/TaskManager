**Full-Stack To-Do List Application**

This is a full-stack To-Do List application built using Spring Boot for the back-end and JavaScript for the front-end.

Features:
- Add, update, and delete to-do items.
- Toggle between completed and pending tasks.
- Stored in a MySQL database.

Backend (Spring Boot):
- Technology : Java, Spring Boot, MySQL
  Endpoints :
- `GET /api/todos`: Fetch all to-do items.
- `GET /api/todos/{id}`: Fetch a single to-do item by ID.
- `POST /api/todos`: Add a new to-do item.
- `PUT /api/todos/{id}`: Update a to-do item.
- `DELETE /api/todos/{id}`: Delete a to-do item.

Setup Backend
1. Clone the repository.
2. Set up MySQL and create a database `todolist_db`.
3. Configure the `application.properties` file with your MySQL credentials.
4. Run the Spring Boot application.

Frontend (JavaScript)
- Technology : HTML, CSS, JavaScript
Setup : Open `index.html` in a browser to use the to-do list app.

Run the Application
1. Ensure MySQL is running with the database set up.
2. Run the backend Spring Boot application (`TodoApplication.java`).
3. Open `index.html` in a browser to interact with the to-do list.


