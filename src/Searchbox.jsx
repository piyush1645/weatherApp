import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './search.css'
import { useState } from 'react';
export default function Searchbox({updateWeather}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="4f9128484c5d5feef5d4d8e2430dd8e8";
    let [City, setcity] = useState("");
    let [error,setError]=useState(false);

    let getWeatherInfo=async()=>{
        try{
        let response=await fetch(`${API_URL}?q=${City}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        if (jsonResponse.cod !== 200) {
            setError(true);
            return;
        }
        console.log(jsonResponse);
        let result={
            city:City,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelslike:jsonResponse.main.feels_like,
            weather:jsonResponse.weather[0].description,
        }
        console.log(result);
        setError(false);
        updateWeather(result);
    }catch(err){
        throw err;
    }

    }

    let seachHandle = (event) => {
        setcity(event.target.value);
    }

    let submitHandler=(event)=>{
        try{
        event.preventDefault();
        console.log(City);
        getWeatherInfo();
        if (City.trim() === "") {
            setError(true);
            return;
        }
        setcity("");
        }catch(err){
            setError(true);
        }
    }

   

    return (
        <div >
            <form className='searchForm' onSubmit={submitHandler}>
                <Box className="searchbox" sx={{ width: 350, maxWidth: '100%' }}>
                    <TextField fullWidth label="City" id="City" value={City} onChange={seachHandle} variant='outlined' />
                </Box>
                <Button className='searchbutton' variant="contained" type="submit">search</Button>
            </form>
           {error && <h3 className='error'>no such place in our API</h3>}
           {
            console.log(error)
           }
        </div>
    );
}

