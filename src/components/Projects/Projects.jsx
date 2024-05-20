import "./Projects.css"
import Project from "../Project/Project"
import {projects} from '../../utils/constants.js'

export default function Projects(){
  return(
    <section id="projects" className="projects">
      <div className="projects__header">
        <h2 className="projects__header-title">Projects</h2>
      </div>
      <ul className="projects__container">
        {projects.map(project => {
          return <Project key={project.id} image={project.image} title={project.name} githubLink={project.githubLink} liveDemoLink={project.liveDemoLink} description={project.description} />
        })}
      </ul>
    </section>
  )
}