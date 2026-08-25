# amrutha-ravikumar-portfolio

Personal portfolio for Amrutha Ravikumar. AI/ML Engineer, Data Scientist, Applied Researcher.

Built with Next.js 14 and Tailwind CSS.

## Local Setup

git clone https://github.com/Amy-way05/amrutha-ravikumar-portfolio.git
cd amrutha-ravikumar-portfolio
npm install
npm run dev

Open http://localhost:3000
```
app/
  layout.js       Root layout with metadata
  page.js         Main page
  globals.css     Global styles and animations
components/
  Navbar.jsx      Fixed nav with mobile menu
  Hero.jsx        Animated hero with data-point canvas
  About.jsx       Bio and key stats
  Experience.jsx  Work history timeline
  Projects.jsx    Featured project cards
  Skills.jsx      Grouped skill tags
  Publication.jsx Published preprint highlight
  Contact.jsx     CTA and links
```

## Notes

- Drop your resume PDF into `public/Amrutha_Ravikumar_Resume.pdf` for the resume download link.
- Static export is configured in `next.config.mjs` for GitHub Pages compatibility.
- No environment variables required.
