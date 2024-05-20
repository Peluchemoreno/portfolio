import "./Project.css"

export default function Project(props){
  return (
    <li className="project">
      <div className="project__content">
        <img className="project__image" src={props.image} alt={props.name} />
        <div className="project__computer-base">

        </div>
      </div>
      <div className="project__description">
        <h3 className="project__title">{props.title}</h3>
        <p className="project__description-text">{props.description}</p>
        <a href={props.liveDemoLink} className="project__button-link" target="_blank">
          <button className="project__button">Demo</button>
        </a>
        <a href={props.githubLink} className="project__button-link" target="_blank">
          <button className="project__button">Github</button>
        </a>
      </div>
    </li>
  )
}