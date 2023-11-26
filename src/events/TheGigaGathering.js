import gotg23 from "../img/gotg23.png"
import gotg23short from "../img/gotg23short.png"
import { useCallback, useState } from "react"

const COUNT = 28

const TheGigaGathering = () => {
  const [locked, setLocked] = useState(true)
  const [locks, setLocks] = useState(new Array(COUNT).fill(1))

  const unlock = () => {
    setLocks(new Array(COUNT).fill(!locked))
    setLocked((c) => !c)
  }

  return (
    <div className="block absolute h-full w-full min-h-screen bg-white overflow-hidden">
      <div
        className={`absolute top-0 h-1/2 w-full bg-wood-dark z-20
          transform transition-transform
          ${""}`}
        style={{
          transform: locked ? "translateY(0)" : "translateY(-200%)",
          transitionDelay: "5.6s",
          transitionDuration: "2s",
          transitionTimingFunction: "cubic-bezier(.02,.13,.28,-0.08)",
        }}
      >
        <div
          className={`pointer-events-none absolute z-20 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-linen p-2 border-4 border-yellow-400`}
        >
          <img src={gotg23short} alt="" className=""></img>
        </div>
        <div
          className={`pointer-events-none absolute z-30 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full bg-wood-dark transition-opacity duration-500 
            delay-500
        ${locked ? "opacity-100" : "opacity-0"}`}
        ></div>
        <button
          onClick={unlock}
          className="absolute z-20 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full bg-none opacity-0"
        ></button>
        <div
          className={`z-30 pointer-events-none absolute w-full h-full -bottom-1/2 flex items-center justify-center
          transition-opacity duration-500
        ${locked ? "opacity-0" : "opacity-100"}`}
        >
          {locks.map((locked, i) => {
            const rotation = Math.round(((i + 1) / COUNT) * 360 * 1000) / 1000
            return (
              <div
                key={i}
                className={`absolute bg-wood-dark rounded-md border-t-4 border-yellow-400 transform transition-transform duration-500 ${
                  locked ? "-translate-y-1/4" : "-translate-y-full"
                } ${i + 1 === locks.length ? "" : ""}`}
                style={{
                  height: "80px",
                  width: "30px",
                  rotate: `${rotation}deg`,
                  transitionDelay: `${1 + i / 10}s`,
                }}
              ></div>
            )
          })}
        </div>
        <span
          className={`absolute bottom-0 translate-y-full z-10 bg-yellow-400 h-1 w-full
          transition-opacity duration-500
        ${locked ? "opacity-0" : "opacity-100"}`}
        ></span>
        {/* <div
          className={`absolute z-0 left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 block transform transition-transform duration-500 scale-0 h-screen rounded-full bg-yellow-400 ${
            !locked && "scale-250"
          }`}
          style={{ transitionDelay: "4s", aspectRatio: "1/1" }}
        ></div> */}
      </div>
      <div
        className={`absolute bottom-0 h-1/2 w-full bg-wood-dark z-10
              transform transition-transform duration-1000
              ${locked ? "translate-y-0" : "translate-y-full"}`}
        style={{
          transitionDelay: "5.5s",
          transitionTimingFunction: "cubic-bezier(.02,.13,.28,-0.08)",
        }}
      ></div>
      <div className="absolute w-full z-0 h-full bg-linen flex flex-col justify-center items-center">
        <div className="font-estonia text-4xl align-middle leading-none font-bold text-indigo-even-darker2 w-full text-center break-normal m-5">
          Dear friend,
          <br />
          You are hereby invited to
          <br />
          the first — and possibly only
          <br />
          <img className="" src={gotg23} alt="" />
          <br />
          on the
          <br />
          31st December 2023
        </div>
        <div className="font-estonia text-4xl leading-none font-bold text-indigo-even-darker2 w-full text-center">
          Would you like more details?
        </div>
      </div>
    </div>
  )
}

export default TheGigaGathering
