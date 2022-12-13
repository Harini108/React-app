import React, { Component } from "react"
import AboutMe from './Components/AboutMe'
import MyTown from './Components/MyTown'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMenu: 'AboutMe'
    }
  }
  

  render() {
    const header = [
      {
        Title: 'About Me',
        component: 'AboutMe'
      },
      {
        Title: 'My Town',
        component: 'MyTown'
      }
    ];

    return (
      <div className="container">
      <ul>
        {
          header.map(header => (
            <li key={header.Title}>
              <button
                onClick={() => this.setState({currentMenu: header.component})}
              >
                <h4>{header.Title}</h4>
              </button>
            </li>
          ))
        }
      </ul>
      {this.state.currentMenu === 'AboutMe' ?
          <AboutMe />
          : <MyTown/>
      }
    </div>
    );
  }
}

export default App;
