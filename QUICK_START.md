# 🚀 QUICK START GUIDE

Get the Home Automation Center running in 5 minutes!

---

## ⚡ Quick Start (5 Minutes)

### Prerequisites Check:
- [ ] Node.js installed? Check: `node --version`
- [ ] MongoDB installed? Check: `mongod --version`
- [ ] MongoDB service running?

### Step 1: Start MongoDB (1 minute)

```bash
# Windows - Open PowerShell as Admin
net start MongoDB

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

### Step 2: Start Backend (1 minute)

```bash
cd server
npm install
npm run dev
```

**Expected**: `✓ MongoDB Connected Successfully` and `🚀 Server running on http://localhost:5000`

### Step 3: Start Frontend (2 minutes)

Open **new** terminal:

```bash
cd client
npm install
npm start
```

**Expected**: Browser opens at `http://localhost:3000`

### Step 4: Test It! (1 minute)

1. Click **"Register"**
2. Fill in details and create account
3. You're in! See your dashboard with 4 devices
4. Toggle devices ON/OFF

---

## 🎯 What You Can Do Now

✅ Register and login
✅ Control 4 smart devices (Light, Fan, AC, Door Lock)
✅ Toggle devices ON/OFF
✅ See real-time status updates
✅ View device statistics

---

## 📱 Device Types

| Device | Icon | Control |
|--------|------|---------|
| Light | 💡 | ON/OFF |
| Fan | 🌀 | ON/OFF |
| AC | ❄️ | ON/OFF |
| Door Lock | 🔒 | ON/OFF |

---

## 🔗 Access Points

- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5000
- **API Base**: http://localhost:5000/api
- **MongoDB**: localhost:27017

---

## 🆘 Common Issues

### "MongoDB Connection Error"
```bash
# Make sure MongoDB is running
mongod

# Or check service
systemctl status mongod  # Linux/Mac
Get-Service MongoDB      # Windows
```

### "Port already in use"
```bash
# Kill process on port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -i :5000
kill -9 <PID>
```

### Clear Cache & Restart
```bash
# Clear localStorage
# Open browser DevTools (F12) → Application → Clear all

# Restart both servers
```

---

## 📚 File Structure

```
moive booking/
├── server/          ← Backend (Node.js + Express)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── .env
├── client/          ← Frontend (React)
│   ├── src/
│   ├── public/
│   └── package.json
├── README.md        ← Full documentation
├── SETUP_INSTRUCTIONS.md
├── API_DOCUMENTATION.md
└── QUICK_START.md   ← This file
```

---

## 🎓 Next Steps

1. **Explore Code**: Check `client/src` and `server` folders
2. **Test API**: Use Postman to test endpoints
3. **Customize**: Modify colors, add more devices
4. **Deploy**: Deploy to Heroku/AWS when ready

---

## 💾 Key Features Implemented

✅ **Authentication**
- Register new users
- Secure password hashing
- JWT token-based auth
- Auto-logout after 7 days

✅ **Devices**
- 4 pre-configured devices
- Real-time toggle
- Status display
- User-specific access

✅ **UI/UX**
- Responsive Tailwind CSS design
- Mobile-friendly layout
- Smooth animations
- Error messages

✅ **Security**
- Protected routes
- Bcrypt passwords
- JWT tokens
- CORS enabled

---

## 🔑 Demo Account

- Email: demo@example.com
- Password: demo123

---

## 📞 Need Help?

Check these files in order:
1. **QUICK_START.md** (this file) - Get running fast
2. **SETUP_INSTRUCTIONS.md** - Detailed setup steps
3. **README.md** - Complete documentation
4. **API_DOCUMENTATION.md** - API reference

---

**Happy automating! 🏠⚡**
