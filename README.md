# 🏋️ MERN Gym Workout Tracker

A full-stack **Gym Workout Tracker Web App** built using the MERN Stack.
Users can register, login, and track their daily workouts (reps, load, exercises).
This project is built for learning full-stack development and as a college portfolio project.

---

## 🌐 Live Demo

🔗 https://mern-gym-app-1.onrender.com

---

## 🚀 Tech Stack

### Frontend

* React.js (Vite)
* Context API
* React Router
* CSS (Responsive UI)

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* REST API

---

## ✨ Features

### 🔐 Authentication

* User Signup
* User Login
* JWT based authentication
* Protected routes
* Logout system

### 🏋️ Workout Management

* Add workout (title, load, reps)
* Delete workout
* View all workouts
* User-specific workouts
* Real-time UI update

### 🎨 UI Features

* Fully responsive
* Modern gradient UI
* Mobile friendly design
* Clean form validation

---

## 📁 Project Structure

```
MERN_gym_app/
│
├── frontend/
│   ├── component/
│   ├── context/
│   ├── hook/
│   ├── pages/
│   ├── public/
│   └── src/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/hrishikesh23-152-cloud/MERN_gym_app.git
cd MERN_gym_app
```

---

### 2️⃣ Backend Setup

```
cd backend
npm install
```

Create `.env` file inside backend:

```
PORT=4000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

Run backend:

```
npm run dev
```

---

### 3️⃣ Frontend Setup

Open new terminal:

```
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

Backend runs on:

```
http://localhost:4000
```

---

## 🔐 Environment Variables

Create `.env` in backend and never upload to GitHub.

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
PORT=4000
```

---

## 🧠 Learning Outcomes

* Full Stack MERN development
* JWT authentication
* REST API creation
* MongoDB & Mongoose
* React hooks & context API
* Protected routes
* Deployment on Render

---

## 🚀 Future Improvements

* Edit workout feature
* Profile page
* Dark/Light theme
* Admin dashboard
* Progress charts
* Payment integration

---

## 👨‍💻 Author

**Hrishikesh Bharadwaj**
MERN Stack Developer

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
