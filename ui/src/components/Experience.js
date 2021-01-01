import React, { useState } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { Code, Coffee, Tool } from 'react-feather'

const contentStyle = { background: 'var(--secondary-color)', boxShadow: 'none'}
const contentArrowStyle = { border: 'none'}
const iconStyle = { background: 'var(--primary-color)', boxShadow: 'none', color: '#fff' }

export default () => {
  const [curr, setCurr] = useState(0)

  const shouldShowContent = index => index === curr

  return(
  <div className="experience-container">
    <VerticalTimeline animate={false} layout="1-column">
      <VerticalTimelineElement
        className="experience-timeline-element"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        icon={<Code />}
        position="right"
        date="Sep 2018 - Present">
          <div className="experience-element-title" onClick={() => setCurr(0)}>
            <h3 className="vertical-timeline-element-title">Software Engineer (AI/ML)</h3>
            <h4 className="vertical-timeline-element-subtitle">Seismic</h4>
          </div>
          {
            shouldShowContent(0) ?
              (<div className="vertical-timeline-bullets">
                <ul>
                  <li>
                    AI/ML Team
                    <ul>
                      <li>
                      Enabled data scientists to quickly go from scratch research note-book work to deployable, production level code.
                      </li>
                      <li>
                        Developed streaming and batch processing systems to provide data for analysis.
                      </li>
                      <li>
                        Created Seismic's internal A/B Testing Experimental Framework.
                      </li>
                      <li>
                        Developed production content recommendation system. Worked with data scientists to create
                        recommenders such as 'Popular' and 'Engaging' content.
                      </li>
                    </ul>
                  </li>
                  <li>
                    CRM Services Team
                    <ul>
                      <li>First</li>
                    </ul>
                  </li>
                </ul>
              </div>) : null
          }
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="experience-timeline-element"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        icon={<Coffee />}
        position="right"
        date="Jun 2018 - Sep 2018">
          <div className="experience-element-title" onClick={() => setCurr(1)}>
            <h3 className="vertical-timeline-element-title">Software Engineer Intern (DevOps)</h3>
            <h4 className="vertical-timeline-element-subtitle">Seismic</h4>
          </div>
          {
            shouldShowContent(1) ?
              (<div className="vertical-timeline-bullets">
                <ul>
                  <li>
                    Built a full stack web application in React and Node which acted as a internal DevOps
                    dashboard. The dashboard provided insights such as pipeline health and lead time for
                    customer bugs.
                  </li>
                  <li>
                    Assisted the QA team to build out a new testing automation framework written in Robot that
                    was fully integrated into our CICD Jenkins Pipelines.
                  </li>
                </ul>
              </div>) : null
          }
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="experience-timeline-element"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        icon={<Coffee />}
        position="right"
        date="Jun 2017 - Sep 2017">
          <div className="experience-element-title">
            <h3 className="vertical-timeline-element-title">QA Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BrightSign LLC</h4>
          </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="experience-timeline-element"
        contentStyle={contentStyle}
        contentArrowStyle={contentArrowStyle}
        iconStyle={iconStyle}
        icon={<Tool />}
        position="right"
        date="Aug 2015 - May 2018">
          <div className="experience-element-title">
            <h3 className="vertical-timeline-element-title">Online Course Builder</h3>
            <h4 className="vertical-timeline-element-subtitle">UC San Diego Extension</h4>
          </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  )
}