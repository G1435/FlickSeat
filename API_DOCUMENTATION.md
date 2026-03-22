# API Documentation

## Home Automation Center - REST API

Complete API documentation for the Home Automation Center backend.

---

## 🌐 Base URL

```
http://localhost:5000/api
```

---

## 📋 Endpoints

### 1. AUTHENTICATION ENDPOINTS

#### Register New User
```http
POST /auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "Email already registered"
}
```

**Validation Rules:**
- Name: Required, max 50 characters
- Email: Required, must be valid email format, unique
- Password: Required, minimum 6 characters

---

#### Login User
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Error - 401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### 2. DEVICE ENDPOINTS

#### Get All User Devices
```http
GET /devices
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Devices fetched successfully",
  "devices": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Light",
      "status": "ON",
      "userId": "507f1f77bcf86cd799439011",
      "icon": "💡",
      "createdAt": "2024-01-20T10:30:00Z",
      "updatedAt": "2024-01-20T10:30:00Z"
    },
    {
      "_id": "507f1f77bcf86cd799439013",
      "name": "Fan",
      "status": "OFF",
      "userId": "507f1f77bcf86cd799439011",
      "icon": "🌀",
      "createdAt": "2024-01-20T10:30:00Z",
      "updatedAt": "2024-01-20T10:30:00Z"
    }
  ]
}
```

**Response (Error - 401):**
```json
{
  "success": false,
  "message": "No token provided. Authorization denied"
}
```

---

#### Initialize Default Devices
```http
POST /devices/initialize
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "Default devices created",
  "devices": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Light",
      "status": "OFF",
      "userId": "507f1f77bcf86cd799439011",
      "icon": "💡",
      "createdAt": "2024-01-20T10:30:00Z"
    },
    {
      "_id": "507f1f77bcf86cd799439013",
      "name": "Fan",
      "status": "OFF",
      "userId": "507f1f77bcf86cd799439011",
      "icon": "🌀",
      "createdAt": "2024-01-20T10:30:00Z"
    },
    {
      "_id": "507f1f77bcf86cd799439014",
      "name": "AC",
      "status": "OFF",
      "userId": "507f1f77bcf86cd799439011",
      "icon": "❄️",
      "createdAt": "2024-01-20T10:30:00Z"
    },
    {
      "_id": "507f1f77bcf86cd799439015",
      "name": "Door Lock",
      "status": "OFF",
      "userId": "507f1f77bcf86cd799439011",
      "icon": "🔒",
      "createdAt": "2024-01-20T10:30:00Z"
    }
  ]
}
```

**Response (Error - 200):**
```json
{
  "success": true,
  "message": "Devices already initialized",
  "devices": [...]
}
```

---

#### Update Device Status
```http
POST /devices/update
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "deviceId": "507f1f77bcf86cd799439012",
  "status": "ON"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Device updated successfully",
  "device": {
    "_id": "507f1f77bcf86cd799439012",
    "name": "Light",
    "status": "ON",
    "userId": "507f1f77bcf86cd799439011",
    "icon": "💡",
    "createdAt": "2024-01-20T10:30:00Z",
    "updatedAt": "2024-01-20T10:31:00Z"
  }
}
```

**Response (Error - 400):**
```json
{
  "success": false,
  "message": "Status must be ON or OFF"
}
```

**Response (Error - 403):**
```json
{
  "success": false,
  "message": "Not authorized to update this device"
}
```

**Validation Rules:**
- deviceId: Required, valid MongoDB ObjectId
- status: Required, must be "ON" or "OFF"

---

#### Health Check
```http
GET /health
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Server is running"
}
```

---

## 🔑 Authentication

All device endpoints require JWT authentication.

### Token Format:
```
Authorization: Bearer <TOKEN>
```

### Token Expiration:
- Tokens expire in **7 days**
- After expiration, user must login again

### How to Use:
1. Register or Login to get a token
2. Store token in localStorage
3. Include token in Authorization header for all protected routes

---

## 📊 Data Models

### User Model
```javascript
{
  _id: ObjectId (MongoDB ID),
  name: String (required, max 50),
  email: String (required, unique),
  password: String (hashed, required),
  createdAt: Date,
  updatedAt: Date
}
```

### Device Model
```javascript
{
  _id: ObjectId (MongoDB ID),
  name: String (Light, Fan, AC, Door Lock),
  status: String (ON or OFF),
  userId: ObjectId (reference to User),
  icon: String (emoji),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🚨 Error Codes

| Code | Message | Cause |
|------|---------|-------|
| 400 | Bad Request | Missing or invalid fields |
| 401 | Unauthorized | Invalid/missing token or credentials |
| 403 | Forbidden | User not authorized for resource |
| 404 | Not Found | Resource doesn't exist |
| 500 | Server Error | Internal server error |

---

## 💡 Example Workflow

### 1. Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### 2. Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Response includes token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

### 3. Get Devices
```bash
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."

curl -X GET http://localhost:5000/api/devices \
  -H "Authorization: Bearer $TOKEN"
```

### 4. Initialize Devices
```bash
curl -X POST http://localhost:5000/api/devices/initialize \
  -H "Authorization: Bearer $TOKEN"
```

### 5. Update Device
```bash
curl -X POST http://localhost:5000/api/devices/update \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "deviceId": "507f1f77bcf86cd799439012",
    "status": "ON"
  }'
```

---

## 🧪 Testing with Postman

1. **Import Base URL**: `http://localhost:5000/api`

2. **Create Environment Variables**:
   - `token`: Your JWT token from login
   - `deviceId`: Device ID to update

3. **Test Endpoints**:
   - Set Authorization header: `Bearer {{token}}`
   - Use variables in request body: `{{deviceId}}`

---

## 📝 Notes

- All requests/responses use JSON format
- Timestamps are in ISO 8601 format
- Passwords are hashed with bcrypt (sha2-256 rounds)
- JWT uses HS256 algorithm
- CORS is enabled for frontend access

---

## 🔐 Security Features

✅ JWT token-based authentication
✅ Bcrypt password hashing
✅ Protected routes (require valid token)
✅ User-specific device access
✅ Server-side input validation
✅ CORS protection

---

**API Version**: 1.0.0
**Last Updated**: 2024-01-20
