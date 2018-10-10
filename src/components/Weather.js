import React, { Component } from 'react'
// import axios from 'axios'

export class Weather extends Component {
  state = {
    weatherPanelIsLoaded: false,
    weatherData: []
  }

  getWeather = (location) => {
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const weatherApiToken = '6628ca8235beb8aed232889dbef9e9b1'
    const weatherApiUrl = 'https://api.darksky.net/forecast/' 
    const urlToFetch = weatherApiUrl + weatherApiToken + '/' + location + "?callback=?"

    // const header = {
    //   method: 'GET',
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
    //   withCredentials: true,
    //   credentials: 'same-origin',
    // }

    fetch(urlToFetch + proxyURL)
      .then(response => response.json())
      .then(JSONdata => console.log(JSONdata))
      .catch(error => console.log('There has been an error: ' + error))

    // axios.get(urlToFetch + proxyURL)
    //   .then(response => {
    //     console.log(response);
    //   })
  }

  render() {
    const { location } = this.props

    if(location) {
      this.getWeather(location)
    }

    const weather = {}

    return (
      <div>
        {location}
      </div>
    )
  }
}

export default Weather
