import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Pad from '../components/pad/Pad'
import { useEffect } from 'react'
import { data } from '../data'

function App() {
  const [pad, setPad] = useState(data)
  const [display, setDisplay] = useState('')

  // OPTION 1
  // Making use of ref to access the audio element
  // but using the DOM API to play the audio
  // the login is handled in the Father component
  
  // const handleClick = (e) => {
  //   const id = e.target.name
  //   const audio = document.getElementById(id)
  //   audio.play()
  //   audio.currentTime = 0
  //   setDisplay(id)
  // }

  // const handleKeyDown = (e) => {
  //   const id = e.key.toUpperCase()
  //   const audio = document.getElementById(id)
  //   if (audio) {
  //     audio.play()
  //     audio.currentTime = 0
  //     setDisplay(id)
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeyDown)
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyDown)
  //   }
  // }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Drum Machine</h1>
      <div className="card">
        <main id="drum-machine">
          {
            pad.map((item) => {
              return <Pad
                key={item.id}
                id={item.id}
                name={item.name}
                callBack={setDisplay}
                letter={item.id}
                src={item.url} />
            })
          }
        </main>
        <h2 id="display">
          {display}
        </h2>
      </div>
    </div>
  )
}

export default App
