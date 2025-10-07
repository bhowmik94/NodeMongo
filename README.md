# Node.js + Express + MongoDB + JWT Auth

[![Node.js CI](https://github.com/bhowmik94/NodeMongo/actions/workflows/ci.yml/badge.svg)](https://github.com/bhowmik94/NodeMongo/actions/workflows/ci.yml)

A simple backend for managing posts/notes by individual users. Contains user authentication using **JWT**, connected to **MongoDB Atlas**. Includes registration, login, and a protected route. 

**Big plans** for the future is to add multi-role acess control with a super-admin, who can view and manage the existing admins/users.

---

## ✅ Tech Stack
- Node.js  
- Express  
- MongoDB Atlas (Mongoose)  
- JWT (jsonwebtoken)  
- bcryptjs  
- dotenv  

---

## ✅ Setup

### 1. Clone & Install
```bash
git clone <your-repo-url>
cd my-backend
npm install
```
### 2. Create .env

MONGO_URI=mongodb+srv://<USERNAME>:<PASSWORD>@<CLUSTER_NAME>.mongodb.net/<DB_NAME>
JWT_SECRET=supersecretkey
PORT=5000

### 3. Run

npm run dev
