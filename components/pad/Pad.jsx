import { useEffect } from "react"
import { useRef } from "react"

export default function Pad({ id, letter, src, name, callBack }) {

    // OPTION 2: use ref
    // the logic is handled in the Pad component
    // and using the hook useRef to access the audio element
    // and using the audio element API to play the audio
    // and using the hook useEffect to handle the keydown event
    const ref = useRef(null)
    const play = () => {
        ref.current.play()
        ref.current.currentTime = 0
    }

    const handleKeyDown = (e) => {
        if (e.key.toUpperCase() === id) {
            play()
            callBack(id)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })

    return (
        <button  name={id} id={name} onClick={() => {
            play()
            callBack(id)
        }} className="drum-pad">
            {letter}
            <audio ref={ref}  class="clip" id={id} src={src}></audio>
        </button>
    )
}