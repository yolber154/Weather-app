import { useState } from 'react'
import { IconLoading } from '../iconLoading/iconLoading'
import imgSunny from '../../img/sunny.png'
import './forecast.css'

export function Forecast({weather}){
    const forecastDays = weather.forecast.forecastday
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const count = ["Today", "Tomorrow"]
    return(
        <div className="forescast">
            <div className="days">
            {
                forecastDays.map((objDay, index) => {
                    const date = new Date(objDay.date)
                    const dayString = days[date.getDay()]
                    const monthString = months[date.getMonth()]
                    return (
                        <>
                            <div className="day">
                                <div className="box">
                                    <p>{count[index] ? count[index] : dayString}</p>
                                    <p>{`${date.getDate()} ${monthString}`}</p>
                                </div>
                                <div className="icon-weather">
                                    <img src={objDay.day.condition.icon} />
                                </div>
                                <p className="temperature">{objDay.day.maxtemp_c}°/{objDay.day.mintemp_c}°</p>
                            </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}