# amrutha-ravikumar-portfolio

Personal portfolio for Amrutha Ravikumar. ML Research Analyst, Data Scientist, published researcher.

Built with Next.js 14, Tailwind CSS, and deployed as a static site.

## Local Setup

```bash
git clone https://github.com/Amy-way05/amrutha-ravikumar-portfolio.git
cd amrutha-ravikumar-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub Pages

1. Push to a GitHub repository.
2. In the repo settings, enable GitHub Pages and set the source to GitHub Actions.
3. Add the Next.js static export GitHub Action, or run `npm run build` and deploy the `out/` folder.

## Structure

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
