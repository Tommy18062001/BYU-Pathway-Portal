import React from 'react'

function Course({ name, rank, grade }) {
    return (
        <div className="course">
            <p>{name}</p><span>{rank} | {grade}</span>
        </div>
    )
}

export default Course
