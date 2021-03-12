import React, { Component } from 'react';
import Title from './components/Title.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Progression from './components/Progression';
import path from './components/path.png';

export class Left extends Component {
    state = {
        progressState: "progress-hidden"
    }

    progressSection = () => {
            if (this.state.progressState === "progress-hidden") {this.setState({progressState:"progress-show"})}
            else {this.setState({progressState:"progress-hidden"})}
        }

    render() {
        return ( 
            <div  className="left-side">
                {/* logo*/}
                <img src={Title} alt="Pathway connect" className="title"/>

                {/*Progress*/}
                <div className="progress-section" onClick={this.progressSection}>
                    <div className="progress">
                        <i><EqualizerIcon/></i><p>MY PROGRESS</p><span><ExpandMoreIcon/></span>
                    </div>
                    <div
                     className={this.state.progressState}>
                        <Progression title="CURRENT SEMESTER"/>
                        <Progression title="PATHWAY CONNECT"/>
                        <img src={path} alt="path"/>
                    </div>
                </div>

                {/* Gathering */}
                <div className="gathering">
                    <i><LocationOnIcon/></i><p>MY GATHERING</p><span><ExpandMoreIcon/></span>
                </div>

                {/* Contacts */}
                <div className="contact">
                <i><ContactMailIcon/></i><p>MY CONTACTS</p><span><ExpandMoreIcon/></span>
                </div>

                {/* social media*/}
                <div className="social-media">
                    <span><FacebookIcon/></span>
                    <span><InstagramIcon/></span>
                    <span><TwitterIcon/></span>
                    <span><PinterestIcon/></span>
                </div>
            </div>
        )
    }
}

export default Left
