# 🧩 Node.js + Express + MongoDB + JWT Auth

[![Node.js CI](https://github.com/bhowmik94/NodeMongo/actions/workflows/ci.yml/badge.svg)](https://github.com/bhowmik94/NodeMongo/actions/workflows/ci.yml)

A simple backend for managing posts or notes with user authentication using **JWT** and **MongoDB Atlas**.  
Includes registration, login, and protected routes.  

💡 **Future goals:**
- Multi-role access control (admin, super-admin, user)
- API documentation via Swagger
- Docker setup for containerized deployment

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB Atlas** (Mongoose ODM)
- **JWT (jsonwebtoken)** for authentication
- **bcryptjs** for password hashing
- **dotenv** for environment variables
- **Jest** or **Vitest** (for testing)
- **GitHub Actions** (for CI)

---

## 🚀 Setup Guide

### 1. Clone & Install

```bash
git clone https://github.com/bhowmik94/NodeMongo.git
cd NodeMongo
npm install
```

### 2. Environment Variables
Create a .env file in the root directory with the following keys:

```bash
MONGO_URI="your-mongo-connection-string-here"
```

### 3. Example .env for Forked Users
```bash
MONGO_URI=mongodb+srv://username:password@clustername.mongodb.net/testdb
JWT_SECRET=changeme123
PORT=5000
```

### 4. Running the Server

Start the development server with:
```bash
Start the development server with:
```

Server runs at:
```bash
http://localhost:5000
```

---

## 🧪 Running Tests

Run tests with:
```bash
npm test
```
---
## ⚙️ Continuous Integration (CI)

This project includes a GitHub Actions workflow (.github/workflows/ci.yml)
that automatically:

- Installs dependencies

- Runs backend tests

- Verifies code quality

You can view build results under your repo’s Actions tab.
---

## 💡 Contributing
Pull requests are welcome!
If you fork the repo:

1. Duplicate .env.example → .env

1. Add your MongoDB credentials

1. Run locally and test

1. Submit a PR

---

## 📜 License

Licensed under the MIT License.
You’re free to use, modify, and distribute this project.
---

## ⚡ Summary

✅ JWT Authentication
✅ CRUD for posts
✅ CI with GitHub Actions
✅ MongoDB Atlas Ready
✅ Future-ready (Admin roles, Swagger, Docker)


