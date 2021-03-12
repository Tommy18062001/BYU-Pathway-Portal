import React, { Component } from 'react'
import Card from './components/Card';
import Quote from './components/quote.jpg'

export class Right extends Component {
    render() {
        return (
            <div className="right-side">
                 <Card header="COURSES" list={true} />
                 <Card header="QUICK LINKS" list={false} />

                 {/* Picture slider */}
                 <img className="image-slider" src={Quote} alt="quote"/>
            </div>
        )
    }
}

export default Right
