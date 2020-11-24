import React from 'react'
import { PieChart, Pie, Cell, LabelList, Tooltip} from 'recharts'
import { connect } from 'react-redux'

const maxNavRows = 10

const synthData = {
  totalWebViews: 3574,
  totalResumeDownloads: 535,
  browserDistribution: [
    {
      name: 'Chrome',
      value: 890
    },
    {
      name: 'FireFox',
      value: 743
    },
    {
      name: 'Other',
      value: 632
    }
  ],
  totalNavigationClicks: [
    {
      name: 'Home',
      value: 123
    },
    {
      name: 'Experience',
      value: 1235
    },
    {
      name: 'Projects',
      value: 4321
    },
    {
      name: 'Analytics',
      value: 2312
    }
  ],
  totalContactClicks: [
    {
      name: 'Email',
      value: 123
    },
    {
      name: 'Phone',
      value: 1235
    },
    {
      name: 'LinkedIn',
      value: 4321
    },
    {
      name: 'Twitter',
      value: 2312
    }
  ]
}

const COLORS = ['#757575', '#BA5B50', '#435892', '#546E7A'];
const renderLabel = entry => entry.name

const Analytics = ({ data, navigationClicks }) => (
  <div className="analytics-container">
    <div className="analytics-metric-container">
      <span className="analytics-metric-title">Total Visits</span>
      <span className="analytics-metric">{data.totalWebViews}</span>
    </div>
    <div className="analytics-metric-container">
      <span className="analytics-metric-title">Total Resume Downloads</span>
      <span className="analytics-metric">{data.totalResumeDownloads}</span>
    </div>
    <div className="analytics-metric-container">
      <span className="analytics-metric-title">Total Navigation Clicks</span>
      <PieChart width={500} height={200}>
        <Tooltip />
        <Pie data={data.totalNavigationClicks} dataKey='value' label={false} >
          {data.totalNavigationClicks.map((val, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
        </Pie>
      </PieChart>
    </div>
    <div className="analytics-metric-container">
      <span className="analytics-metric-title">Total Contact Clicks</span>
      <PieChart width={500} height={200}>
        <Tooltip />
        <Pie data={data.totalContactClicks} dataKey='value' label={false}>
          {data.totalContactClicks.map((val, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
        </Pie>
      </PieChart>
    </div>
    <div className="analytics-metric-container">
      <span className="analytics-metric-title">Browser Distribution</span>
      <PieChart width={500} height={200}>
        <Tooltip />
        <Pie data={data.browserDistribution} dataKey='value' label={false}>
          {data.browserDistribution.map((val, i) => <Cell key={i} fill={COLORS[i % COLORS.length]}/>)}
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
)

const mapStateToProps = (state) => {
  // const greetingClicks = state.events.navItemClicks.filter((e, i) => e.item === "greeting")
  // const experienceClicks = state.events.navItemClicks.filter((e, i) => e.item === "experience")
  // const projectsClicks = state.events.navItemClicks.filter((e, i) => e.item === "projects")
  // const analyticsClicks = state.events.navItemClicks.filter((e, i) => e.item === "analytics")

  let end = state.events.clicks.length
  let start = Math.max(0, end - maxNavRows)

  const navigationClicks = state.events.clicks.slice(start, end)
  
  // const sessionNavClicks = [
  //   {
  //     name: 'Home Page Clicks',
  //     value: greetingClicks.length
  //   },
  //   {
  //     name: 'Experience Page Clicks',
  //     value: experienceClicks.length
  //   },
  //   {
  //     name: 'Projects Page Clicks',
  //     value: projectsClicks.length
  //   },
  //   {
  //     name: 'Analytics Page Clicks',
  //     value: analyticsClicks.length
  //   }
  // ]

  return {
    data: synthData,
    navigationClicks,
    //sessionNavClicks
  }
}

export default connect(mapStateToProps)(Analytics)