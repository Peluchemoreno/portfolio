import './Skills.css'
import Skill from '../Skill/Skill'
import {skills} from '../../utils/constants.js'

export default function Skills(){
  return (
    <section className="skills">
      <div className="skills__header">
        <h2 className="skills__title">My Skills</h2>
      </div>
      <ul className="skills__container">
        {skills.map(skill => {
          return <Skill key={skill.id} title={skill.name} image={skill.image} />
        })}
      </ul>
    </section>
  )
}