import { useCallback, useState } from "react"

const COUNT = 30

const TheGigaGathering = () => {
  const [locked, setLocked] = useState(true)
  const [locks, setLocks] = useState(new Array(COUNT).fill(1))

  const unlock = () => {
    setLocks(new Array(COUNT).fill(!locked))
    setLocked((c) => !c)
  }

  return (
    <div className="w-full bg-gray-900">
      <div className="absolute top-0 h-1/2 w-full bg-blue-900"></div>
      <div className="absolute bottom-0 h-1/2 w-full bg-blue-900"></div>
      <button
        onClick={unlock}
        className="absolute z-20 top-1/2 left-1/2 block transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-black"
      ></button>
      <div className="z-10 absolute w-full h-full flex items-center justify-center">
        {locks.map((locked, i) => {
          const rotation = Math.round(((i + 1) / COUNT) * 360 * 1000) / 1000
          return (
            <div
              key={i}
              className={`absolute z-10 bg-black rounded-md border-t-4 border-yellow-700 transform transition-transform duration-500 ${
                locked ? "translate-y-0" : "-translate-y-3/4"
              }`}
              style={{
                height: "100px",
                width: "30px",
                rotate: `${rotation}deg`,
                transitionDelay: `${i / 10}s`,
              }}
            ></div>
          )
        })}

        <div
          className={`absolute z-0 block transform transition-transform duration-500 scale-0 h-screen rounded-full bg-yellow-700 ${
            !locked && "scale-5"
          }`}
          style={{ transitionDelay: "4s" }}
        ></div>
      </div>
    </div>
  )
}

export default TheGigaGathering
