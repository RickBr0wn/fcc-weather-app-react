import React, { Component } from 'react'
import axios from 'axios'
import Weather from './components/Weather'

class App extends Component {
  state = {
    locationIsLoaded: false,
    locationData: [],
    coOrdinates: ''
  }

  componentDidMount = () => {
    this.getLocation()
  }

  getLocation = () => {
    const locationApiUrl = 'https://ipinfo.io/json'
    axios.get(locationApiUrl)
      .then(response => {
        this.setState({
          locationIsLoaded: true,
          locationData: response.data,
          coOrdinates: response.data.loc
        })
      })
      .catch(err => console.log(err))
      .then()
  }

  render() {
    const { locationData } = this.state
    const { city, region, loc, postal } = locationData

    const locationPanel = (
      <div>
        <p>{city}, {postal}</p>
        <p>{region}</p>
      </div>
    )

    const locationPanelStillLoading = (
      <div>Loading data</div>
    )

    return (
      <div className="App">
        <h1>Local Weather Forecast</h1>
        <div className="styled-panel">
          {this.state.locationIsLoaded ? locationPanel : locationPanelStillLoading}
        </div>
        <div className="styled-panel">
          <Weather location={loc} />
        </div>
      </div>
    )
  }
}

export default App