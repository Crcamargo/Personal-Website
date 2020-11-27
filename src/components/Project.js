import React from 'react'

const Project = ({ project }) => (
  <div className="project-container">
    <div className="project-header">
      <img className="project-logo" src={project.logo} alt="Project Logo"/>
      <div className="project-title-container">
        <h1 className="project-title">{project.name}</h1>
        {project.url ? <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a> : null}
      </div>
    </div>
    <div className="project-content-container">
      <img className={`project-image-${project.imageOrientation}`} src={project.image} />
      <ul>
        {project.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
      </ul>
    </div>
  </div>
)

export default Project