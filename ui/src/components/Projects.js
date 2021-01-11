import React, { useState }  from 'react'
import Project from './Project'
import TaLogo from '../assets/unearthed.png'
import TaImage from '../assets/taWebsite.jpg'
import DisneyLogo from '../assets/disney.png'
import DisneyImage from '../assets/plan_gen.png'
import VrLogo from '../assets/vrcane.jpg'
import VrImage from '../assets/vrcane.PNG'
import WebLogo from '../assets/react.png'
import WebImage from '../assets/website.png'

import { ArrowLeftCircle, ArrowRightCircle } from 'react-feather'

const projects = [
  {
    name: "This Website!",
    url: "https://github.com/Crcamargo/Personal-Website",
    logo: WebLogo,
    image: WebImage,
    imageOrientation: 'horizontal',
    bullets: [
      "This website was built using React and Redux (You can check the console for state updates)!",
      "Page views, clicks and resume downloads are being tracked and sent to back end for analytics.",
      "This website is being powered by a Google Cloud Function, written in Node.Js."
    ]
  },
  {
    name: "Smart Park Disney",
    url: "https://github.com/Crcamargo/SmartParkDisney/blob/master/app/src/main/java/com/themparksdetermined/smartparkdisney/View/SmartPlanFragment.java",
    urlText: "https://github.com/Crcamargo/SmartParkDisney",
    logo: DisneyLogo,
    image: DisneyImage,
    imageOrientation: 'vertical',
    bullets: [
      "Individually developed an Android app, using Java, that streamlines wait times and park info for Disneyland.",
      `Used Firebase and Google Directions API to design a Smart Plan feature. The Smart Plan feature allows a user
       to select their favorite rides and then generates an optimized plan using fast pass, ride wait time, average wait time, and location data.`
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
    url: "https://youtu.be/1d2FRqKNIU0",
    image: VrImage,
    imageOrientation: 'horizontal',
    bullets: [
      "Developed a multiplayer virtual reality first person game for the Google Daydream Headset",
      `Worked in a team as algorithm specialist to design functions and optimize algorithms to have VRcane running
      properly and efficiently`
    ]
  }
]

const Projects = () => {
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