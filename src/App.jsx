// src/App.jsx
import Forecast from './Components/WeatherForecast.jsx';
import WeatherForecast from './Components/WeatherForecast.jsx'
import './index.css'

const App = (props) => {
  const weatherForecast = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
    },
  ];
  console.log(weatherForecast)
  return (
    <>
  <h1>Local Weather</h1>
  <section>
    {weatherForecast.map((ForecastItem) =>
      (<WeatherForecast
    day = {ForecastItem.day}
    img = {ForecastItem.img}
    conditions = {ForecastItem.conditions}
    time = {ForecastItem.time}
      />)
  )}

  </section>
</>
  );
}

export default App
