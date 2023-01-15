import { useRef, useEffect } from 'react'
import './graddient.css'

export function Graddient({weather}){
    const divRef = useRef()
    useEffect(() => {
        resetHeight()
        window.addEventListener("load", resetHeight)
    },[weather])

    const resetHeight = () => {
        const height = document.body.offsetHeight
        divRef.current.style.height = height + "px"
    }

    return <div id="graddient" ref={divRef}></div>
}