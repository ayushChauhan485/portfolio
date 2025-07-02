# 📜 Ayush Chauhan – Civil Engineer & Data Scientist Portfolio

Welcome to my personal portfolio website repository.  
This site showcases my work, research, skills, blog posts, and contact information in a modern, professional, mobile-friendly format with light/dark theme support.

## 🌟 Live Demo

**[🔗 View the Live Site](https://yourdomain.com)**  
*(Replace with your actual domain once deployed)*

---

## 📂 Table of Contents

- [Features](#features)
- [Site Structure](#site-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Editing Content](#editing-content)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

---

## 🚀 Features

✅ Multi-page layout with smooth navigation  
✅ Light and dark mode toggle (with persistent user preference)  
✅ Mobile-friendly, responsive design  
✅ Animated sections with smooth transitions  
✅ Dynamic project and blog data from JavaScript objects  
✅ Particle hero background  
✅ Accessible semantic HTML  
✅ SEO-friendly meta tags and OpenGraph previews  
✅ Easy to update and extend  

---

## 📦 Site Structure

Your site is a **multi-section, multi-page** setup with smooth client-side navigation using hash-based routing and dynamic rendering of content.  

It includes:

### Main Pages
- **Home** (`#home`)  
  - Hero section
  - About preview
  - Featured projects
  - Blog teasers
  - Quick contact link
- **About** (`#about`)  
  - My Story
  - Career Timeline
  - Certifications
- **Projects** (`#projects`)  
  - Filterable grid of projects
  - "View Details" for each project (dynamic modal / subview)
- **Blog** (`#blog`)  
  - List of posts with "Read More" to view full content
- **Services** (`#services`)  
  - Consulting/services offered
- **Contact** (`#contact`)  
  - Contact form with validation

### Assets & Data
- `index.html` – Core structure and section markup
- `style.css` – Design system with variables, dark/light themes, layout
- `app.js` – All dynamic data (projects, blog, theme, navigation)  

---

## 🗂 Folder/File Overview
.
├── index.html # Main HTML with all page sections
├── style.css # Themed, responsive styling
├── app.js # Dynamic data and interactivity
└── assets/ # (Optional) Images, icons, fonts

---

## ⚙️ Installation

No build tools required.  
This is a **vanilla HTML/CSS/JS** site.

1️⃣ Clone the repo:

```bash
git clone https://github.com/yourusername/your-repo-name.git
2️⃣ Open the folder:

bash
Copy
Edit
cd your-repo-name
3️⃣ Open index.html in your browser.

✅ That's it!

🧑‍💻 Usage
You can also serve it locally with a simple web server:

bash
Copy
Edit
# Python 3
python -m http.server
Or use any static server:

bash
Copy
Edit
npx serve .
✍️ Editing Content
🔹 1. Hero Section
Edit directly in index.html:

html
Copy
Edit
<h1 class="hero__title">Ayush Chauhan</h1>
<h2 class="hero__subtitle">Civil Engineer & Data Scientist</h2>
<p class="hero__description">...</p>
🔹 2. About Page
Also in index.html:

html
Copy
Edit
<div id="about" class="page">...</div>
✅ Includes My Story, Timeline, Certifications.

🔹 3. Projects
Dynamic data in app.js:

javascript
Copy
Edit
const projectsData = {
  'lake-restoration': {
    title: 'AI-Driven Lake Restoration',
    ...
  },
  ...
}
✅ To add/edit:

Add new project objects in app.js.

Images in /assets.

"View Details" buttons automatically render the detailed modal view.

🔹 4. Blog Posts
Dynamic data in app.js:

javascript
Copy
Edit
const blogData = {
  'smart-infrastructure': {
    title: 'The Future of Smart Infrastructure',
    ...
  },
  ...
}
✅ To add/edit:

Add new blog objects in app.js.

HTML-supported content fields for rich text.

🔹 5. Certifications
Static HTML in index.html:

html
Copy
Edit
<div class="cert-item">
  <h4>Microsoft Power BI Data Analyst</h4>
  <p>Microsoft</p>
</div>
✅ Just edit in HTML.

🔹 6. Services
Static HTML in index.html under #services.

✅ Add or modify service cards directly.

🔹 7. Contact
Form in index.html:

html
Copy
Edit
<form id="contactForm">...</form>
✅ Includes:

Name

Email

Message

Validation

🔗 You can connect to Formspree, EmailJS, or your backend.

🔹 8. Theme
Light/dark toggle:

Managed in app.js (ThemeManager class)

CSS variables in style.css

✅ Fully editable for your branding.

🎨 Customization
Change primary colors in style.css:

css
Copy
Edit
--color-primary: rgba(33, 128, 141, 1);
Add or remove sections in index.html.

Modify fonts via CSS variables.

Update icons and images in assets/.

🌐 Deployment
You can deploy to:

GitHub Pages

Netlify

Vercel

Surge

Example (GitHub Pages):

bash
Copy
Edit
git add .
git commit -m "Deploy"
git push origin main
Then enable Pages in your repo settings.

🙏 Credits
Designed and coded by Ayush Chauhan

Inspired by modern portfolio templates

Icons via Emoji / SVG

Fonts via Google Fonts or custom

🪪 License
This project is licensed under the MIT License.
Feel free to use, modify, and share.

📬 Contact
Email: yourname@example.com

LinkedIn: Ayush Chauhan

Website: https://yourdomain.com

python
Copy
Edit

