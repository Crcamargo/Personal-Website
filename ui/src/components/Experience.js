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
            <h3 className="vertical-timeline-element-title">Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Seismic</h4>
          </div>
          {
            shouldShowContent(0) ?
              (<div className="vertical-timeline-bullets">
                <ul>
                  <li>
                    Worked with the Data and Analytics Team to develop streaming and batch processing data systems in .Net
                    that wrote data to MSSQL and Snowflake Data Warehouse to make data available for machine learning and analytics.
                  </li>
                  <li>
                    Productionized data scientists’ work by: refactoring Python code into deployable packages; integrating
                    existing Kubernetes hosted docker containers into fully automated CI/CD Jenkins pipelines; and establishing
                    security, logging, and alerting best practices in the AI/ML teams microservices.
                  </li>
                  <li>
                    Created Seismic’s internal A/B testing experiment framework using .Net REST APIs and PostgreSQL, and
                    was responsible for Seismic’s first production homepage A/B testing.
                  </li>
                  <li>
                    Worked on the CRM Services team to refactor Seismic’s legacy, monolith, Predictive Content Application
                    into a microservice which was 10x faster than the original.
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
                    Built a full stack web application in React and Node.js that acted as an internal DevOps dashboard.
                    The dashboard provided insights, such as lead time for customer bugs and a high level overview of
                    Jenkins pipeline health.
                  </li>
                  <li>
                    Assisted the QA team in building out a new testing automation framework written in Robot that
                    was fully integrated into our CICD Jenkins pipelines.
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
          <div className="experience-element-title" onClick={() => setCurr(2)}>
            <h3 className="vertical-timeline-element-title">QA Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">BrightSign LLC</h4>
          </div>
          {
            shouldShowContent(2) ?
              (<div className="vertical-timeline-bullets">
                <ul>
                  <li>
                    Designed and created a windows program in C++ to send and receive commands to an HDMI protocol
                    analyzer to automate video testing.
                  </li>
                  <li>
                    Oversaw and documented HDCP compliance testing for BrightSign players.
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
        icon={<Tool />}
        position="right"
        date="Aug 2015 - May 2018">
          <div className="experience-element-title" onClick={() => setCurr(3)}>
            <h3 className="vertical-timeline-element-title">Online Course Builder</h3>
            <h4 className="vertical-timeline-element-subtitle">UC San Diego Extension</h4>
          </div>
          {
            shouldShowContent(3) ?
              (<div className="vertical-timeline-bullets">
                <ul>
                  <li>
                    Provided technical support for the UCSD Extension Online Learning department.
                  </li>
                  <li>
                    Worked with professors to publish lectures for online use.
                  </li>
                  <li>
                    Assisted students with computer-based and online support inquiries.
                  </li>
                </ul>
              </div>) : null
          }
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
  )
}