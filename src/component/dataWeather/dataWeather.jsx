import './dataWeather.css'

export function DataWeather({weather}){
    return(
        <div className="data-weather">
            <p>Presion atmosferica <span>{weather.current.pressure_mb} mb</span></p>
            <p>Humedad del aire <span>{weather.current.humidity}%</span></p>
            <p>Presipitacion <span>{weather.current.precip_mm} mm</span></p>
            <p>Velocidad del viento <span>{weather.current.wind_kph} km/h</span></p>
            <p>Direccion del viento <span>{weather.current.wind_degree}°</span></p>
            <p>Rafaga de viento <span>{weather.current.gust_kph} km/h</span></p>
        </div>
    )
}