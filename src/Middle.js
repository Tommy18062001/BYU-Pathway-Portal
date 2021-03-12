import React, { Component } from 'react';
import Button from './components/Button';
import Test from './components/test.mkv';
import TheatersIcon from '@material-ui/icons/Theaters';
import Pagination from './components/Pagination';
import Screenshot from './components/screenshot.png';

export class Middle extends Component {
    render() {
        return (
            <div className="middle-side" >
                {/* text box*/}
                <div className="anouncement">
                    <p className="title">Welcome, Tommy Sylver!</p>

                    <p className="paragraph" >Whether you are a new student or continuing to your next semester, 
                        click the video and checklist below for resources that will help 
                        you succeed in PathwayConnect.</p>

                    <hr/>

                    <Button text="NEW STUDENT ORIENTATION"/>
                    <Button text="NEW STUDENT CHECKLIST"/>


                </div>
                {/*video*/}
                <div className="video-new">
                    <div className="description">
                        <i><TheatersIcon/></i><legend>Now Playing</legend><Pagination num="1"/>
                    </div>
                    <video src={Test} className="vd" poster={Screenshot} preloads controls loop></video>
                </div>

            </div>
        )
    }
}

export default Middle
