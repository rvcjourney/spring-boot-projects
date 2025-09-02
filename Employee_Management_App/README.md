# 👨‍💼 Employee Management Web App

A **full-stack Employee Management System** with complete **CRUD operations** (Create, Read, Update, Delete).  

The project is built using **React + Vite** for the frontend, **Spring Boot** for the backend, and **MySQL** as the database.  

---

## 🛠️ Tech Stack

- **Frontend**: React.js + Vite (IDE: VS Code)  
- **Backend**: Java 21 + Spring Boot (IDE: IntelliJ IDEA Community)  
- **Database**: MySQL  

---

## 🏗️ System Architecture

flowchart TD
    A[User] -->|Browser| B[React + Vite Frontend]
    B -->|REST API (JSON)| C[Spring Boot Backend]
    C -->|JDBC| D[MySQL Database]
    D --> C
    C --> B
    B --> A


The user interacts with the React frontend.

The frontend communicates with the Spring Boot backend through REST APIs.

The backend connects to the MySQL database using JDBC.

🗄️ Database Setup

Before running the application, create a MySQL database:

CREATE DATABASE ems;


(ems stands for Employee Management System)

📦 Installation & Setup
1️⃣ Download the Project

Download the zip file: Employee_Management_App.zip

Extract it to a known location.

You will see two folders:

B-Employee   # Backend (Spring Boot)
f-employee   # Frontend (React + Vite)

2️⃣ Backend Setup (Spring Boot)

Open the B-Employee folder in IntelliJ IDEA.

Ensure you have:

Java JDK 21 installed

MySQL Workbench/CLI configured

Open this file in IntelliJ:

B-Employee/src/main/java/com/example/B_Employee/BEmployeeApplication.java


Make sure the ems database exists in MySQL.

mysql> create database ems;


Run the application by clicking ▶️ in IntelliJ (on BEmployeeApplication.java).

3️⃣ Frontend Setup (React + Vite)

Open the f-employee folder in VS Code.

Make sure Node.js is installed.

Run the following command in the terminal:

npm install
npm run dev


The app will start, and you can open it in your browser (usually on http://localhost:5173).

▶️ Running the App

Backend (Spring Boot) → Runs on port 8080

Frontend (React + Vite) → Runs on port 5173

Make sure both are running to use the full Employee Management System.

📸 Features

➕ Add new employees

📋 View employees list

✏️ Update employee details

❌ Delete employees

🔗 Full integration between frontend ↔ backend ↔ database

❓ Any Questions?

If you face issues while setting up or running the project, feel free to raise an issue or contact me. 🚀

