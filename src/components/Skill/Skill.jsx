import "./Skill.css"

export default function Skill({title, image}){
  return (
    <li className="skills__skill-card">
    <img src={image} alt="javascript skill card" className="skills__skill-card-image" />
    <p className="skills__skill-card-text">{title}</p>
  </li>
  )
}