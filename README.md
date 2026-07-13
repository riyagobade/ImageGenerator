# 🎨 AI Image Generator

An AI-powered Image Generator web application built using the MERN stack. Users can generate creative AI images from text prompts, download them, and share them with the community.

## 🚀 Features

- 🖼️ Generate AI images from text prompts
- 💡 Surprise Me prompt generator
- 📥 Download generated images
- ☁️ Store images using Cloudinary
- 🌍 Share generated images with the community
- 🔍 Search community posts
- 📱 Responsive and modern UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- Styled Components
- Material UI

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Cloud Services
- Cloudinary (Image Storage)
- Cloudflare AI (Image Generation)

---

## 📂 Project Structure

```
Image Generator/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/riyagobade/ImageGenerator.git
```

### 2️⃣ Navigate to the project

```bash
cd ImageGenerator
```

### 3️⃣ Install frontend dependencies

```bash
cd client
npm install
```

### 4️⃣ Install backend dependencies

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGODB_URL=YOUR_MONGODB_URL

CLOUDINARY_CLOUD_NAME=YOUR_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_API_KEY
CLOUDINARY_API_SECRET=YOUR_API_SECRET

CLOUDFLARE_ACCOUNT_ID=YOUR_ACCOUNT_ID
CLOUDFLARE_API_TOKEN=YOUR_API_TOKEN
```

---

## ▶️ Run the Project

### Backend

```bash
cd server
npm start
```

### Frontend

```bash
cd client
npm start
```

---

## 🌟 Future Improvements

- User Authentication
- Image History
- Favorite Images
- Multiple AI Models
- Dark Mode
- Image Variations
- Image Editing

---
