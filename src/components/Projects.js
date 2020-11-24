import React, { useState }  from 'react'
import Project from './Project'
import TaLogo from '../assets/unearthed.png'
import TaImage from '../assets/taWebsite.jpg'
import DisneyLogo from '../assets/disney.png'
import DisneyImage from '../assets/plan_gen.png'
import VrLogo from '../assets/vrcane.jpg'
import VrImage from '../assets/vrcane.PNG'
import WebLogo from '../assets/react.png'
import WebImage from '../assets/vscode.PNG'
import FitImage from '../assets/fit2.png'

import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'

const projects = [
  {
    name: "This Website!",
    logo: WebLogo,
    image: WebImage,
    imageOrientation: 'horizontal',
    bullets: [
      "This website was built using React and Redux!"
    ]
  },
  {
    name: "FellowshipIt",
    logo: WebLogo,
    image: FitImage,
    imageOrientation: 'horizontal',
    bullets: [
      "This website was built using React and Redux!"
    ]
  },
  {
    name: "Smart Park Disney",
    logo: DisneyLogo,
    image: DisneyImage,
    imageOrientation: 'vertical',
    bullets: [
      "Individually developed an Android App available on the play store.",
      `Used Firebase and Google Directions API to design the Smart Plan feature which generates an optimized plan using
      fast passes, ride wait times, average wait times, and location.`
    ],
  },
  {
    name: "Treacherous Adventure",
    url: "https://treacherous-adventure.web.app/",
    logo: TaLogo,
    image: TaImage,
    imageOrientation: 'vertical',
    bullets: [
      "Built and launched the official Treacherouse Adventure website!",
      "Used HTML, CSS, Javascript, and Bootstrap front-end framework."
    ],
  },
  {
    name: "VRcane",
    logo: VrLogo,
    image: VrImage,
    imageOrientation: 'horizontal',
    bullets: [
      "Developed a multiplayer virtual reality first person game for the Google Daydream Headset",
      `Worked in a team as algorithm specialist to design functions and optimize algorithms to have VRcane running
      properly and efficiently`
    ]
  }
]

const Projects = ({}) => {
  const [index, setIndex] = useState(0)
  const next = () => {
    let i = index + 1
    if (i >= projects.length) {
      setIndex(0)
    }
    else {
      setIndex(i)
    }
  }

  const prev = () => {
    let i = index - 1
    if (i < 0) {
      setIndex(projects.length - 1)
    }
    else {
      setIndex(i)
    }
  }

  return (
    <div className="projects-container">
      <ArrowLeftCircle className="project-prev-button" size={50} onClick={prev} />
      <Project project={projects[index]}/>
      <ArrowRightCircle className="project-next-button" size={50} onClick={next} />
    </div>
  )
}

export default Projects