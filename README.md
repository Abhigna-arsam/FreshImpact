# FreshImpact 
# 🍃 AharaSetu — Bridging Food, People, and Sustainability

AharaSetu is a unified platform designed to **minimize food waste**, **optimize usage**, and **promote sustainable food practices**.  
It connects households, communities, and organizations through awareness, collaboration, tracking, and composting — supported by an **integrated conversational assistant** that guides users throughout the platform.

---

## 🌐 Platform Modules

| Module | Purpose | Primary Users |
|-------|---------|---------------|
| **FoodTrack** | Predict and optimize food inventory usage | Hostels, Restaurants, Stores |
| **FoodShare** | Donate surplus food to NGOs/communities | Hotels, Event organizers, Volunteers |
| **FoodWise** | Smart meal ideas, waste-reduction habits, gamified daily challenges | Individuals & Families |
| **FoodCycle** | Steps and guidance for composting and sustainable recycling | Households & Communities |

> **Note:** The **Chat Assistant** is embedded across all modules to help users navigate, suggest actions, and answer queries in real-time.

---

## 🧠 Integrated Chat Assistant (Inside Every Module)

The chatbot helps by:
- Suggesting **recipes** based on available ingredients (FoodWise)
- Recommending **purchase quantity** to reduce surplus (FoodTrack)
- Guiding **safe packing & delivery steps** for donation (FoodShare)
- Providing **step-by-step composting instructions** (FoodCycle)
- Answering platform-related doubts any time

No separate section — the chatbot works **context-aware** depending on where the user is.

---

## 🧱 Tech Stack

- **Frontend:** React + TailwindCSS
- **Backend:** Node.js / Express (optional microservices)
- **Database:** Firebase Firestore / Realtime Database
- **Authentication:** Firebase Auth
- **Chatbot:** Dialogflow / GPT-based conversational layer
- **Hosting:** Firebase Hosting / Vercel

---

## ✨ Functional Breakdown

### 1️⃣ FoodTrack — *Smart Inventory Planning*
- Track stock usage daily/weekly
- AI suggestions to avoid over-purchasing
- Alert system for nearing expiry items
- Generates optimized shopping list

**Chatbot role:**  
“Based on your past week usage, reduce your rice purchase by 2kg this week.”

---

### 2️⃣ FoodShare — *Donation Bridge*
- List surplus food easily
- Locate nearest verified NGOs/volunteers
- Pickup coordination + live update logs
- Proof-of-donation records

**Chatbot role:**  
“You have 4 servings of extra food. Want me to connect you to 'HelpingHands NGO' nearby?”

---

### 3️⃣ FoodWise — *Smart Home Food Habits*
- Personalized recipes from **what you already have**
- Daily mini waste-reduction challenges
- Points → badge → leaderboard
- Community tips/sharing wall

**Chatbot role:**  
“Try using leftover rice to make lemon rice. Here’s a quick method 👇 …”

---

### 4️⃣ FoodCycle — *Sustainable Disposal & Composting*
- Easy composting tutorials
- Track compost progress
- Guides for sorting & recycling at home

**Chatbot role:**  
“Add more dry waste to balance moisture in your compost bin.”

---

## 🚀 Why AharaSetu?

Because food is not just nutrition — it’s a **responsibility**.  
AharaSetu connects **awareness → action → impact**, all in one ecosystem.

---

## 🖥️ Setup Instructions (Quick Start)

```bash
git clone <repo-url>
cd aharasetu
npm install
npm start
