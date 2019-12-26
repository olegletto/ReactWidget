import React, {useState} from 'react';
import './App.css';
import './bootstrap.css';
import Weather from './weatherwidget';

function App(props) {

const [city, setCity] = useState('Moscow');

//function handleClick;// при клике на кнопку - обновляю city
// function handleClick() {
//   setCity(document.getElementById("cityName").value);
// }

  return (
    <div className='card mx-auto' style={{width: '50%'}}>
      <div className='card-header'>
      <h3>ПОГОДА</h3>
      
      <input type='text' id="cityName" />
      <button onClick = {() => setCity(document.getElementById("cityName").value)}>Узнать погоду</button>
      </div>
      <div className='card-body'>
  <Weather city={city} />    
      </div>
    </div>
    
  );
}

export default App;

