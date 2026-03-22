# ✅ INSTALLATION & VERIFICATION CHECKLIST

Complete this checklist to ensure your Home Automation Center is set up correctly.

---

## PART 1: PREREQUISITES (Do These First)

### System Requirements
- [ ] Windows/macOS/Linux operating system
- [ ] Node.js v14+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] MongoDB Community Edition installed
- [ ] At least 2 terminal/command prompt windows available

### MongoDB Verification
- [ ] MongoDB installed on system
- [ ] MongoDB can be started (`mongod` command works)
- [ ] MongoDB version checked (`mongod --version`)
- [ ] MongoDB port 27017 is available (not blocked)

---

## PART 2: BACKEND SETUP

### Step 1: Navigate to Server Folder
```bash
cd "c:\Users\bhagrava\OneDrive\Desktop\moive booking\server"
```
- [ ] Command executed successfully
- [ ] Current directory shows server files

### Step 2: Install Backend Dependencies
```bash
npm install
```
- [ ] All dependencies installed
- [ ] node_modules folder created
- [ ] No error messages
- [ ] npm shows completion message

### Step 3: Verify .env File
- [ ] .env file exists in server folder
- [ ] MONGODB_URI is set to `mongodb://localhost:27017/home-automation`
- [ ] JWT_SECRET is set
- [ ] PORT is set to 5000
- [ ] NODE_ENV is set to development

### Step 4: Start MongoDB
```bash
# Windows (run mongod in a separate terminal):
mongod

# Or check service is running:
Get-Service MongoDB  # Windows
brew services list   # macOS
```
- [ ] MongoDB started or service running
- [ ] No "port in use" error
- [ ] No "access denied" error

### Step 5: Start Backend Server
```bash
npm run dev
```
**In the terminal, look for:**
- [ ] "✓ MongoDB Connected Successfully" message
- [ ] "🚀 Server running on http://localhost:5000" message
- [ ] No error messages
- [ ] Terminal shows it's listening

**Keep this terminal window open!**

### Step 6: Test Backend
Open new terminal/command prompt:
```bash
curl http://localhost:5000/api/health
```
Or open browser to: `http://localhost:5000/api/health`

- [ ] Returns: `{"success":true,"message":"Server is running"}`
- [ ] Backend is responding correctly

---

## PART 3: FRONTEND SETUP

