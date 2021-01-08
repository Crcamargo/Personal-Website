import React from 'react'
import ResumeButton from './ResumeButton'
import NavBarContact from './NavBarContact'

const aboutText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet pharetra metus, nec mollis tortor.
In ultricies tempor sagittis. Maecenas eget velit blandit, congue lorem non, aliquet dolor. In rutrum,
tortor in varius volutpat, libero arcu finibus magna, vel commodo felis sapien ut erat. Quisque a purus
condimentum, dapibus velit ut, eleifend nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
Fusce pharetra mi metus, vel vulputate sem vestibulum et. Integer eleifend ultrices justo, quis euismod metus
varius ac. Quisque dignissim nunc nec lectus venenatis, nec consectetur mi sodales. Sed porta venenatis
purus sed porta. Cras bibendum erat eu sem facilisis pharetra. Sed dui eros, dignissim a arcu non,
volutpat lobortis dolor. Sed volutpat, ex nec ornare dignissim, purus eros luctus sapien, a laoreet nisi
felis sit amet diam. Donec sed dolor sapien. Sed sit amet leo ligula.
`

export default ({ isMobile, downloadResume}) => (
    <div className="home-about-container">
          <h1 className="about-me">About Me</h1>
          <h2 className="name">Cristian Camargo</h2>
          <h3 className="title">Software Engineer</h3>
          <p className="home-about-text">
            {aboutText}
          </p>
          {!isMobile ? null : <ResumeButton downloadResume={downloadResume}/>}
          {!isMobile ? null : <NavBarContact />}
    </div>
)
