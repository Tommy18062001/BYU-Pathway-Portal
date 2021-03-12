import React, {useState} from 'react';
import BYU from './téléchargement.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PermIdentityIcon from '@material-ui/icons/PermIdentity'

function Header() {

    const [pathwayState, setPathwayState] = useState("hidden");
    const [financeState, setFinanceState] = useState("hidden");
    const [academicState, setAcademicState] = useState("hidden");
    const [usernameState, setUsernameState] = useState("hidden");

    const pathwayConnect = () => {
        if (pathwayState === "hidden") {setPathwayState("show")}
        else {setPathwayState("hidden")}

        setFinanceState("hidden");
        setAcademicState("hidden");
        setUsernameState("hidden");
    }

    const finance = () => {
        if (financeState === "hidden") {setFinanceState("show")}
        else {setFinanceState("hidden")}

        setPathwayState("hidden");
        setAcademicState("hidden");
        setUsernameState("hidden");
    }

    const academicPlanning = () => {
        if (academicState === "hidden") {setAcademicState("show")}
        else {setAcademicState("hidden")}

        setFinanceState("hidden");
        setPathwayState("hidden");
        setUsernameState("hidden");
    }

    const usernameInfo = () => {
        if (usernameState === "hidden") {setUsernameState("show")}
        else {setUsernameState("hidden")}

        setFinanceState("hidden");
        setPathwayState("hidden");
        setAcademicState("hidden");
    }


    return (
        <div className="header">
            {/* Logo */}
            <img src={BYU}  className="logo" alt="BYU logo"/>

            {/* nav */}
            <div className="nav">
                <div className="pathway-box" onClick={pathwayConnect}>
                    <div className="pathway">
                        <p>PATHWAYCONNECT</p><span><ExpandMoreIcon/></span>
                    </div>
                    <div className={pathwayState}>
                        <p>BYU Idaho</p>
                        <p>Pathway Connect</p>
                    </div>
                </div>

                <div className="finance-box" onClick={finance} >
                    <div className="finance">
                        <p>FINANCES</p><span><ExpandMoreIcon/></span>
                    </div>
                    <div className={financeState}>
                        <p>Make a Payment</p>
                        <p>Finance Statement</p>
                    </div>
                </div>

                <div className="academic-box" onClick={academicPlanning} >
                    <div className="academic">
                        <p>ACADEMIC PLANNING</p><span><ExpandMoreIcon/></span>
                    </div>
                    <div className={academicState}>
                        <p>Degree Planner</p>
                        <p>Interest Survey</p>
                    </div>
                </div>

                <div className="resources">
                    <p>RESOURCES</p>
                </div>

                <div className="support">
                    <p>SUPPORT</p>
                </div>
            </div>

            {/* username */}
            <div className="username-box" onClick={usernameInfo}>
                <div className="username">
                    <i><PermIdentityIcon/></i><p>Tommy Sylver</p><span><ExpandMoreIcon/></span>
                </div>
                <div className={usernameState}>
                    <p className="student-id"><b style={{marginRight:"20px"}}>STUDENT ID: </b>  20121520</p>
                    <div className="columns">
                        <div className="col-1">
                            <p>Personal Information</p>
                            <p>Privacy Settings</p>
                            <p>My Applications</p>
                            <p>Transcripts</p>
                        </div>
                        <div className="col-2">
                            <p>Make a Payment</p>
                            <p>Withdraw from program</p>
                            <p>Microsoft Downloads</p>
                            <p>Enrollment Verification</p>
                            <p>Sign out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
