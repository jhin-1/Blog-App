# Blog App API

A robust RESTful API for a blogging platform, built with **Node.js**, **Express**, and **MySQL**. This project demonstrates a modular architecture for managing users and blog posts, providing a solid foundation for any blogging application.

## 🚀 Features

- **User Authentication**: Secure sign-up and login functionality.
- **User Profiles**: Retrieve detailed user profiles.
- **Blog Management**: Full CRUD (Create, Read, Update, Delete) operations for blog posts.
- **Advanced Querying**: 
  - Retrieve all blogs.
  - Get specific blog details.
  - Filter blogs by user.
- **Modular Architecture**: Codebase organized by features (Users, Blogs) for maintainability and scalability.

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) (v5.x)
- **Database**: [MySQL](https://www.mysql.com/)
- **Database Driver**: mysql2

## 🔌 API Endpoints

### 👤 Users Module

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/auth/sign-up` | Register a new user account |
| `POST` | `/auth/login` | Authenticate existing user |
| `GET` | `/profile/:ID` | Get user profile information |

### 📝 Blogs Module

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/all-blogs` | Retrieve a list of all blogs |
| `GET` | `/blog/:id` | Get details of a single blog |
| `GET` | `/user-blogs/:id` | Get all blogs written by a specific user |
| `POST` | `/add-blog` | Create a new blog post |
| `PATCH` | `/update-blog` | Update an existing blog post |
| `DELETE` | `/delete-blog/:id` | Delete a blog post |

## 📂 Project Structure

```bash
c:\blog-App\
├── src\
│   ├── database\       # Database connection setup
│   ├── moduels\        # Application modules
│   │   ├── blogs\      # Blog controller and services
│   │   └── users\      # User controller and services
│   └── ...
├── index.js            # Entry point of the application
└── package.json        # Dependencies and scripts
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/blog-app.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Database Configuration**
   - Ensure you have MySQL installed and running.
   - Create a database named `bolg_app`.
   - The application connects to `localhost` with user `root` (Configure in `src/database/connection.js` if needed).

4. **Run the Server**
   ```bash
   npm start
   ```
   The server will start listening on port **3000**.

## 👨‍💻 Author

Developed with ❤️ using Node.js and Express.
