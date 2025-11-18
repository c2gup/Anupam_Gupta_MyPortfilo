# Experience Management Guide

## How to Add New Work Experience

To add new work experience to your portfolio, edit the `src/data/experienceData.json` file and add a new experience object following this structure:

```json
{
  "id": 3,
  "company": "Company Name",
  "position": "Your Job Title",
  "duration": "X Months",
  "startDate": "YYYY-MM",
  "endDate": "YYYY-MM",
  "type": "Full-time | Part-time | Internship | Contract | Freelance",
  "location": "Remote | On-site | Hybrid | City, Country",
  "description": "Brief description of your role and responsibilities",
  "achievements": [
    "Achievement 1 with specific metrics if possible",
    "Achievement 2 describing impact",
    "Achievement 3 showing growth or learning"
  ],
  "technologies": [
    {
      "name": "Technology Name",
      "icon": "technology-icon-key"
    }
  ],
  "companyLogo": "company-logo-key",
  "status": "current | completed",
  "category": "Industry or Department Category"
}
```

## Available Technology Icons

The following technology icons are available in `src/utils/projectIcons.js`:

- react, nodejs, javascript, typescript, python
- html5, css3, mongodb, postgresql, mysql
- aws, docker, git, nextjs, express
- And many more...

## Current Experience Template

Your current experiences include:

1. **HealthMudraa** - Full Stack Developer Intern (5 months)
2. **Tech Solutions Inc** - Junior Developer (9 months - current)

## Tips for Writing Experience Entries

### Company

- Use the official company name
- Ensure correct spelling and capitalization

### Position

- Use your official job title
- Be specific (e.g., "Frontend Developer" vs "Developer")

### Duration & Dates

- Use consistent date format (YYYY-MM)
- Calculate duration accurately
- Set status to "current" for ongoing roles

### Description

- Keep it concise but informative
- Focus on your role and key responsibilities
- Mention the industry or domain

### Achievements

- Use specific metrics when possible (e.g., "improved performance by 25%")
- Focus on impact and results
- Include both technical and soft skills achievements
- Limit to 3-6 key achievements per role

### Technologies

- List technologies actually used in the role
- Use official technology names
- Ensure the icon exists in projectIcons.js

### Categories

Use relevant categories like:

- Software Development
- Web Development
- Healthcare Technology
- E-commerce
- Fintech
- Education Technology

## Experience Card Features

The experience cards display:

- Company logo placeholder with first letter
- Position and company name
- Current/completed status indicator
- Duration and employment type
- Location information
- Role description
- Key achievements list
- Technology stack with icons
- Industry/category tag
- Timeline visualization

## Styling Customization

To modify the experience card appearance:

1. Edit `src/components/Experience/ExperienceCard.jsx`
2. Modify colors, spacing, and layout
3. Update animations and hover effects
4. Customize the timeline design in `Experience.jsx`

## Filter Options

The experience section includes filters for:

- All Experience
- Full-time
- Part-time
- Internship
- Contract
- Freelance

## Future Enhancements

Consider adding:

- Company logos (replace placeholder with actual logos)
- Downloadable certificates or recommendation letters
- Skills progression timeline
- Project links related to each experience
- Testimonials or recommendations
