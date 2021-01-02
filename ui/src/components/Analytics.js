import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { connect } from 'react-redux'
import { firebase } from '@firebase/app'

require('firebase/firestore')

firebase.initializeApp({
  apiKey: 'AIzaSyBzcYlzBvTZVyJw5eib7aLSNGYXpqlAU5g',
  authDomain: 'cristian-camargo.firebaseapp.com',
  projectId: 'cristian-camargo'
});

const db = firebase.firestore()
const maxNavRows = 10
const shardsDocumentId = 'FhstJMJq47MCjYVAZVOc'
const COLORS = ['#BA5B50', '#415a77', '#546E7A', '#757575'];
const renderLabel = entry => entry.name

function getDistribution(data, dataKey) {
  let dist = {}

  data.forEach(d => {
    let name = d.browser[dataKey]

    if (!dist[name]) {
      dist[name] = {
        name,
        value: 1
      }
    }
    else {
      dist[name].value += 1
    }
  })

  return Object.keys(dist).map(k => dist[k])
}

const Analytics = ({ navigationClicks }) => {
  const [totalWebViews, setTotalWebView] = useState(0)
  const [totalResumeDownloads, setTotalResumeDownloads] = useState(0)
  const [browserDistribution, setBrowserDist] = useState([])
  const [osDistribution, setOsDist] = useState([])

  useEffect(() => {
    db.collection('analytics').doc(shardsDocumentId).collection('shards').onSnapshot(c => {
      let totalWebViews = 0
      let totalResumeDownloads = 0

      c.docs.forEach(doc => {
        let data = doc.data()
        totalWebViews += data.totalViews
        totalResumeDownloads += data.totalResumeDownloads
      })

      setTotalWebView(totalWebViews)
      setTotalResumeDownloads(totalResumeDownloads)
    })

    db.collection('events').doc('raw').collection('views').onSnapshot(c => {
      let data = c.docs.map(doc => doc.data())

      setBrowserDist(getDistribution(data, 'name'))
      setOsDist(getDistribution(data, 'os'))
    })
  }, [])

  return(
    <div className="analytics-container">
      <div className="analytics-metric-container">
        <span className="analytics-metric-title">Total Visits</span>
        <span className="analytics-metric">{totalWebViews}</span>
      </div>
      <div className="analytics-metric-container">
        <span className="analytics-metric-title">Total Resume Downloads</span>
        <span className="analytics-metric">{totalResumeDownloads}</span>
      </div>
      <div className="analytics-metric-container">
        <span className="analytics-metric-title">Browser Distribution</span>
        <PieChart width={500} height={200}>
          <Tooltip />
          <Pie data={browserDistribution} dataKey='value' label={renderLabel}>
            {browserDistribution.map((val, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
          </Pie>
        </PieChart>
      </div>
      <div className="analytics-metric-container">
        <span className="analytics-metric-title">OS Distribution</span>
        <PieChart width={500} height={200}>
          <Tooltip />
          <Pie data={osDistribution} dataKey='value' label={renderLabel}>
            {osDistribution.map((val, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
          </Pie>
        </PieChart>
      </div>
      <div className="analytics-metric-container">
        <span className="analytics-metric-title">Your Page Clicks</span>
        <table>
          <tr>
            <th>Button Clicked</th>
            <th>Occured At</th>
          </tr>
          <tbody>
          {
            navigationClicks.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{val.itemClicked}</td>
                  <td>{val.occurredAt.toString()}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
)}

const mapStateToProps = (state) => {
  let end = state.events.clicks.length
  let start = Math.max(0, end - maxNavRows)

  const navigationClicks = state.events.clicks.slice(start, end)

  return {
    navigationClicks,
  }
}

export default connect(mapStateToProps)(Analytics)