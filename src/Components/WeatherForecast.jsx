import '/src/WeatherForecast.css'
import props from '../App.jsx'





export default function Forecast (props) {
    return (
<div className="weather">
  <h2>{props.day}</h2>
  <img src={props.img} alt="" />
  <p><span>conditions: </span>{props.conditions}</p>
  <p><span>time: </span>{props.time}</p>
</div>



    )

}