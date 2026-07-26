import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData"

const Forecast = (props) => {

return (
    <div className="weather">
        <WeatherIcon img={props.img} imgAlt={props.imgAlt} />
        <WeatherData day={props.day} conditions={props.conditions}
        time={props.time} />
  
</div>

)

}

export default Forecast