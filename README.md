# 🚀 Ayush Chauhan – Civil Engineer & Data Scientist Portfolio

Welcome to my personal portfolio website repository. This site showcases my work, research, skills, blog posts, and contact information in a modern, professional, mobile-friendly format with light/dark theme support.

---

## 🌟 Live Demo

**[🔗 View the Live Site](https://ayushchauhan485.github.io/portfolio)**  

---

## 📂 Table of Contents

- [Features](#features)
- [Site Structure](#site-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Editing Content](#editing-content)
- [Customization](#customization)
- [Deployment](#deployment)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

---

## 🚀 Features

✅ Multi-page layout with smooth navigation  
✅ Light and dark mode toggle with local preference saving  
✅ Responsive design for mobile and desktop  
✅ Animated sections with smooth transitions  
✅ Dynamic data from JavaScript objects for projects/blog  
✅ Particle hero background  
✅ Accessible semantic HTML with ARIA  
✅ SEO-friendly meta tags and OpenGraph previews  
✅ Easy to update content

---

## 📦 Site Structure

Your site is structured as a **single-page application** with multiple hash-based "pages" inside `index.html`, plus dynamic content injection via JavaScript.

### Main Sections
- **Home** (`#home`)  
  - Hero section with greeting, roles, CTA buttons
  - About preview
  - Featured projects
  - Blog teasers
  - Contact CTA
- **About** (`#about`)  
  - My Story
  - Career Timeline
  - Certifications
- **Projects** (`#projects`)  
  - Filterable grid of projects
  - Dynamic detail views with modal/pop-out
- **Blog** (`#blog`)  
  - List of articles with "Read More"
  - Modal or subview for full articles
- **Services** (`#services`)  
  - List of offered services
- **Contact** (`#contact`)  
  - Contact form with validation

### Code and Assets
- `index.html` – Contains all HTML sections and routing
- `style.css` – All theming, layout, variables (supports dark mode)
- `app.js` – Dynamic data and interactivity (projects, blogs, theme, routing)
- `assets/` – Images, icons, fonts, optional extra assets

---

## 🗂 Folder/File Overview

.
├── index.html # Single HTML file with all sections
├── style.css # CSS with variables, light/dark mode, layout
├── app.js # JS for dynamic data and routing
└── assets/ # Optional images, icons, fonts

yaml
Copy
Edit

---

## ⚙️ Installation

No build tools required.  
It's **pure HTML/CSS/JS** – just clone and open.

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Open index.html in your browser.

✅ That's it!

🧑‍💻 Usage
Optional local server for live reload:

bash
Copy
Edit
# Python 3
python -m http.server
Or:

bash
Copy
Edit
npx serve .
✍️ Editing Content
This project is designed to be easily editable. Here’s how to update each section:

🔹 1. Hero Section
Edit directly in index.html:

html
Copy
Edit
<h1 class="hero__title">Ayush Chauhan</h1>
<h2 class="hero__subtitle">Civil Engineer & Data Scientist</h2>
<p class="hero__description">Your description here</p>
Animated roles in app.js:

javascript
Copy
Edit
const roles = [
  "Civil Engineer & Data Scientist",
  "Infrastructure Data Analyst",
  "GIS Solutions Expert"
];
🔹 2. About Section
In index.html:

html
Copy
Edit
<div id="about" class="page">...</div>
Includes:

My Story

Career Timeline

Certifications

✅ Edit these sections directly in the HTML.

🔹 3. Projects
Dynamic content in app.js:

javascript
Copy
Edit
const projectsData = {
  'lake-restoration': {
    title: 'AI-Driven Lake Restoration',
    category: 'Research',
    description: 'Predictive modeling for lake restoration...',
    technologies: ['Python', 'ML', 'GIS'],
    metrics: ['Published Research', 'CISSC 2025']
  },
  ...
};
✅ Add or edit projects here.
✅ Images/icons in /assets/.
✅ "View Details" buttons auto-render modal content from this data.

🔹 4. Blog Posts
Also dynamic in app.js:

javascript
Copy
Edit
const blogData = {
  'smart-infrastructure': {
    title: 'The Future of Smart Infrastructure',
    date: 'Dec 15, 2024',
    content: '<p>...</p>'
  },
  ...
};
✅ Add or edit blog posts here.
✅ HTML-supported content.

🔹 5. Certifications
Static in index.html:

html
Copy
Edit
<div class="cert-item">
  <h4>Microsoft Power BI Data Analyst</h4>
  <p>Microsoft</p>
</div>
✅ Just add or edit in the HTML.

🔹 6. Services
Static section in index.html:

html
Copy
Edit
<section id="services">...</section>
✅ Edit directly.

🔹 7. Contact
Form in index.html:

html
Copy
Edit
<form id="contactForm">
  <input type="text" name="name">
  <input type="email" name="email">
  <textarea name="message"></textarea>
</form>
✅ Includes validation in app.js.
✅ You can connect it to EmailJS, Formspree, or your own backend.

🔹 8. Theme
Light/Dark toggle:

Managed via ThemeManager in app.js

Colors and variables in style.css

✅ Fully customizable:

css
Copy
Edit
--color-primary: rgba(33, 128, 141, 1);
🎨 Customization
Change colors in style.css using variables.

Update typography in style.css.

Add/remove sections in index.html.

Replace images/icons in assets/.

Modify animations and transitions via CSS.

🌐 Deployment
You can deploy for free on:

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

Inspired by modern portfolio layouts

Icons via Emoji / SVG

Fonts via Google Fonts or custom

🪪 License
MIT License.
Feel free to use, modify, and share.

📬 Contact
Email: yourname@example.com

LinkedIn: Ayush Chauhan

Website: https://yourdomain.com

