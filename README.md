# Sahana Patil — Deep Navy & Teal Animated Portfolio

Responsive portfolio built with Next.js, React, Framer Motion, Lucide React and custom CSS.

## Visual direction
- Deep navy background (#081521)
- Teal accent (#16A6A1) and aqua highlights (#8CD9D0)
- Cool-white typography
- Premium minimal layout with subtle scroll reveals, floating hero card, hover effects and animated background orbs
- Responsive desktop and mobile navigation

## Requirements
- Node.js 20.9 or later
- Git
- VS Code

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Before publishing
1. Replace `YOUR_EMAIL@example.com` in `app/page.jsx` with your professional email.
2. Replace the LinkedIn placeholder URL with your actual profile URL.
3. Add your portrait as `public/profile.jpg` and update the hero image markup.
4. Replace profile-level GitHub links with exact project repository URLs.
5. Add only accurate work experience, project outcomes and completed certifications.

## Add your photograph
Put your image at `public/profile.jpg`. In `app/page.jsx`, replace the `photo-placeholder` div inside `photo-frame` with:
```jsx
<img className="profile-photo" src="/profile.jpg" alt="Sahana Patil" />
```
Add this to `app/globals.css`:
```css
.profile-photo {
  width: 100%;
  height: calc(100% - 40px);
  margin: 10px 0;
  object-fit: cover;
  object-position: center 35%;
}
```

## Build check
```bash
npm run build
```

## Deploy to Vercel
1. Create a GitHub repository named `sahana-portfolio`.
2. Push this project to GitHub.
3. Sign in at https://vercel.com using GitHub.
4. Select Add New → Project and import the repository.
5. Keep the detected Next.js settings and click Deploy.
6. Test the public URL on desktop and mobile.


## Internship
Added the four-month DSR Email Automation internship at Toyota Kirloskar Motor Pvt. Ltd. Certifications remain hidden. Add exact CGPAs when available.


## Confirmed education and internship details
- MCA, PES University, Bengaluru — CGPA: 8.27
- BCA, Global Innovative College, Hubli — CGPA: 8.88
- Toyota Kirloskar Motor Pvt. Ltd., DSR Email Automation internship — February 2026 to June 2026 (4 months, as provided).
