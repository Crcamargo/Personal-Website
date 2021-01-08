import React from 'react'
import { Download } from 'react-feather'

export default ({ downloadResume }) => (
    <div onClick={downloadResume} className="home-resume-button-container">
        <Download className="icon" size={30}/>
        <h2>Resume</h2>
    </div>
)