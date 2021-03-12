import React, {useState} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Course from './Course';
import SchoolIcon from '@material-ui/icons/School';

function Card({header, list}) {
    const [currentState, setCurrentState] = useState("detail-show");
    const [upcomingState, setUpcomingState] = useState("detail-hidden");
    const [pastState, setPastState] = useState("detail-hidden");
    

    const currentCourse = () => {
        if (currentState === "detail-hidden") {setCurrentState("detail-show")}
        else {setCurrentState("detail-hidden")}

        setUpcomingState("detail-hidden");
        setPastState("detail-hidden");
    }

    const upcomingCourse = () => {
        if (upcomingState === "detail-hidden") {setUpcomingState("detail-show")}
        else {setUpcomingState("detail-hidden")}

        setCurrentState("detail-hidden");
        setPastState("detail-hidden");
    }

    const pastCourse = () => {
        if (pastState === "detail-hidden") {setPastState("detail-show")}
        else {setPastState("detail-hidden")}

        setCurrentState("detail-hidden");
        setUpcomingState("detail-hidden");
    }



    return ( list ? (
        <div className="card">
            <p className="card-header">
                <i style={{marginRight:"10px"}}><SchoolIcon/></i>
                {header}
                </p>
            <div className="current-box" onClick={currentCourse}>
                <div className="current">
                    <span><ExpandMoreIcon/></span><p>Current</p>
                </div>
                <div className={currentState}>
                    <Course name="PC 103L - University Skills For English Learners" rank="D" grade="25.50%"/>
                    <Course name="CSPC 101 - Introduction to Programming" rank="F" grade="19.82%"/>      
                </div>
            </div>

            <div className="upcoming-box"onClick={upcomingCourse} >
                <div className="upcoming">
                    <span><ExpandMoreIcon/></span><p>Upcoming</p>
                </div>
                <div className={upcomingState}>
                    <p style={{color:"#0b6891", paddingLeft:"25px", marginTop:"10px"}}>No Courses Assigned Yet</p>
                </div>
            </div>

            <div className="past-box" onClick={pastCourse}>
                <div className="past">
                    <span><ExpandMoreIcon/></span><p>Past</p>
                </div>
                <div className={pastState}>
                    <Course name="PC 101L - Life Skills For English Learners" rank="A" grade="100.50%"/>
                    <Course name="PC 102L - Professional Skills For English Learners" rank="A" grade="100.50%"/>
                </div>
            </div>
        </div>
    ) : 
        <div className="card">
            <p className="card-header">{header}</p>
            <div className="orientation">New Student Orientation</div>
            <div className="dates">2020-2021 Dates and Deadlines</div>
            
        </div>

    )
}

export default Card
