import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



export default function Searchbox({updateinfo}){
    const[city,setCity]=useState("")
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY='0bc9518ef3de18247c39d4ca3e5e9ed3'
 async function getwether(){
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jesonresponse=await response.json();
    console.log(jesonresponse)
   const result={
    city:city ,
    feels_like:jesonresponse.main.feel_like ,
        humidity: jesonresponse.main.humidity,
        pressure :jesonresponse.main.pressure,
        temp:jesonresponse.main.temp ,
        temp_max:jesonresponse.main.temp_max,
        temp_min:jesonresponse.main.temp_min}

console.log(result)
return(result)
}

    function Handlechange(event){
        setCity(event.target.value)
    }
     async function
     HandleClick(e){
        e.preventDefault();
        console.log(city)
        setCity("")
       let newinfo=await getwether();
       updateinfo(newinfo)

    }
     

    return(<>
    <form>
    <div className="box">
        <br></br><br></br>
    <TextField id="outlined-basic" label="cityname" variant="outlined" onChange={Handlechange}/>
    <br></br><br></br>
          <Button variant="contained" onClick={HandleClick}>Contained</Button>
</div></form></>)
}