import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Weather(props) {
    
    const [cityWeather, setWeather] = useState(0);
    
    useEffect(() => {
       axios.get(`http://openweathermap.org/data/2.5/weather?q=${props.city}&appid=b6907d289e10d714a6e88b30761fae22`, {}).then(function(response){
              setWeather(response.data.main)
         })
    }, [props])

  return (
    <div>
        <p>
            Город: {props.city}
        </p>
        <p>
            Температура: {cityWeather.temp}
        </p>
        <p>
            Влажность: {cityWeather.humidity}
        </p>
                 
    </div>
  );

}

export default Weather;