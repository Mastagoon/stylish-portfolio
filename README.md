Open source configurable portfolio project

# Features
- Ability to dynamically add projects	to the portfolio
- Fully resposive, mobile friendly design
- Easy to edit and extend

# Screenshots
![Alt text](/screenshots/sc1.png?raw=true "Hero Section")
<br>
![Alt text](/screenshots/sc2.png?raw=true "Example Project Showcase")

# Getting Started
- To get started, just clone the repository and run `npm install && npm run dev`:
```
npm install
npm run dev
```
Using yarn:
```
yarn
yarn dev
```

### 1- Edit data/constants.ts to add your information
Example config:
```
{
  logo: "Logo.svg",
  name: "John Doe",
  techs: [
    "Javascript",
    "Typescript",
    "React",
    "Next.JS",
    "Figma",
    "HTML",
    "CSS",
    "TailwindCSS",
    "ReactNative",
    "Electron",
  ],
  mail: "test@gmail.com", // for contact form
  social_media: {
    github: "https://github.com/mastagoon",
    linkedin: "https://www.linkedin.com/in/mastagoon/",
    messenger: "https://m.me/sahal.omar0",
  },
}
```

### 2- Add your projects to data/projects.ts
Example project:
```
  {
    title: "Example Project",
    year: 2020,
    thumbnail: "example_project_thumbnail.jpg",
    images: [
      {
        image: "example_project1.jpg",
        alt: "Example Project",
        caption: "Some Interface",
      },
      {
        image: "example_project2.jpg",
        alt: "Example Project",
        caption: "Dashboard",
      },
    ],
    info: [
      {
        infoTitle: "What is it?",
        infoText:
          "This is an example project. It is a project that is meant to be used as a template for new projects.",
      },

      {
        infoTitle: "Who is it for?",
        infoText:
          "This is an example project. It is a project that is meant to be used as a template for new projects.",
      },
      {
        infoTitle: "What did I do?",
        infoText:
          "This is an example project. It is a project that is meant to be used as a template for new projects.",
      },
      {
        infoTitle: "Review",
        infoText: `"Cool Project." - Mastagoon, Manager`,
      },
    ],
    github: "https://github.com/mastagoon",
    design: "https://www.figma.com/file/ZXyk5ZzWlBaxbuIHAoEYES/Portfolio",
  },
```

# How to configure the contact me form
This project uses nodemailer to send mails from the contact form. 
This needs you to provider an email and password for the account used to send the messages.
To configure a gmail account, follow the instructions below:
1. [Login to your gmail account](https://gmail.com)
2. From your "Manage My Google Account" screen, find Sign-in & security > Signing in to Google > App Passwords
3. Create and copy the app password, then copy and rename the .env file `cp .example.env .local.env` and configure it as shown below
```
EMAIL_ADDRESS=text@gmail.com
EMAIL_PASSWORD=somepw
EMAIL_HOST=smtp.gmail.com
```

# Building and deployment
Build to static files using `npm run build` or `yarn build`, you may then [deploy to vercel](https://nextjs.org/docs/deployment) or any hosting service of your choice. Note that the contact form uses a server function to work.
