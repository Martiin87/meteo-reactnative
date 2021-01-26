import React from 'react'
import axios from 'axios';
import {Text} from 'react-native';
export default function App() {

  
  axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=d83819ab29b7d94c8380be3c6172e818')
  return (
    <div>
      <Text>Appli Météo en React Native</Text>
    </div>
  )
}

