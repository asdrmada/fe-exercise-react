import React, { Component } from 'react'
import './swansea.css'

export class SwanseaRend extends Component {

    render() {

        let mainForecast = this.props.forecastMain.map( (main, i) => {
            return (<h2 key = {i}>{main}</h2>)
           });


        return (
            <div className = 'flex-container'>
              <div className = 'swanseaCurrent'>
                  <h1>Swansea</h1>
                  <h3>Todays Weather</h3>
               <h2>{this.props.currentMain}</h2>
               <h4>{this.props.currentDesc}</h4>
              </div>

               <h3>3 Day Forecast</h3>
               <p><em>Three day forecast for the next upcoming days</em></p>
               <div className = 'swanseaForecast'>
                    <div className = 'forecastRender'>
                    {mainForecast}
                    </div>
               </div>
            </div>
        )
    }
}

export default SwanseaRend
