# User Management System - Frontend

This is the frontend application for the User Management System. It provides a user interface to interact with the backend API for managing users.

[Live Site](https://project1-f2dce.web.app) 
- It may take some time to get the backend server up and run ( about 20 - 30 sec ).

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine.

## Getting Started

Follow the steps below to set up and run the frontend application:

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/Mohansundark/user-management-frontend.git
```

### 2. Navigate to the Project Directory

Go to the project directory:

```bash
cd user-management-frontend
```

### 3. Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### 4. Set Up Environment Variables

Create a `.env` file in the root directory of the project and add the backend URL from the backend repository [user-management-backend](https://github.com/Mohansundark/user-management-backend).

```bash
REACT_APP_API_URL=<your-backend-url>
```

Replace `<your-backend-url>` with the actual URL of your backend service.

### 5. Start the Development Server

Run the following command to start the development server:

```bash
npm start
```

The application will be accessible at `http://localhost:3000`.

## Project Structure

The main components of the application are:

- `Home`: The homepage of the application.
- `Login`: The login page for user authentication.
- `Register`: The registration page for new users.
- `Profile`: The user profile page.
- `ProfileEdit`: The profile edit page.
- `UserDirectory`: A directory listing all users.

## Routes

The application uses `react-router-dom` for routing. The available routes are:

- `/`: Home page.
- `/login`: Login page.
- `/register`: Registration page.
- `/profile`: Profile page.
- `/profile/edit`: Profile edit page.
- `/users`: User directory.
- `*`: Redirects to the home page for any undefined routes.

## Usage

Once the application is running, you can use the user interface to perform various user management operations such as creating , displaying and updating users.
