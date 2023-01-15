import { Graddient } from '../../component/graddient/graddient'
import { Form } from '../../component/form/form'
import { DataWeather } from '../../component/dataWeather/dataWeather'
import { WrapperMain } from '../../component/wrapperMain/wrapperMain'
import { Forecast } from '../../component/forecast/forecast'
import './view.css'

export function PageView({weather, onSubmit}){
    const date = new Date(weather.location.localtime)
    return(
        <>
            <Graddient weather={weather} />
            <div className="page-view">
                <Form onSubmit={onSubmit} />
                <div className="content">
                    <WrapperMain weather={weather} date={date} />
                    <DataWeather weather={weather} />
                    <Forecast weather={weather} date={date} />
                </div>
            </div>
        </>
    )
}