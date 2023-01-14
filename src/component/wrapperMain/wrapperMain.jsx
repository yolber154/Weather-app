import './wrapperMain.css'

export function WrapperMain({weather, date}){
    return(
        <div className="wrapper-main">
            <div className="header">
                <p className='logo'>Weather app</p>
                <p className='date'><span>Hora local de {weather.location.name}</span><span>{date.toDateString()}</span></p>
            </div>
            <div className="main">
                <div className="column-weather">
                    <div className="temperature">
                        <div className="icon-weather">
                            <img src={weather.current.condition.icon} alt="condition icon" />
                        </div>
                        <p><span>{weather.current.temp_c}°C</span><span></span></p>
                    </div>
                    <div className="condition">
                        <p>{weather.current.condition.text}</p>
                    </div>
                </div>
                <div className="column-location">
                    <p className="location-name">{weather.location.name}</p>
                    <p className="location-ragion">{weather.location.region}</p>
                    <p className="location-country">{weather.location.country}</p>
                </div>
            </div>
        </div>
    )
}