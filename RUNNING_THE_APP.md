# 🚀 Quick Start Guide - Home Automation Center

## Prerequisites
Make sure you have installed:
- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm (comes with Node.js)

## 📁 Project Structure
```
moive booking/
├── server/               # Backend (Express.js)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── package.json
│   ├── .env
│   └── server.js
├── client/              # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.js
│   ├── public/
│   └── package.json
└── package.json         # Root package.json
```

## 🔧 Setup Instructions

### Step 1: Install Backend Dependencies
```bash
cd server
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd ../client
npm install
```

### Step 3: Start MongoDB
Open a terminal and run:
```bash
mongod
```
(Keep this running in the background)

### Step 4: Start Backend Server
Open a NEW terminal in the `server` directory:
```bash
cd server
npm run dev
```
You should see: ✓ MongoDB Connected Successfully
And: 🚀 Server running on http://localhost:5000

### Step 5: Start Frontend Application
Open ANOTHER NEW terminal in the `client` directory:
```bash
cd client
npm start
```
The app will automatically open at http://localhost:3000

## 📋 Summary - 3 Terminals Required:
1. **Terminal 1**: MongoDB
   ```bash
   mongod
   ```

2. **Terminal 2**: Backend (from `/server`)
   ```bash
   npm run dev
   ```

3. **Terminal 3**: Frontend (from `/client`)
   ```bash
   npm start
   ```

## ✅ Verification Checklist

After starting all three services, verify:
- [ ] MongoDB terminal shows "waiting for connections on port 27017"
- [ ] Backend terminal shows "✓ MongoDB Connected Successfully"
- [ ] Backend terminal shows "🚀 Server running on http://localhost:5000"
- [ ] Frontend automatically opens at localhost:3000
- [ ] Home page loads with "Smart Home Automation Center" title

## 🧪 Test the Application

1. **Register a new account**
   - Go to "Register" page
   - Fill in name, email, and password
   - Click "Register"

2. **Login to your account**
   - Go to "Login" page
   - Enter your credentials
   - Click "Sign In"

3. **Control devices from Dashboard**
   - After login, you'll see 4 default devices
   - Click "Turn ON/OFF" to toggle device status
   - Watch the status update in real-time

## 🐛 Troubleshooting

### "ENOENT: Cannot find path"
- Make sure you're in the correct directory
- Use full path: `cd "C:\Users\bhagrava\OneDrive\Desktop\moive booking\server"`

### "Port 5000 already in use"
- The backend is already running, or another app is using it
- Kill the process or check `server/.env` for PORT setting

### "Port 3000 already in use"
- Another React app might be running
- Kill it or stop the previous instance

### "MongoDB Connection Failed"
- Make sure MongoDB is running (mongod command in separate terminal)
- Check if MongoDB is listening on port 27017

### "Cannot GET /api/devices"
- Make sure backend server is running
- Check backend terminal for error messages

## 🔑 Demo Account
- Email: demo@example.com
- Password: demo123

## 📚 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Register new user |
| POST | /api/auth/login | Login user |
| GET | /api/devices | Get all user devices |
| POST | /api/devices/initialize | Initialize default devices |
| POST | /api/devices/update | Update device status |

## ✨ Features
- ✅ User Authentication (JWT)
- ✅ 4 Device Types (Light, Fan, AC, Door Lock)
- ✅ Real-time Device Control
- ✅ Responsive Design
- ✅ Secure Password Hashing
- ✅ Protected Routes

## 🎨 Technology Stack
- **Frontend**: React 18, React Router 6, Axios, Tailwind CSS
- **Backend**: Express.js, Mongoose, JWT, bcryptjs
- **Database**: MongoDB

---

If you encounter any issues, check the troubleshooting section above or review the API_DOCUMENTATION.md for more details.

Happy Automating! 🏠✨
