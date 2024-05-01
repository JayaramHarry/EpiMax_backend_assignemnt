# EpiMax Backend Assignment

This is a backend project for managing tasks and user authentication. It provides RESTful API endpoints for CRUD operations on tasks and user authentication using JSON Web Tokens (JWT). The project is built using Node.js and Express.js framework with SQLite as the database.

## Features

- **Task Management**: CRUD operations (Create, Read, Update, Delete) for tasks.
- **User Authentication**: Login and registration endpoints with JWT token-based authentication.
- **Authorization**: Role-based access control for certain actions (e.g., admin-only tasks).
- **Error Handling**: Graceful error handling for better user experience.

## Components

The project is organized into the following components:

- **Controllers**: Contains business logic for tasks and user authentication.
- **Middleware**: Includes middleware functions for authentication and authorization.
- **Routes**: Defines API endpoints for tasks and user authentication.
- **Database**: SQLite database file (`database.db`) for storing tasks and user data.

## Installation

1. Clone the repository:

```
git clone https://github.com/JayaramHarry/EpiMax_backend_assignemnt.git
```

2. Install dependencies:

```
cd epimax-backend-assignment
npm install
```

## Usage

1. Start the server:

```
node index.js

```

2. Use tools like Postman or cURL to interact with the API endpoints.
3. Register a user using the `/register` endpoint.
4. Login with the registered user using the `/login` endpoint to obtain a JWT token.
5. Use the token to access protected routes (e.g., CRUD operations for tasks).

## API Documentation

Refer to the API documentation for detailed information about available endpoints, request/response formats, and authentication requirements.



### Tasks Endpoints

#### Get All Tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.
- **Request:**
  - Headers:
    - `Authorization: Bearer <token>`
- **Response:**
  - Status Code: `200 OK`
  - Body:
    ```json
    [
      {
        "id": 1,
        "title": "Task 1",
        "description": "Description for Task 1",
        "status": "pending",
        "assignee_id": 1,
        "created_at": "2022-04-30T12:00:00Z",
        "updated_at": "2022-04-30T12:00:00Z"
      },
      {
        "id": 2,
        "title": "Task 2",
        "description": "Description for Task 2",
        "status": "completed",
        "assignee_id": 2,
        "created_at": "2022-04-30T12:00:00Z",
        "updated_at": "2022-04-30T12:00:00Z"
      }
    ]
    ```

#### Get Task by ID

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a specific task by ID.
- **Request:**
  - URL Parameters:
    - `id`: ID of the task
  - Headers:
    - `Authorization: Bearer <token>`
- **Response:**
  - Status Code: `200 OK` if task found, `404 Not Found` if task not found
  - Body (if found):
    ```json
    {
      "id": 1,
      "title": "Task 1",
      "description": "Description for Task 1",
      "status": "pending",
      "assignee_id": 1,
      "created_at": "2022-04-30T12:00:00Z",
      "updated_at": "2022-04-30T12:00:00Z"
    }
