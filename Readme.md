# 🎟️ MoodGO – AI Powered Ticket Booking Platform

MoodGO is an AI-powered ticket booking platform built using the MERN Stack.  
It allows users to explore events, book tickets, create their own events, and interact with an intelligent AI chatbot for real-time event assistance.

---

## 🚀 Features

### 🎫 Event Booking
- Browse upcoming events
- View event details (price, date, description, organizer)
- Book tickets securely
- Real-time availability updates

### 🧑‍💼 Authentication
- User registration and login
- JWT-based authentication
- Protected routes

### 🛠️ Event Creation
- Create and publish events
- Edit and delete events
- Add pricing, description, and event details

### 🤖 AI Chatbot Assistant
- AI-powered conversational chatbot
- Ask about event pricing and availability
- Get event details instantly
- Personalized recommendations

### ⚡ State Management
- Powered by TanStack Query
  - Server state management
  - API caching
  - Background refetching
  - Optimistic UI updates

---

## 🏗️ Tech Stack

### Frontend
- React.js
- TanStack Query
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### AI Integration
- AI API integration for chatbot functionality
- Natural language event query processing

---

## 📁 Project Structure

MoodGO/
│
├── client/        # React Frontend
├── server/        # Express Backend
├── models/        # MongoDB Schemas
├── routes/        # API Routes
├── controllers/   # Business Logic
└── config/        # Database & API Configurations

---

## 🔑 Environment Variables

Create a `.env` file inside the server folder:

PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_secret_key  
AI_API_KEY=your_ai_api_key  

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

git clone https://github.com/your-username/MoodGO.git  
cd MoodGO  

### 2. Install Dependencies

Backend:
cd server  
npm install  

Frontend:
cd client  
npm install  

### 3. Run the Application

Start Backend:
npm run dev  

Start Frontend:
npm start  

---

## 🧠 How AI Works in MoodGO

1. User sends a query through the chatbot.
2. Backend forwards the request to the AI API.
3. AI processes the event-related query.
4. The response is returned in conversational format.
5. Data is integrated with the event database for contextual replies.

---

## 📌 Future Improvements

- Online Payment Integration
- Admin Dashboard
- Location-based Event Filtering
- Booking History & Invoice System
- Personalized AI Recommendations
- Mobile App Version

---

## 🤝 Contributing

Contributions are welcome.  
Feel free to fork the repository and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Rishi Sahu  
Full Stack Developer | MERN Stack