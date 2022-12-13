import React, { Component } from "react"
import avatar from '../assets/avatar.jpg';

class AboutMe extends Component {

    render() {
        return (
            <div>
                <img id="show_img" src={avatar} alt="Aravind Avatar"></img>
                <h3>Hi I'm Harini</h3>
                <p>I'm student at Dalhousie, pursuing Masters in Computing Science</p>
            </div>
        )
    }
}

export default AboutMe;