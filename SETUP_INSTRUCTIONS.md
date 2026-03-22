# SETUP INSTRUCTIONS FOR HOME AUTOMATION CENTER

## ⚠️ IMPORTANT: Complete Setup Steps

Follow these steps in order to get the application running successfully.

---

## STEP 1: Install MongoDB (One-time setup)

### Windows Users:
1. Download MongoDB Community Edition from: https://www.mongodb.com/try/download/community
2. Run the installer and follow the installation wizard
3. Save the installation path (usually: `C:\Program Files\MongoDB\Server\7.0`)
4. MongoDB will be installed as a Windows Service

### macOS Users:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux Users:
Follow the installation guide for your distribution: https://docs.mongodb.com/manual/installation/

### Verify Installation:
```bash
# Should return version number
mongod --version
```

---

## STEP 2: Verify MongoDB is Running

### Windows:
```powershell
# Check if MongoDB service is running
Get-Service MongoDB

# If not running, start it
Start-Service MongoDB
```

### macOS/Linux:
```bash
# Check if MongoDB is running
brew services list

# Check MongoDB port
lsof -i :27017
```

---

## STEP 3: Backend Setup

### 3.1 Open PowerShell/Terminal and navigate to server folder:
```bash
cd "c:\Users\bhagrava\OneDrive\Desktop\moive booking\server"
```

### 3.2 Install dependencies:
```bash
npm install
```

### 3.3 Verify .env file exists:
```bash
# .env file should already exist with:
# MONGODB_URI=mongodb://localhost:27017/home-automation
# JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
# PORT=5000
# NODE_ENV=development
```

### 3.4 Start the backend server:
```bash
# Development mode (recommended - will restart on file changes)
npm run dev

# OR Production mode
npm start
```

### Expected Output:
```
✓ MongoDB Connected Successfully
🚀 Server running on http://localhost:5000
```

**Keep this terminal window open!**

---

## STEP 4: Frontend Setup

### 4.1 Open a NEW PowerShell/Terminal window:
```bash
cd "c:\Users\bhagrava\OneDrive\Desktop\moive booking\client"
```

### 4.2 Install dependencies:
```bash
npm install
```

### 4.3 Start the React development server:
```bash
npm start
```

### Expected Output:
```
Compiled successfully!

You can now view home-automation-client in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.x.x:3000
```

**The application will automatically open in your browser!**

---

## STEP 5: Testing the Application

### 5.1 Access the Application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

### 5.2 Create a New Account:
1. Click "Register" button
2. Fill in:
   - Full Name: Your name
   - Email: your-email@example.com
   - Password: Choose a password (min 6 characters)
3. Click "Register"
4. You'll be redirected to Dashboard

### 5.3 Or Use Demo Account:
- Email: demo@example.com
- Password: demo123

### 5.4 Test Device Control:
1. Toggle devices ON/OFF
2. Watch status update in real-time
3. Check device statistics

---

## STEP 6: Verify MongoDB Data

### Open MongoDB Compass (GUI Tool):
1. Download from: https://www.mongodb.com/products/compass
2. Open and connect to: `mongodb://localhost:27017`
3. Browse databases:
   - Database: `home-automation`
   - Collections: `users`, `devices`

### Or use MongoDB Shell:
```bash
# Connect to MongoDB
mongosh

# Show databases
show dbs

# Use home-automation database
use home-automation

# Show collections
show collections

# View users
db.users.find().pretty()

# View devices
db.devices.find().pretty()
```

---

## IMPORTANT PORTS

Make sure these ports are not blocked:
- **Port 5000**: Backend server
- **Port 3000**: Frontend server
- **Port 27017**: MongoDB server

---

## 📁 File Structure After Setup

```
moive booking/
├── server/
│   ├── node_modules/          (created after npm install)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── client/
│   ├── node_modules/          (created after npm install)
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .gitignore
│
└── README.md
```

---

## 🔧 Commands Reference

### Backend Commands:
```bash
cd server

# Install dependencies
npm install

# Start development server (with auto-reload)
npm run dev

# Start production server
npm start
```

### Frontend Commands:
```bash
cd client

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

---

## ✅ Verification Checklist

Before considering setup complete:

- [ ] MongoDB is installed and running
- [ ] Backend server is running on port 5000
- [ ] Frontend server is running on port 3000
- [ ] Can access http://localhost:3000 in browser
- [ ] Can register a new user
- [ ] Can login with registered account
- [ ] Can see dashboard with devices
- [ ] Can toggle device status (ON/OFF)
- [ ] Device status updates appear immediately

---

## 🚨 Troubleshooting

### Problem: "MongoDB Connection Error"
**Solution:**
```bash
# Check if MongoDB is running
# Windows: Check Services or run:
mongod

# macOS/Linux: Run:
brew services list
```

### Problem: "Port 5000 already in use"
**Solution:**
```powershell
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux:
lsof -i :5000
kill -9 <PID>
```

### Problem: "Port 3000 already in use"
**Solution:**
```bash
# Kill process on port 3000 (same as above with :3000)
# Or specify different port:
PORT=3001 npm start
```

### Problem: "CORS Error in browser console"
**Solution:**
- Ensure backend is running on http://localhost:5000
- Clear browser cache (Ctrl+Shift+Delete)
- Restart both servers

### Problem: "Cannot find module"
**Solution:**
```bash
# Delete node_modules and reinstall
cd server
rm -r node_modules
npm install
npm run dev
```

### Problem: "jwt token not valid"
**Solution:**
- Clear localStorage: Open DevTools (F12) → Application → Clear all items
- Login again

---

## 📞 Getting Help

If you encounter issues:

1. **Check console errors:**
   - Browser: Press F12 to open DevTools
   - Backend: Check terminal output

2. **Verify all services are running:**
   - MongoDB: `mongosh` should connect
   - Backend: http://localhost:5000/api/health should return `{"success":true}`
   - Frontend: http://localhost:3000 should load

3. **Check logs:**
   - Backend logs in terminal
   - Browser console (F12)
   - MongoDB logs in MongoDB Compass

---

## 🎉 Success!

Once everything is set up:
1. You can manage smart devices
2. Add multiple accounts
3. Each user has separate devices
4. Real-time device status updates

**Enjoy your Home Automation Center! 🏠**
