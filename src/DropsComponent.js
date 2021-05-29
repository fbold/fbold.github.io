import React from 'react'
import Rellax from '../node_modules/rellax/rellax.min.js'


function RandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Drop(props) {
    return (
        <div
            
            className={`flex opacity-${props.o} absolute rellax-drops w-6 z-${props.z} bg-indigo-${(props.c) * 100} mx-px md:mx-0.2 rounded-full`}
            style={{ 'height': `${props.h}rem`, 'top': `${props.t}%`, 'left': `${props.l}%` }}
            data-rellax-speed={`${props.s}`} />
    )
}

function Drops({ o, nDrops, ...props }) {
    const [drops, setDrops] = React.useState([])
    //var drops = []
    let n = Math.floor(nDrops * window.innerWidth / 700)


    React.useEffect(() => {
        // TODO: add event listener for scroll so it only applies rellax class
        // when past the first scroll amopunt
        new Rellax('.rellax-drops')

    }, [drops])

    React.useEffect(() => {

        for (let i = 1; i <= n; i++) {
            let rh = RandInt(1, 7)
            let rs = Math.random() * 3
            let rc = RandInt(6, 9)
            let rt = Math.round(Math.random() * 100)
            let rl = Math.random() * 97
            setDrops(arr => [...arr, <Drop key={i} h={rh} s={rs} c={rc} t={rt} l={rl} z="0" o={o} />])
            //drops.push(<Drop h={rh} s={rs} c={rc} t={rt} l={rl} z="0" o={o}/>)
        }
    }, [n, o])

    return (drops)
}

export default Drops