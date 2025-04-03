import Searchbox from "./Searchbox";
import Information from "./Information";
import { useState } from "react";
export default function WeatherApp(){
    let [weather,setWeather]=useState({
        city:"Delhi",
        feelslike:23,
        temp:23,
        tempMin:12,
        tempMax:12,
        humidity:12,
        weather:"cloud",
    });
    let updateWeather=(result)=>{
        setWeather(result);
    }
    return(
        <div>
        <h2>WeatherApp By Tom</h2>
        <Searchbox updateWeather={updateWeather}/>
        <Information Info={weather}/>
        </div>
    );
}