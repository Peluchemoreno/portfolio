export const skills = [
  {
    id: 0,
    name: 'Vanilla JS',
    image: new URL('../assets/javascript.svg', import.meta.url).href
  },
  {
    id: 1,
    name: 'React.js',
    image: new URL('../assets/react.svg', import.meta.url).href
  },
  {
    id: 2,
    name: 'HTML5',
    image: new URL('../assets/html.svg', import.meta.url).href
  },
  {
    id: 3,
    name: 'CSS3',
    image: new URL('../assets/css.svg', import.meta.url).href
  },
  {
    id: 4,
    name: 'Node.js',
    image: new URL('../assets/node.svg', import.meta.url).href
  },
  {
    id: 5,
    name: 'Git',
    image: new URL('../assets/git.svg', import.meta.url).href
  },
  {
    id: 6,
    name: 'Figma',
    image: new URL('../assets/figma.svg', import.meta.url).href
  },
  {
    id: 7,
    name: 'Postman',
    image: new URL('../assets/postman.svg', import.meta.url).href
  },
  {
    id: 8,
    name: 'Linux',
    image: new URL('../assets/linux.svg', import.meta.url).href
  },
  {
    id: 9,
    name: 'Python',
    image: new URL('../assets/python.svg', import.meta.url).href
  },
  {
    id: 10,
    name: 'Mongo DB',
    image: new URL('../assets/mongo.svg', import.meta.url).href
  },
]

export const projects = [
  {
    id: 0,
    name: 'Pokedex',
    image: new URL('../assets/project-screenshots/pokedex-demo.gif', import.meta.url).href,
    githubLink: 'https://github.com/Peluchemoreno/pokedex',
    liveDemoLink: 'https://peluchemoreno.github.io/pokedex/',
    description: `A responsive Pokedex web app, that let's you keep track of the stats of your favorite pokemon. The technologies I used to build this were Vanilla JS, the Pokemon API, and Bootstrap CSS`
  },
  {
    id: 1,
    name: 'Around the US',
    image: new URL('../assets/project-screenshots/atus.gif', import.meta.url).href,
    githubLink: 'https://github.com/Peluchemoreno/se_project_aroundtheus',
    liveDemoLink: 'https://peluchemoreno.github.io/se_project_aroundtheus/',
    description: `A responsive web app that allows users to post their favorite pictures of locations that they've been to, like the pictures they have added, and change their profile information. The technologies I used to build this were Vanilla JS with emphasis on OOP, and a RESTful API that allows the data to be persistent.`
  },
  {
    id: 2,
    name: 'Finance Tracker',
    image: new URL('../assets/project-screenshots/finance.gif', import.meta.url).href,
    githubLink: 'https://github.com/Peluchemoreno/finance',
    liveDemoLink: 'https://peluchemoreno.github.io/finance/#',
    description: `A responsive web app that allows employees to keep track of their finances by taking inventory of the purchases they made, as well as track how much their paycheck will be with taxes already calculated. The technologies I used to build this were Vanilla JS, again, with emphasis on OOP principles. There is no database connected to this app.`
  },
  {
    id: 3,
    name: 'Triple Peaks Coffee Shop',
    image: new URL('../assets/project-screenshots/triple-peaks-coffee.gif', import.meta.url).href,
    githubLink: 'https://github.com/Peluchemoreno/se_project_coffeeshop',
    liveDemoLink: 'https://peluchemoreno.github.io/se_project_coffeeshop/',
    description: `A static landing page for a fictional coffee shop called Triple Peaks. I built this project using HTMl and CSS, while focusing on layout construction and practicing positioning.`
  },
]