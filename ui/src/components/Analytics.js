import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, Tooltip, LineChart, XAxis, YAxis, Line, Legend } from 'recharts'
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

function getName(obj, path) {
  let keys = path.split(".")
  keys.forEach(key => {obj = obj[key]})
  return obj
}

function getDistribution(data, dataKeyPath) {
  let distribution = {}
  data.forEach(d => {
    let name = getName(d, dataKeyPath)
    if (!distribution[name]) {
      distribution[name] = { name, value: 1 }
    }
    else {
      distribution[name].value += 1
    }
  })

  return Object.keys(distribution).map(k => distribution[k])
}

const Analytics = ({ navigationClicks }) => {
  const [totalWebViews, setTotalWebView] = useState(0)
  const [totalResumeDownloads, setTotalResumeDownloads] = useState(0)
  const [browserDistribution, setBrowserDist] = useState([])
  const [osDistribution, setOsDist] = useState([])
  const [latestViews, setLatestViews] = useState([])

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
      setBrowserDist(getDistribution(data, 'browser.name'))
      setOsDist(getDistribution(data, 'browser.os'))
    })

    db.collection('events').doc('raw').collection('views').orderBy('occurredAt').get()
      .then (querySnapshot => {
        const occurredAtToMonth = data => new Date(data["occurredAt"]).toLocaleString('default', {month: 'long'})
        let data = querySnapshot.docs.map(doc => ({month: occurredAtToMonth(doc.data())}))
        setLatestViews(getDistribution(data, 'month'))
    })
    .catch(error => console.log(error))
  }, [])

  let navigationClicksElements = navigationClicks.map((val, i) =>
    <tr key={i}>
      <td>{val.itemClicked}</td>
      <td>{val.occurredAt.toString()}</td>
    </tr>
  )

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
        <span className="analytics-metric-title">Page Visits</span>
        <LineChart width={1000} height={250} data={latestViews}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke={COLORS[0]} />
        </LineChart>
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
            <th>Occurred At</th>
          </tr>
          <tbody>
            {navigationClicksElements}
          </tbody>
        </table>
      </div>
    </div>
)}

const mapStateToProps = (state) => {
  let end = state.clicks.length
  let start = Math.max(0, end - maxNavRows)

  const navigationClicks = state.clicks.slice(start, end)

  return {
    navigationClicks,
  }
}

export default connect(mapStateToProps)(Analytics)