import React from 'react'

function Progression({title}) {
    return (
        <div className="progression" >
            <p>{title}</p>
            <div className="progress-bar"></div>
        </div>
    )
}

export default Progression
