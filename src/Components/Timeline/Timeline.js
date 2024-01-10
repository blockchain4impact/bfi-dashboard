import React from 'react'
import "../Timeline/Timeline.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Collapse from '../Collapse/Collapse';
import ProgressBar from '../ProgressBar/ProgressBar';
import TaskCards from '../TaskCards/TaskCards';
import { cardData } from '../Home/Home';
import downarrow from "../../Assets/images/downarrow.png";
import { Progress } from 'antd';

export default function Timeline() {
  const paths = ["/bri", "/org", "/dfs"]
  const week = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  return (
    <div className='timeline'>

      <div className='timeline-head'>
        <div className='timeline-tags'>
          <h2 style={{ color: "#232360" }}>Timeline</h2>
          <p className='timeline-tag tag'>Today</p>
          <p className='timeline-date-tag tag'><LeftOutlined />&nbsp; Nov, 22, 2023 &nbsp;<RightOutlined /></p>
        </div>
        <div className='months'>
          <p>Octobar</p> |
          <p>November</p> |
          <p>December</p>
        </div>
      </div>

      <div className='timeline-body'>
        <div className='timeline-body-contenthead' style={window.location.pathname === "/biome" ? { flexDirection: 'column' } : {}}>
          {cardData.map((v) => v.pathname.includes(window.location.pathname) &&
            window.location.pathname !== "/biome" &&
            <>
              <div className='timeline-content'>
                <div style={{ display: 'flex', justifyContent: "space-around" }}>
                  <span>Objective</span>
                  <span>Week</span>
                </div>

                <div className='timeline-tasks'>
                  {v.items.slice(0, 3).map((value) => <Collapse title={value.title} />)}
                </div>
              </div>

              <div className='timeline-week'>
                <table>
                  <tr className='timeline-weeks'>
                    {week.map((v, i) => <td>{v}</td>)}
                  </tr>
                  {v.items.slice(0, 3).map((value) =>
                    <tr style={{ display: 'flex', marginTop: '5vh' }}>
                      <td style={{ width: value.width }}><ProgressBar title={value.title} percentage={value.percentage} bgcolor={value.bgcolor} lightbgcolor={value.lightbgcolor} /></td>
                    </tr>
                  )}
                </table>
                <div className='tab-panel'>
                  <div className='tabs' style={{ backgroundColor: 'rgb(65,105,225)', color: "white" }}>
                    <h5>Quarter 1</h5>
                  </div>
                  <div className='tabs'>
                    <h5>Quarter 2</h5>
                  </div>
                  <div className='tabs'>
                    <h5>Quarter 3</h5>
                  </div>
                  <div className='tabs'>
                    <h5>Quarter 4</h5>
                  </div>
                </div>
              </div>

            </>
          )}

          {cardData.map((v) => v.pathname.includes("/biome") &&
            window.location.pathname !== "/dfs" &&
            window.location.pathname !== "/bri" &&
            window.location.pathname !== "/org" &&
            <>
              {v.items.map((value) =>
                <div className='biome-data'>
                  <div className='biome-task-list' >
                    <div className='biome-task-name'>
                      <p>{value.title}</p>
                    </div>
                    <div className='biome-badge'>
                      <p>{value.badge}</p>
                    </div>
                  </div>

                  <div className='biome-list-progress'>
                    <div className='biome-progress'>
                      <Progress percent={100} showInfo={false}/>
                    </div>
                    <div className='biome-dropdown'>
                      <img src={downarrow} alt='dropdown' />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}

        </div>
      </div>

      <div className='timeline-footer'>
        {cardData.map((data) => data.pathname.includes(window.location.pathname) &&
          window.location.pathname !== "/biome" &&
          data.items.slice(0, 2).map((value) => (
            <TaskCards title={value.title} task={value.names} percentage={value.percentage} />
          ))
        )}
      </div>

    </div>
  )
}
