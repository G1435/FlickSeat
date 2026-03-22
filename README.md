# Home Automation Center - MERN Stack Application

A complete full-stack home automation web application built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**.

## 🎯 Features

### Frontend
✅ Modern, responsive UI with Tailwind CSS
✅ User authentication (Register/Login)
✅ Protected routes for authenticated users
✅ Real-time device control dashboard
✅ Device status management
✅ Smooth animations and transitions
✅ Mobile-friendly design

### Backend
✅ RESTful API with Express.js
✅ JWT authentication
✅ Password hashing with bcrypt
✅ MongoDB database integration
✅ Protected API routes
✅ Error handling

### Security
✅ JWT token-based authentication
✅ Password hashing with bcrypt
✅ Protected routes
✅ Input validation
✅ CORS enabled

## 📁 Project Structure

```
home-automation/
├── client/                    # React.js Frontend
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Navbar.js
│   │   │   ├── DeviceCard.js
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/            # Page components
│   │   │   ├── Home.js
│   │   │   ├── Register.js
│   │   │   ├── Login.js
│   │   │   └── Dashboard.js
│   │   ├── services/         # API services
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
│
└── server/                    # Node.js Backend
    ├── models/               # Database models
    │   ├── User.js
    │   └── Device.js
    ├── routes/               # API routes
    │   ├── auth.js
    │   └── devices.js
    ├── controllers/          # Route handlers
    │   ├── authController.js
    │   └── deviceController.js
    ├── middleware/           # Custom middleware
    │   └── auth.js
    ├── server.js
    ├── package.json
    └── .env
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally
- npm or yarn
- Git

### MongoDB Setup

1. **Install MongoDB Community**
   - Windows: Download from [mongodb.com](https://www.mongodb.com/try/download/community)
   - macOS: `brew tap mongodb/brew && brew install mongodb-community`
   - Linux: Follow [official docs](https://docs.mongodb.com/manual/installation/)

2. **Start MongoDB Server**
   ```bash
   # Windows
   mongod

   # macOS/Linux
   brew services start mongodb-community
   ```

3. **Verify MongoDB Connection**
   ```bash
   mongo
   # Should connect to local MongoDB server
   ```

### Backend Setup

1. **Navigate to server directory**
   ```bash
   cd server
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify .env file**
   - `.env` file is already created with default values
   - Update if you have different MongoDB URI or port

4. **Start the server**
   ```bash
   # Development mode (with auto-reload)
   npm run dev

   # Production mode
   npm start
   ```

   Server will run at: `http://localhost:5000`

### Frontend Setup

1. **Open new terminal and navigate to client directory**
   ```bash
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start React development server**
   ```bash
   npm start
   ```

   Frontend will open at: `http://localhost:3000`

## 📚 API Endpoints

### Authentication Routes
```
POST   /api/auth/register       - Register new user
POST   /api/auth/login          - Login user
```

### Device Routes (Protected)
```
GET    /api/devices             - Get all user devices
POST   /api/devices/initialize  - Create default devices
POST   /api/devices/update      - Update device status
```

## 🔐 Authentication Flow

1. **Register**
   - User provides name, email, password
   - Password is hashed with bcrypt
   - JWT token is generated and stored in localStorage

2. **Login**
   - User provides email and password
   - Password is verified
   - JWT token is generated and stored in localStorage

3. **Protected Routes**
   - Token is sent in Authorization header
   - Middleware verifies token before accessing protected routes

## 💾 Database Schemas

### User Schema
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

### Device Schema
```javascript
{
  name: String (Light, Fan, AC, Door Lock),
  status: String (ON, OFF),
  userId: ObjectId (ref: User),
  icon: String,
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 UI Components

### Navbar
- Logo and branding
- Navigation links
- User authentication status
- Logout button

### DeviceCard
- Device icon and name
- Status display (ON/OFF)
- Toggle button
- Loading state

### Pages
- **Home**: Introduction and features
- **Register**: User registration form
- **Login**: User login form
- **Dashboard**: Smart device control panel

## ⚙️ Configuration

### Environment Variables (.env)

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/home-automation

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Server Port
PORT=5000

# Node Environment
NODE_ENV=development
```

## 🧪 Testing

### Test with Demo Account
- Email: demo@example.com
- Password: demo123

Or create a new account through the registration page.

## 🎯 Device Types

1. **Light** 💡 - Indoor/outdoor lighting control
2. **Fan** 🌀 - Ceiling/wall fans
3. **AC** ❄️ - Air conditioning units
4. **Door Lock** 🔒 - Smart door locks

## 📝 Sample API Requests

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get Devices (with token)
```bash
curl -X GET http://localhost:5000/api/devices \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Update Device
```bash
curl -X POST http://localhost:5000/api/devices/update \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "deviceId": "device_id_here",
    "status": "ON"
  }'
```

## 🚨 Troubleshooting

### MongoDB Connection Error
- Verify MongoDB is running: `mongod`
- Check MONGODB_URI in .env file
- Ensure port 27017 is not blocked

### CORS Error
- CORS is enabled in server.js
- Verify frontend URL matches backend configuration
- Check if both servers are running

### Port Already in Use
```bash
# Kill process using port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

### JWT Token Expired
- Clear localStorage and login again
- Token expires in 7 days

## 📦 Dependencies

### Backend
- **express**: Web framework
- **mongoose**: MongoDB ORM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Environment variables
- **cors**: Cross-origin resource sharing

### Frontend
- **react**: UI library
- **react-router-dom**: Routing
- **axios**: HTTP client
- **tailwindcss**: CSS framework

## 🎓 Learning Outcomes

- Full-stack MERN development
- REST API design and implementation
- JWT authentication and authorization
- MongoDB database design
- React component architecture
- Responsive web design with Tailwind CSS
- Error handling and validation

## 📄 License

This project is open source and available under the MIT License.

## 👥 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🤝 Support

For issues, questions, or suggestions, please create an issue in the repository.

---

**Happy Coding! 🚀**
