import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './info.css'
export default function Information({Info}){
    let INIT_URL="https://tse1.mm.bing.net/th?id=OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN&pid=Api&P=0&h=220";
    let HOT_UTL="https://www.mississauga.ca/wp-content/uploads/2024/06/13100304/AdobeStock_775408162-scaled.jpeg";
    let COLD_URL="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/09/cold_weather_GettyImages107191741_Header-1024x575.jpg";
    let RAINY_URL="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";
    return(
        <div className="InfoBox">
            <h1>Weather-{Info.weather}</h1>
            <Card sx={{ maxWidth: 500 }}>
      <CardMedia
       
        sx={{ height: 140 }}
        image={Info.humidity>80?RAINY_URL : Info.temp>15?HOT_UTL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city}&nbsp; {Info.humidity>80?<ThunderstormIcon/> : Info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
        
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        
        <div>temp:{Info.temp}&deg;C</div>
        <div>tempMin:{Info.tempMin}&deg;C</div>
        <div>tempMax:{Info.tempMax}&deg;C</div>
        <div>humidity:{Info.humidity}</div>
        <div>Weather feels like:{Info.feelslike}&deg;C</div>
        </Typography>
      </CardContent>
    </Card>
        </div>
    );
}