# 🎓 Codify Education Website

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

**An educational platform for Codify's full-stack engineering course**

[View Live Demo](https://codifyeducation.com/) · [Report Bug](https://github.com/Fernando-Cal/Codify-Education-Website/issues) · [Request Feature](https://github.com/Fernando-Cal/Codify-Education-Website/issues)

</div>


## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Key Implementations](#-key-implementations)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [Contact](#-contact)



## 🎯 Overview

Codify Education Website is a fully-featured educational platform designed for managing and delivering course content for an "Intro to Full Stack Engineering" course. The website provides an intuitive interface for students to access syllabi, assignments, office hours, and course announcements in real-time.


### 🌟 Live Demo

The application is deployed and live on **Netlify**: [View Website](https://codifyeducation.com/)



## ✨ Features

### 🌓 **Dark Mode Toggle**
- Seamless light/dark theme switching with smooth transitions
- Persistent theme preference using `localStorage`
- Automatic detection of system color scheme preferences
- Consistent theming across all pages

### 📢 **Dynamic Announcements System**
- Week-by-week course announcements with smooth fade transitions
- Interactive navigation between announcement periods
- Automatic assignment button generation based on announcement data
- Clean, user-friendly interface with "older" and "newer" navigation

### 📱 **Fully Responsive Design**
- Mobile-first approach ensuring optimal viewing on all devices
- Hamburger menu for mobile navigation
- Flexible grid layouts that adapt to screen sizes
- Touch-friendly interface elements

### 📚 **Comprehensive Course Management**
- **Syllabus Page**: Complete course overview and policies
- **Course Calendar**: 10-week curriculum with linked resources
- **Office Hours**: Schedule and availability information
- **Contact Page**: Multiple communication channels
- **Assignment Portal**: Direct links to GitHub Classroom assignments

### 🎨 **Modern UI/UX**
- Clean, professional design with intuitive navigation
- Custom typography using Google Fonts (Work Sans, Roboto)
- Consistent color scheme and spacing
- Smooth animations and transitions
- Accessible design following WCAG guidelines

### ⚡ **Performance Optimized**
- Lightweight codebase with minimal dependencies
- Fast load times with optimized assets
- Efficient DOM manipulation
- No external frameworks (Vanilla JavaScript)



## 🛠 Technologies

### Core Technologies
- **HTML5** - Semantic markup for better SEO and accessibility
- **CSS3** - Modern styling with Flexbox and Grid layouts
- **JavaScript (ES6+)** - Dynamic functionality and interactivity

### Key Techniques & Patterns
- **Local Storage API** - Theme persistence across sessions
- **DOM Manipulation** - Dynamic content rendering
- **Event Handling** - User interaction management
- **Responsive Web Design** - Mobile-first CSS media queries
- **CSS Custom Properties** - Theme variables for maintainability
- **Version Control** - Git and GitHub for source control

### Development & Deployment
- **Netlify** - Continuous deployment from GitHub repository
- **Git** - Version control and collaboration
- **Visual Studio Code** - Development environment

---

## 📁 Project Structure

```
Codify-Education-Website/
├── src/
│   ├── index.html              # Homepage with announcements and calendar
│   ├── syllabus.html           # Course syllabus and policies
│   ├── office-hours.html       # Office hours schedule
│   ├── contact.html            # Contact information
│   ├── assignments/
│   │   └── project1.html       # Assignment details page
│   ├── scripts/
│   │   ├── dark-mode.js        # Theme toggle functionality
│   │   └── announcements.js    # Dynamic announcement system
│   └── styles/
│       ├── global.css          # Shared styles across pages
│       ├── index.css           # Homepage specific styles
│       ├── syllabus.css        # Syllabus page styles
│       ├── office-hours.css    # Office hours page styles
│       └── contact.css         # Contact page styles
└── README.md                   # Project documentation
```


## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Basic understanding of HTML/CSS/JavaScript (for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fernando-Cal/Codify-Education-Website.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Codify-Education-Website
   ```

3. **Open the website**
   - Simply open `src/index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server src -p 8000
     ```
   - Visit `http://localhost:8000` in your browser

### Usage

- **Navigate** using the top navigation bar to explore different sections
- **Toggle Dark Mode** by clicking the sun/moon icon in the navigation
- **Browse Announcements** using the "older" and "newer" buttons on the homepage
- **Access Assignments** by clicking assignment buttons or calendar links
- **View Course Schedule** in the calendar table on the homepage



## 🌐 Deployment

This project is deployed on **Netlify** with continuous deployment from the GitHub repository.

### Deployment Features:
- ✅ Automatic deployments on git push
- ✅ HTTPS enabled by default
- ✅ Custom domain support
- ✅ Instant rollbacks if needed
- ✅ Deploy previews for pull requests

---

### Deploy Your Own

1. Fork this repository
2. Sign up for [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your forked repository
5. Set build settings:
   - **Build command:** Leave empty
   - **Publish directory:** `src`
6. Click "Deploy site"




