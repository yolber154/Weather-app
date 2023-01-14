import { useEffect, useRef } from "react"

export function Form({onSubmit}){
    const inputRef = useRef()
    useEffect(() => {
        inputRef.current.focus()
    },[])
    return(
        <form onSubmit={onSubmit}>
            <input type="text" ref={inputRef} name="sendLocation" placeholder="Search city..." />
        </form>
    )
}