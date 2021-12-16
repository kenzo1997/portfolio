import { useState, useEffect } from 'react'
import Project from "./subComponents/Project"

import arrow from "../img/right-arrow.png"

import '../css/ProjectList.css';

export default function ProjectList(props) {
  const { projectListStyle } = props.info;

  const [projects, setProjects] = useState([])
  const [min, setMin] = useState(0)
  const [max, setMax] = useState()
  const [minDisabled, setMinDisabled] = useState(true)
  const [maxDisabled, setMaxDisabled] = useState(false)

  useEffect(() => {
    fetch('https://api.github.com/users/kenzo1997/repos')
      .then(response => response.json())
      .then(githubProjects => {
        setProjects(githubProjects)
        setMax(githubProjects.length <= 5 ? githubProjects.length : 5)
        setMaxDisabled(githubProjects.length <= 5)
      })
      .catch(err => console.error(err));
  }, [])

  const next = () => {
    setMaxDisabled(max + 5 > projects.length)
    setMinDisabled(!(min - 5 < 5))

    setMax(max + 5 < projects.list ? max + 5 : max + (projects.length - max))
    setMin(min + 5)
  }

  const prev = () => {
    setMinDisabled(min - 5 < 5)
    setMaxDisabled(!(max + 5 > projects.length))

    setMin(min >= 5 ? min - 5 : min - min)
    setMax(max - 5 >= 5 ? max - 5 : max - (projects.length - max) - 1)
  }

  return (
    <div>
      <img src={arrow} id="leftArrow" style={minDisabled ? { display: 'none' } : { display: 'inline' }} onClick={prev} width="50px" height="50px" />
      <h2>Projects</h2>
      <img src={arrow} style={maxDisabled ? { display: 'none' } : { display: 'inline' }} onClick={next} width="50px" height="50px" />
      <div className={projectListStyle}>
        {
          projects.slice(min, max).map(project => {
            return (
              <Project project={project} openModal={props.openModal} />
            );
          })
        }
      </div>
    </div>
  );
}
