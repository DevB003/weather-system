import Searchbox from "./searchbox";

import Infobox from "./info";
import { useState } from "react";
export default function Wether(){
    const[weatherinfo,setWeatherinfo]=useState({city:"delhi",
    feels_like: 23.78,
humidity: 73,
pressure: 1019,
temp: 23.47,
temp_max:23.47,
temp_min: 23.47})
let updateinfo=(newinfo)=>{
    setWeatherinfo(newinfo)

}
    return(<><Searchbox updateinfo={updateinfo}></Searchbox>
    <Infobox info={weatherinfo}></Infobox>
    </>)



}