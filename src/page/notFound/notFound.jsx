import imgError from '../../img/error.png'
import leftArrow from '../../img/left-arrow.png'
import './notFound.css'

export function PageNotFound({weather}){
    return(
        <div className="page-not-found">
            <div className="content-error">
                <img src={imgError} className="img-error" alt="page not found" />
                <p className="title">Error code: {weather.error.code}</p>
                <p className="description">{weather.error.message}</p>
                <a href="#"><img src={leftArrow} className="img-arrow" alt="back" /></a>
            </div>
        </div>
    )
}