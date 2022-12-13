import React, { Component } from "react"
import Halifax_Citadel from "../assets/Halifax_Citadel.jpg"

class MyTown extends Component {

    constructor(props){
        super(props)
        this.state = {
            degree_c: 0,
            degree_f: 0,
            condition: '',
            is_celcius: true
        }
    }

    fetchData() {
        fetch("http://api.weatherapi.com/v1/current.json?key=24246bfa0cdd468abea153555221312&q=Halifax&aqi=no")
            .then(response => {
                return response.json()
            })
            .then(response => {
                this.setState({
                    degree_c: response.current.feelslike_c,
                    degree_f: response.current.feelslike_f,
                    condition: response.current.condition,
                    is_celcius: true
                })
            });
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div>
                <img id="show_img" src={Halifax_Citadel} alt="Halifax City"></img>
                <h3>I Live in Halifax, NS, Canada</h3>
                <p>Halifax, One of the beautiful city in Canada. Beautiful beaches, waterfront, peaceful environment</p>
                <div className="weather-container" key={this.props.name}>
                    <div align="center">
                        <img id="weather_img" src={this.state.condition.icon} alt="Halifax City" width={150}></img>
                        <h5>Condition: {this.state.condition.text}</h5>
                    </div>
                    <div>
                        { this.state.is_celcius?
                            <h3>{this.state.degree_c}°C</h3>
                            : <h3>{this.state.degree_f}°F</h3>
                        }
                        <button className="change_degree" onClick={() => this.setState({is_celcius: !this.state.is_celcius})}>
                            { this.state.is_celcius?
                                "Change Farenheit"
                                    :"Change Celcius"
                            }
                        </button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default MyTown;