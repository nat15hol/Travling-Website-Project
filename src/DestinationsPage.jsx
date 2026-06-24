import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './DestinationsPage.css'

function DestinationsPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{backgroundColor: "orange" }}>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
        </div>
      </div>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs" style={{backgroundColor: "lightblue", marginLeft: 60}}>
          <div style={{backgroundColor: "blue", alignContent: "center", textAlign: "center", height: "200px", color: "white"}}>
            A map here?
          </div>

          <div style={{backgroundColor: "gray", alignContent: "center", textAlign: "center", height: "300px", color: "white"}}>
            Filter options box
          </div>
        </div>
        <div style={{flex: "1 1 0", flexDirection: "column", marginLeft: 275}}>
          <div style={{backgroundColor: "green"}}>

          </div>
          <div style={{backgroundColor: "green"}}>

          </div>
          <div style={{backgroundColor: "yellow"}}>

          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default DestinationsPage;