import React from 'react'
import "./Graph.css"
import chart from "../../../image/chart.png"

function Graph() {
  return (
    <div className='graph'>
        <div className='activity'>
                <h1>Health Report Documents</h1>
            </div>
    <div className='chart'>
    <img src={chart} />
    </div>

    </div>
  )
}

export default Graph