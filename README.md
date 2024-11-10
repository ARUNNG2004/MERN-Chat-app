# MERN Chat App

A real-time chat application built with the **MERN Stack** (MongoDB, Express, React, Node.js). This application allows users to communicate instantly in various chat rooms or direct messages. With robust security measures, the app ensures a smooth and secure chatting experience.

## Features

- **Real-time Messaging**: Instant messaging using WebSocket (e.g., Socket.IO) for live updates.
- **User Authentication**: Secure user signup/login with hashed passwords (e.g., bcrypt) and JWT for session management.
- **Chat Rooms and Private Chats**: Create public rooms or have private conversations.
- **Responsive UI**: Optimized for desktop and mobile using React and CSS frameworks.
- **Message History**: Stores chat history for users to access previous messages.

## Tech Stack

- **MongoDB**: Database for storing user data and chat history.
- **Express.js**: Backend framework to build APIs and handle server logic.
- **React.js**: Frontend library for building the user interface.
- **Node.js**: JavaScript runtime for the server-side environment.
- **Socket.IO**: Real-time bidirectional event-based communication for chat.
- **JWT (JSON Web Token)**: Authentication and authorization for secure sessions.
- **bcrypt**: Hashing passwords for secure storage.

## Installation

To run the chat app locally, follow these steps:

### Prerequisites

- **Node.js** and **npm**
- **MongoDB** instance (local or cloud, e.g., MongoDB Atlas)

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/mern-chat-app.git
    cd mern-chat-app
    ```

2. Install dependencies:
    ```bash
    # In the root directory for backend dependencies
    npm install
    # Navigate to client directory for frontend dependencies
    cd client
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your configurations:
    ```env
    MONGODB_URI=your-mongo-db-uri
    JWT_SECRET=your-secret-key
    SOCKET_PORT=port-number
    ```

4. Start the application:
    ```bash
    # Start the backend server
    npm run server

    # Start the frontend server
    cd client
    npm start
    ```

The app will be available at `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Folder Structure

```plaintext
mern-chat-app/
├── client/                # React frontend
│   ├── public/            # Public assets
│   └── src/               # Source files
│       ├── components/    # Reusable UI components
│       ├── pages/         # Application pages
│       └── services/      # API services
├── server/                # Node & Express backend
│   ├── config/            # Database and environment configs
│   ├── controllers/       # Route handling logic
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
└── .env                   # Environment variables
└── package.json           # Project dependencies
