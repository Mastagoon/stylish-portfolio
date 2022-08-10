import { Project } from "../types"

const projects: Project[] = [
  {
    title: "Example Project",
    year: 2020,
    thumbnail: "example_project_thumbnail.png",
    images: [
      {
        image: "example_project1.png",
        alt: "Example Project",
        caption: "Some Interface",
      },
      {
        image: "example_project2.png",
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
]

export default projects
