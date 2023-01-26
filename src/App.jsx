import React, { useState } from "react";
import img1 from "./img1.jpeg"
import img2 from "./img2.jpeg"
import img3 from "./img3.jpeg"
import img4 from "./img4.jpeg"
import img5 from "./img5.jpeg"
import img6 from "./img6.jpeg"
import img7 from "./img7.jpeg"
import img8 from "./img8.jpeg"
import img10 from "./img10.jpeg"
function app() {
  const [imag, setImag] = useState([img1, img2, img3, img4, img5, img6, img7, img8, img10]) 
  
  const ran = (index) => {
    let rans = Math.floor(Math.random() * imag.length)
    imag.splice(rans, 1)
    setImag([...imag])
  }
  return (
    <main>
      <h1>Guessing Squid Game</h1>
      <h1>Click on the button to terminate images randomly</h1>
      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center"}}>
        {imag.map((item, index) => (
          <main style={{border: "3px solid black", boxShadow: "2px 2px 10px black", margin: "10px"}}>
            <img src={item} title={index.title} alt="" />
          </main>
        ))}
      </div>
      <button onClick={ran}>Terminate</button>

    </main>
  )
}

export default app;