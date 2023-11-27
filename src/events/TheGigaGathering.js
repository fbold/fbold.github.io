import gotg23 from "../img/gotg23.png"
import gotg23short from "../img/gotg23short.png"
import { useCallback, useState } from "react"

const COUNT = 28

const TheGigaGathering = () => {
  const [locked, setLocked] = useState(true)
  const [locks, setLocks] = useState(new Array(COUNT).fill(1))
  const [password, setPassword] = useState("")

  const unlock = async () => {
    setTimeout(() => {
      setLocks(new Array(COUNT).fill(!locked))
      setLocked((c) => !c)
    }, 300)
  }

  const submit = (e) => {
    e.preventDefault()
    if (password === "gen") {
      unlock()
      setPassword("")
    } else {
      setPassword("")
    }
  }

  return (
    <div className="block absolute h-full w-full min-h-screen bg-white overflow-hidden">
      <div
        className={`absolute top-0 h-1/2 w-full bg-wood-dark z-20
          transform transition-transform
          ${""}`}
        style={{
          transform: locked ? "translateY(0)" : "translateY(-200%)",
          transitionDelay: "6.1s",
          transitionDuration: "2s",
          transitionTimingFunction: "cubic-bezier(.02,.13,.28,-0.08)",
        }}
      >
        <div
          className={`pointer-events-none absolute z-20 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full bg-red-900 p-2 border-4 border-yellow-400`}
        >
          <img src={gotg23short} alt="" className=""></img>
        </div>
        <div
          className={`pointer-events-none absolute z-30 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full bg-wood-dark transition-opacity duration-2000 delay-1500
          ${locked ? "opacity-100" : "opacity-0"}`}
        ></div>
        {locked ? (
          <form onSubmit={submit}>
            <input
              autoFocus
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="absolute z-30 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-44 text-center text-4xl font-nightshade h-28 bg-transparent outline-none text-yellow-400"
            />
          </form>
        ) : null}
        {/* <button
          onClick={unlock}
          className="absolute z-20 bottom-0 left-1/2 block transform -translate-x-1/2 translate-y-1/2 w-28 h-28 rounded-full bg-none opacity-0"
        ></button> */}
        <div
          className={`z-30 pointer-events-none absolute w-full h-full -bottom-1/2 flex items-center justify-center
          transition-opacity duration-2000
        ${locked ? "opacity-0" : "opacity-100"}`}
        >
          {locks.map((locked, i) => {
            const rotation = Math.round(((i + 1) / COUNT) * 360 * 1000) / 1000
            return (
              <div
                key={i}
                className={`absolute bg-wood-dark rounded-t-2xl rounded-b-md border-t-4 border-yellow-400 transform transition-transform duration-500 ${
                  locked ? "-translate-y-1/4" : "-translate-y-full"
                } ${i + 1 === locks.length ? "" : ""}`}
                style={{
                  height: "80px",
                  width: "30px",
                  rotate: `${rotation}deg`,
                  transitionDelay: `${2 + i / 10}s`,
                }}
              ></div>
            )
          })}
        </div>
        <span
          className={`absolute bottom-0 translate-y-full z-10 bg-yellow-400 h-1 w-full
          transition-opacity duration-2000
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
          transitionDelay: "6s",
          transitionTimingFunction: "cubic-bezier(.02,.13,.28,-0.08)",
        }}
      ></div>
      <div
        className={`${
          locked ? "" : "overflow-scroll"
        } absolute w-full z-0 h-full`}
      >
        <div className="relative w-full z-0 h-full bg-linen flex flex-col justify-center items-center">
          <div className="font-estonia text-3xl align-middle flex flex-col leading-none font-bold text-ink justify-items-center w-full text-center m-5">
            Dear friend,
            <br />
            You are hereby invited to
            <br />
            the first — and possibly only
            <br />
            <img className="max-h-64 mx-auto px-4" src={gotg23} alt="" />
            31st December 2023
          </div>
        </div>
        <div className="absolute bottom-2 font-estonia text-4xl leading-none font-bold text-ink w-full text-center flex justify-center flex-col items-center">
          Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            // className="w-14"
            viewBox="0 5 16 10"
          >
            <path
              fill-rule="evenodd"
              d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
            />
          </svg>
        </div>
        <div className="w-full z-0 h-full bg-linen flex flex-col justify-center items-center">
          <div className="font-estonia text-3xl align-middle flex flex-col leading font-extrabold text-ink justify-items-center w-full text-center m-5 px-3">
            <p className="py-5">
              A night to share friendship, stories, and love. <br /> Come with a
              truly open heart and mind.
            </p>
            <span className="w-16 h-0.5 bg-ink rounded-lg mx-auto"></span>
            <p className="py-5">
              You'll be fed and bedded. <br /> Feel free to bring drinks though
              these and other drugs will be in abundance. <br /> Please, if you
              do bring something, I would kindly ask you make sure its vegan.
            </p>
            <span className="w-16 h-0.5 bg-ink rounded-lg mx-auto"></span>
            <p className="py-5">
              Location: <br />
              Cowshed, Vilartoli
            </p>
            <span className="w-16 h-0.5 bg-ink rounded-lg mx-auto"></span>
            <p className="py-5">More details to follow...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheGigaGathering
