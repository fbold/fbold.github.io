import React from 'react'
import Rellax from '../node_modules/rellax/rellax.min.js'

const RandInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Drop = props => {
    return (
        <div
            className={`flex opacity-${props.o} absolute rellax-drops w-6 z-${props.z} bg-indigo-${(props.c) * 100} mx-px md:mx-0.2 rounded-full`}
            style={{ 'height': `${props.h}rem`, 'top': `${props.t}%`, 'left': `${props.l}%` }}
            data-rellax-speed={`${props.s}`} />
    )
}

const Drops = props => {
    const [drops, setDrops] = React.useState([])
    let n = Math.floor(props.nDrops * window.innerWidth / 700)

    React.useEffect(() => {
        new Rellax('.rellax-drops')
    }, [drops])

    React.useEffect(() => {

        for (let i = 1; i <= n; i++) {
            let rh = RandInt(1, 7)
            let rs = Math.random() * 3
            let rc = RandInt(6, 9)
            let rt = Math.round(Math.random() * 100)
            let rl = Math.random() * 97
            setDrops(arr => [...arr, <Drop key={i} h={rh} s={rs} c={rc} t={rt} l={rl} z="0" o={props.o} />])
        }
    }, [])

    return (drops)
}

export default Drops