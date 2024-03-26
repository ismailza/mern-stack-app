# MERN Stack Student Management Application

This project is a full-stack Student Management Application built using the MERN stack (MongoDB, Express, React, and Node.js). It allows users to manage student data, including adding, editing, and deleting student records.

For the front end, the application uses React with functional components and hooks. The application uses React Router for routing and Axios for making HTTP requests to the back end.

The back end is build with Node.js and Express using the MVC pattern. The application uses Mongoose to interact with the MongoDB database.

The application is dockerized and can be run using Docker Compose.

## Features

- **User Authentication:** Secure login and registration functionality.
- **CRUD Operations:** Create, read, update, and delete student records.
- **Responsive Design:** A user-friendly interface that adapts to various screen sizes.
- **Docker Integration:** Easy setup and deployment with Docker and Docker Compose.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)

### Installing

Clone the repository:

  ```bash
  git clone https://github.com/ismailza/mern-stack-app.git
  cd mern-stack-app
  ```

### Using Docker Compose

To build and run the application with Docker Compose:
  ```bash
  docker-compose up --build
  ```

This command will start the MongoDB, backend, and frontend services. The application will be accessible at http://localhost:5173.

### Manual Setup

- `Backend`:

Navigate to the backend directory, install dependencies, and start the server:

  ```bash
  cd backend
  npm install
  npm start
  ```

The backend server will start on http://localhost:3000.

- `Frontend`

In a new terminal, navigate to the frontend directory, install dependencies, and start the React application:

  ```bash
  cd frontend
  npm install
  npm start
  ```

The frontend will be accessible at http://localhost:5173.

## Usage

After starting the application, you can register a new user account or log in with existing credentials. Once authenticated, you can perform CRUD operations on student records.

## Built With
- [MongoDB](https://www.mongodb.com/) - The database
- [Express](https://expressjs.com/) - The web framework for Node.js
- [React](https://reactjs.org/) - The front-end library
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Docker](https://www.docker.com/) - Containerization platform

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
