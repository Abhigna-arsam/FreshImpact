# 🌿 FoodImpact — Together Towards Zero Food Waste

## 🌎 Overview

**FoodImpact** is a modern, eco-friendly, full-stack web platform designed to reduce food waste through real-time tracking, sharing, learning, and recycling.  
It brings together **businesses, consumers, and communities** to build a sustainable ecosystem.

💚 *"Together Towards Zero Food Waste."*

---

## 🧩 Features

- Clean, minimal, and eco-friendly design (green + white theme)
- Hero section with CTA buttons: *Explore Modules* and *Join Now*
- Four interactive module cards:
  - 📊 **FoodTrack** – Predict demand & optimize inventory  
  - 🤝 **FoodShare** – Connect surplus food with charities  
  - 🍽️ **FoodWise** – Recipes, eco-tips & gamified challenges  
  - 🌱 **FoodCycle** – Composting & recycling guides
- Impact statistics and success stories section  
- Smooth animations, parallax scrolling & responsive design  

---

## 🌐 **Modules**

### 1. 📊 **FoodTrack (For Businesses)**
- Dashboard-style interface with charts & analytics  
- **Real-time demand prediction** and **spoilage alerts**  
- Inventory monitoring & Request Demo CTA  
- Uses **WebSockets / Firebase Realtime** updates for live alerts  

### 2. 🤝 **FoodShare (For Communities & NGOs)**
- Interactive **map-based interface** showing donors and charities  
- Real-time updates when new posts are added  
- Step-by-step process: **Post → Connect → Pickup**  
- Built using **Firebase Firestore + Leaflet / Mapbox**  

### 3. 🍽️ **FoodWise (For Consumers)**
- Personalized recipes, food-saving tips, and challenges  
- **Gamified progress tracker** with live leaderboard  
- Earn badges and share achievements  
- “Download App” CTA for mobile version  

### 4. 🌱 **FoodCycle (For Everyone)**
- Blog-style eco-guides & infographics  
- User-submitted eco-tips and comments (live updates)  
- Promotes composting, recycling & sustainable practices  

---

## ⚡ Real-Time Features

| Module | Real-Time Functionality | Tech Used |
|---------|--------------------------|-----------|
| FoodTrack | Spoilage alerts, demand prediction updates | Socket.IO / Firestore listeners |
| FoodShare | Live map updates for donor/charity posts | Firebase Firestore |
| FoodWise | Dynamic leaderboard and badges | Firestore live snapshots |
| FoodCycle | Live comments and community tips | Firebase Firestore |

---

## 🧱 Tech Stack

### 💻 Frontend
- React.js (Generated via Bolt.ai)
- Tailwind CSS for styling  
- React Router for navigation  
- Framer Motion for animations  

### ⚙️ Backend
- Node.js + Express  
- Socket.IO for real-time communication  
- REST APIs for CRUD operations  

### 🗄️ Database
- Firebase Firestore (Realtime updates)
- Firebase Auth (User Authentication)

### 🌍 Deployment
- **Frontend:** Vercel / Netlify / Bolt.ai export  
- **Backend:** Render / Railway / Firebase Functions  
- **Database & Auth:** Firebase  
