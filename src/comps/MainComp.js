import React, { Component } from 'react'
import SwanseaRend from './SwanseaRend'
import CitysRend from './CitysRend'
import axios from 'axios';

import './MainComp.css'

const SWANSEA_DAILY_API = 'http://api.openweathermap.org/data/2.5/weather?q=swansea&APPID=9cc2d877f47949e2fd131a35b7386286'
const SWANSEA_3DAY_API  = 'http://api.openweathermap.org/data/2.5/forecast?q=swansea&APPID=9cc2d877f47949e2fd131a35b7386286'
export class MainComp extends Component {

    constructor(props){
    super(props)
    this.state =  {
        swanseaCurrent: '',
        swanseaCurDesc: '',

        swanseaThreedayMain: [],

        citySelection: '',

        cityCurrent: '',
        cityCurDesc: '',

        cityThreedayMain: []
        }
    }


    // The API used for the city selction would use the same logic as shown in the mount function below
    // but would be called after being attached too an event on one of the buttons below.
    async componentDidMount(){
        let swanseaDaily = await axios.get(`${SWANSEA_DAILY_API}`)
        let swanseaForecast = await axios.get(`${SWANSEA_3DAY_API}`)
        console.log('test connection')
        console.log(swanseaForecast.data)
        console.log(swanseaForecast.data.list.slice(1,3))

        let swansForecastSliced = swanseaForecast.data.list.slice(1,4)
        let newStatearrMain = []
        let newStatearrDesc = []

        newStatearrMain.push(swansForecastSliced[0].weather[0].main, 
                             swansForecastSliced[1].weather[0].main,
                             swansForecastSliced[2].weather[0].main)

        newStatearrDesc.push(swansForecastSliced[0].weather[0].description, 
                             swansForecastSliced[1].weather[0].description,
                             swansForecastSliced[2].weather[0].description)


        this.setState(
            {
                swanseaCurrent: swanseaDaily.data.weather[0].main,
                swanseaCurDesc: swanseaDaily.data.weather[0].description,
            
                swanseaThreedayMain: newStatearrMain,
                swanseaThreedayDesc: newStatearrDesc
            },
        )

    }

    render() {

        let today = new Date();

        return (
            <div>
                <h1 className= 'title'>Weather Reporter</h1>

                {today.toLocaleDateString("en-UK")}

                {/* All data from the API return is passed as properties too the relevant components */}
                <SwanseaRend
                currentMain = {this.state.swanseaCurrent}
                currentDesc = {this.state.swanseaCurDesc}
                
                forecastMain = {this.state.swanseaThreedayMain}
                />

                <hr/>

                {/* The Buttons in this div would be used too control the citySeletion
                    string state, therefore effecting the API return */}
                <div>
                    <button>London</button>
                    <button>Rome</button>
                    <button>Toronto</button>
                </div>
                
                <CitysRend/>
            </div>
        )
    }
}

export default MainComp
