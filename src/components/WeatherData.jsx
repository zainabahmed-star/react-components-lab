const WeatherData = (props) => {
    return (
        <>
  <h2>Day of the Week: {props.day}</h2>
  <p><span>Conditions: </span>{props.conditions} </p>
  <p><span>Time: </span>{props.time}</p>
        </>
    )
}

export default WeatherData