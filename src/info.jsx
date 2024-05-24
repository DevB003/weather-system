import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Infobox({info}){
    const init="https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    const r_Url="https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs="
    const cold_url="https://media.self.com/photos/5c50b15a01584d32459c06f7/4:3/w_2560%2Cc_limit/GettyImages-962169520.jpg"
    return(<><div>
        <h1>weather info</h1>

        
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp>30?init:info.temp>17&&info.temp<28?r_Url:cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature={info.temp}</p>
            <p>Temperature_max={info.temp_max}</p>
            <p>Temperature_min={info.temp_min}</p>
            <p>Temperature_humidity={info.Temperature_humidity}</p>
            <p>Temperature_feels_like={info.temp_feels_like}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        </div></>)
}