import { useRef, useEffect } from 'react'
import './graddient.css'

export function Graddient(){
    const divRef = useRef()
    useEffect(() => {
        window.addEventListener("load", () => {
            const height = document.body.offsetHeight
            divRef.current.style.height = height + "px"
        })
    },[])

    return <div id="graddient" ref={divRef}></div>
}