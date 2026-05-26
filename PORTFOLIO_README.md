# Ivan Jerad Manamperi - Portfolio Website

## Overview
A professional, role-agnostic portfolio website showcasing Ivan's end-to-end product development capabilities—from planning and design to development and testing.

## Key Features

### 1. **Hero Section**
- Large, modern headline: "Ivan Jerad Manamperi"
- Subheading: "Product Builder & Problem Solver"
- Intro copy emphasizing the concept-to-deployment journey
- Call-to-action buttons: "View Projects" and "Download CV"
- Animated gradient background elements

### 2. **About Me**
- 150-word professional summary
- Emphasizes CS background, cross-functional collaboration, and user-centered approach
- Leadership examples (InnovateX, sports coordination) without using role titles
- Quick stats: 4 Full Projects, 5+ Years Experience, Growth Mindset

### 3. **Skills & Technologies**
Organized into **functional areas** (not job titles):
- **Product & Workflow**: Agile, user stories, ClickUp, stakeholder analysis
- **Quality & Usability**: Usability testing, HCI principles, edge case identification
- **Development & Integration**: JavaScript, REST APIs, Firebase, SQL, Git, Vercel
- **Frontend & Interfaces**: HTML5/CSS3, React.js, responsive design
- **Design & Prototyping**: Figma, wireframing, user flows, high-fidelity mockups

Quick reference sections:
- Frontend Stack: HTML5, CSS3, JavaScript, React.js
- Tools: Figma, Git, VS Code, Vercel, Firebase, ClickUp
- Soft Skills: Teamwork, Leadership, Problem-solving, Communication

### 4. **Projects** (4 Case Studies)
Each project blends planning, design, development, and testing naturally:

1. **Micro Skill Builder App**
   - AI-powered communications coach
   - Led requirement gathering & user flows
   - Conducted usability testing
   - Used ClickUp for agile collaboration

2. **Ceylon Gate Travels**
   - Luxury travel platform
   - UI/UX design in Figma
   - Responsive frontend in React
   - REST API integration

3. **Solar Web App**
   - Energy monitoring dashboard
   - User flows & HCI prototyping
   - Collaborated with developers
   - Usability & accessibility testing

4. **Gem Luster E-Commerce App**
   - Gem vendor platform
   - Stakeholder analysis
   - Wireframes & high-fidelity prototypes
   - Incremental SDLC with ClickUp coordination

### 5. **How I Work**
A 4-step methodology without role labels:
1. **Understand & Plan** → Stakeholder interviews, user research, feature prioritization
2. **Design & Validate** → Wireframes, prototypes, usability testing
3. **Build & Integrate** → Frontend development, API integration, performance focus
4. **Test & Refine** → Edge case testing, cross-browser validation, iterative improvement

### 6. **Contact Section**
- Professional CTA: "Let's Build Something Great"
- Contact information: Email, Phone, LinkedIn, GitHub
- Fully functional contact form with:
  - Name, Email, Message fields
  - Form validation
  - Success confirmation message
  - Styled for the gradient background

### 7. **Footer**
- Copyright notice
- Quick links (Home, About, Skills, Projects, Contact)
- Social links (LinkedIn, GitHub, Email)
- Tagline: "Crafted with passion and built to last"

## Design System

### Color Palette
- **Primary**: Blue (#2563EB) - CTA buttons, accents
- **Secondary**: Green (#10B981) - Highlights
- **Accent**: Purple (#8B5CF6) - Gradient elements
- **Neutrals**: White, grays, dark gray for text
- **Background**: Clean white with subtle gradients

### Typography
- **Display**: Plus Jakarta Sans (headline font)
- **Body**: Plus Jakarta Sans (body text)
- **Scale**: 5xl-7xl headings, responsive typography

### Components
- Modern cards with borders and subtle shadows
- Glassmorphism effects on contact section
- Animated blob backgrounds
- Hover effects on interactive elements
- Responsive grid layouts

## Technical Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Fonts**: Google Fonts (Plus Jakarta Sans)
- **Icons**: Lucide icons for visual elements
- **Forms**: Client-side form handling with React hooks
- **Animation**: CSS keyframes for blob animations, Tailwind animations

## File Structure

```
/app
  /layout.tsx          # Root layout with metadata & fonts
  /page.tsx            # Main portfolio page
  /globals.css         # Global styles, color tokens, animations

/components/portfolio
  /hero.tsx            # Hero section
  /about.tsx           # About me section
  /skills.tsx          # Skills & technologies
  /projects.tsx        # Projects showcase
  /how-i-work.tsx      # 4-step methodology
  /contact.tsx         # Contact form & information
  /footer.tsx          # Footer with links

/lib
  /portfolio-content.ts # All portfolio text & data
```

## Content Highlights

All content is **fact-based and traceable** to Ivan's resume:
- Real education (UOW, IIT Sri Lanka)
- Actual projects (Micro Skill Builder, Ceylon Gate, Solar Web App, Gem Luster)
- Verified tools and technologies
- Leadership roles (InnovateX Marketing Lead, Leo Club, Sports Coordinator)
- No role titles used—everything described through action verbs and functional responsibilities

## Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly buttons and forms
- Smooth scrolling experience
- Full-width sections with max-width containers

## Deployment

Ready to deploy to Vercel:
```bash
npm run build
vercel deploy
```

## Contact Information

- **Email**: ivanjerald00@gmail.com
- **Phone**: +94 740 779 470
- **LinkedIn**: linkedin.com/in/ivan-manamperi
- **GitHub**: github.com/IvanJManh
