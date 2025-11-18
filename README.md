
This repository contains my project for learning and practicing **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It demonstrates how to set up a modern web application, create reusable components, implement routing, integrate APIs, and organize a project using best practices.

## 📌 Project Description

This project introduces how to build a complete web application using **Next.js + TypeScript + Tailwind CSS**.  
It covers:

- Page routing  
- Reusable UI components  
- Layout and navigation  
- API fetching (JSONPlaceholder)  
- TypeScript interfaces  
- Modals, buttons, and cards  
- Responsive UI design  

## 🎯 Learning Objectives

- Scaffold a Next.js project with TypeScript and Tailwind CSS  
- Use Pages Router for basic navigation  
- Build and reuse components with TypeScript interfaces  
- Manage component props and state  
- Implement modals and interactive UI elements  
- Fetch and display external API data  
- Structure a project using best practices  
- Build responsive pages and layouts  

## 🧰 Requirements

- Node.js (v16+)
- npm or yarn
- Basic knowledge of React & TypeScript
- Git & GitHub
- VS Code (recommended)

---

## 📁 Project Structure

```

alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json

````

```bash
npx create-next-app@latest alx-project-2 --typescript --eslint --tailwind
````

### **2. Basic Routing**

Added:

* `home.tsx`
* `about.tsx`

Updated `Header.tsx` with links to both pages.

### **3. Reusable Card Component**

* Created `Card.tsx`
* Added `CardProps` interface
* Used different cards in `home.tsx`

### **4. Modal Component**

* Created `PostModal.tsx`
* Accepts user input and sends data to parent
* Opens with a button and displays new content on `/home`

### **5. Button Component**

* Created `Button.tsx`
* Props: size + shape
* Displayed three button styles on `/about`

### **6. Navigation Header**

* Created `Header.tsx`
* Added links: `/home`, `/about`, `/posts`
* Imported into pages

### **7. PostCard Component**

* Created `PostCard.tsx`
* Fetched posts from JSONPlaceholder
* Displayed list of posts on `/posts`

### **8. UserCard Component**

* Created `UserCard.tsx`
* Fetched users and displayed them on `/users`

## 📦 Running the Project

Clone the repository:

```bash
git clone https://github.com/hany-7878/alx-project-0x02-setup
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev -- -p 3000
```

Open in browser:

```
http://localhost:3000
```

## ✨ Final Outcome

* A functional Next.js web app
* Clean and reusable UI components
* API-driven pages for posts and users
* Responsive pages using Tailwind CSS
* Well-organized code following best practices