### Step 1: Open New Terminal/Command Prompt
- [ ] New terminal/command prompt window open
- [ ] First terminal still running backend (don't close it!)

### Step 2: Navigate to Client Folder
```bash
cd "c:\Users\bhagrava\OneDrive\Desktop\moive booking\client"
```
- [ ] Command executed successfully
- [ ] Current directory shows client files

### Step 3: Install Frontend Dependencies
```bash
npm install
```
- [ ] All dependencies installed
- [ ] node_modules folder created
- [ ] No error messages
- [ ] npm shows completion message

### Step 4: Start Frontend Server
```bash
npm start
```
**In the terminal, look for:**
- [ ] "Compiled successfully!" message
- [ ] "You can now view home-automation-client in the browser"
- [ ] Browser should automatically open
- [ ] Port 3000 is mentioned

- [ ] Browser opens to `http://localhost:3000`
- [ ] Home page displays properly
- [ ] No error messages in terminal
- [ ] No error messages in browser console (F12)

**Keep this terminal window open!**

---

## PART 4: TESTING THE APPLICATION

### Test 1: Register New Account
- [ ] Click "Register" button on home page
- [ ] Fill in Name: "Test User"
- [ ] Fill in Email: "test@example.com"
- [ ] Fill in Password: "test123456"
- [ ] Click "Register" button
- [ ] See "Registration successful!" message
- [ ] Automatically redirect to Dashboard

### Test 2: View Dashboard
- [ ] See "Welcome to Your Dashboard" heading
- [ ] See 4 device cards:
  - [ ] Light (💡)
  - [ ] Fan (🌀)
  - [ ] AC (❄️)
  - [ ] Door Lock (🔒)
- [ ] All devices show "OFF" status
- [ ] Statistics cards show: 4 Total, 0 On, 4 Off

### Test 3: Toggle Devices
- [ ] Click "Turn ON" button on Light device
- [ ] See status change to "ON" (green)
- [ ] Button changes to "Turn OFF"
- [ ] See success message: "Device turned ON!"
- [ ] Statistics update (should show 3 Off, 1 On)

- [ ] Click "Turn OFF" button
- [ ] See status change back to "OFF"
- [ ] All changes happen instantly (no delay)

### Test 4: Test Other Devices
- [ ] Toggle Fan ON/OFF
- [ ] Toggle AC ON/OFF
- [ ] Toggle Door Lock ON/OFF
- [ ] All devices respond immediately
- [ ] Statistics update correctly

### Test 5: Test Logout
- [ ] Click user email in navbar
- [ ] Look for "Logout" button (should be in navbar)
- [ ] Click Logout
- [ ] See login page displayed
- [ ] Cannot access dashboard (redirects to login)

### Test 6: Test Login
- [ ] Click "Sign In" or "Login" button
- [ ] Fill in Email: "test@example.com"
- [ ] Fill in Password: "test123456"
- [ ] Click "Sign In"
- [ ] See "Login successful!" message
- [ ] Redirect back to Dashboard

### Test 7: Verify Data in MongoDB
Open MongoDB Compass or terminal:
```bash
mongosh
use home-automation
db.users.find().pretty()
db.devices.find().pretty()
```

- [ ] Users collection has your registered account
- [ ] Password is hashed (not plain text)
- [ ] Devices collection has 4 devices
- [ ] Each device has your userId
- [ ] Device status matches what you set

---

## PART 5: BROWSER VERIFICATION

### Browser Console (Press F12)
- [ ] No red error messages
- [ ] Network tab shows successful requests
- [ ] API calls to `http://localhost:5000/api/*`
- [ ] Status codes 200/201 (not 404 or 500)

### Browser Application Tab (DevTools → Application)
- [ ] localStorage shows: `token` (JWT token)
- [ ] Logout clears the token
- [ ] Login re-adds the token

### Responsive Design Test
- [ ] Open DevTools (F12)
- [ ] Toggle Device Toolbar (Ctrl+Shift+M)
- [ ] Mobile view (iPhone size):
  - [ ] All elements visible
  - [ ] No horizontal scroll
  - [ ] Buttons are clickable
  - [ ] Text is readable
- [ ] Tablet view:
  - [ ] Layout adapts properly
  - [ ] 2-column device grid
- [ ] Desktop view:
  - [ ] 4-column device grid
  - [ ] Full-width layout

---

## PART 6: FINAL VERIFICATION

### Summary Check
- [ ] Backend running on http://localhost:5000
- [ ] Frontend running on http://localhost:3000
- [ ] MongoDB running on localhost:27017
- [ ] Can register new users
- [ ] Can login with credentials
- [ ] Can toggle devices ON/OFF
- [ ] Status updates in real-time
- [ ] Statistics are accurate
- [ ] Can logout
- [ ] Data persists in MongoDB

### Documentation Review
- [ ] README.md exists and is readable
- [ ] QUICK_START.md exists
- [ ] SETUP_INSTRUCTIONS.md exists
- [ ] API_DOCUMENTATION.md exists
- [ ] FEATURES_CHECKLIST.md exists
- [ ] DIRECTORY_STRUCTURE.md exists

### No Critical Issues
- [ ] No "MongoDB Connection Error"
- [ ] No "Port already in use" errors
- [ ] No CORS errors
- [ ] No "Cannot find module" errors
- [ ] No JWT authentication errors
- [ ] All API responses successful

---

## PART 7: OPTIONAL ENHANCEMENTS

Once everything is working, you can:
- [ ] Change Tailwind CSS colors
- [ ] Add more device types
- [ ] Customize device icons
- [ ] Add more features
- [ ] Add device scheduling
- [ ] Add real-time notifications (Socket.io)
- [ ] Deploy to cloud

---

## ✅ SUCCESS INDICATORS

If ALL checkboxes are checked:
- ✅ Application is fully functional
- ✅ All features are working
- ✅ Database is properly configured
- ✅ Authentication is secure
- ✅ UI is responsive
- ✅ Ready for development/deployment

---

## 🆘 TROUBLESHOOTING

| Issue | Solutions |
|-------|-----------|
| MongoDB won't start | Run `mongod` in separate cmd window |
| Port 5000 in use | Kill process: `netstat -ano \| findstr :5000` |
| Port 3000 in use | Kill process: `lsof -i :3000 \| kill` |
| npm install fails | Delete node_modules, clear npm cache |
| CORS error | Both servers must be running |
| Cannot login | Clear localStorage, check password |
| Cannot toggle device | Logout and login again |
| Blank dashboard | Refresh page or check console |

---

## 📞 SUPPORT CHECKLIST

If something doesn't work:
- [ ] Read QUICK_START.md
- [ ] Read SETUP_INSTRUCTIONS.md
- [ ] Check browser console (F12)
- [ ] Check backend terminal output
- [ ] Verify MongoDB is running
- [ ] Verify both servers are running
- [ ] Try clearing cache/localStorage
- [ ] Restart both servers
- [ ] Run `npm install` again

---

## 🎉 Ready to Go!

Once you've completed this checklist:

1. ✅ Your Home Automation Center is fully functional
2. ✅ You can register accounts and manage devices
3. ✅ You understand how the application works
4. ✅ You can now customize and extend it
5. ✅ You're ready for development or deployment

**Congratulations! Your application is ready to use!** 🚀

---

**Checklist Version**: 1.0
**Last Updated**: 2024-01-20
**Status**: Complete ✅
