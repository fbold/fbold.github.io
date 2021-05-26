import './App.css';
import React from 'react';
import Rellax from '../node_modules/rellax/rellax.min.js'
import gamePic from './img/creature2.png'
import text from './text.js'

function RandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Bar(props) {
    return (
        <div
            key={props.h}
            className={`rellax flex flex-auto w-full z-0 bg-indigo-${props.c + "00"} ${(props.i === 0 || props.i === 1) ? 'mx-0' : '-mx-px'} rounded${props.loc ? "-" + props.loc : ""}-full`}
            style={{ 'height': `${props.h}%` }}
            data-rellax-speed={`${props.s}`}
            data-rellax-xs-speed={`${props.s * 1.3}`}
            data-rellax-mobile-speed={`${props.s * 1.3}`}
            data-rellax-tablet-speed={`${props.s}`}
            data-rellax-desktop-speed={`${props.s}`}
        />
    )
}

function Bars({ minSpeed, maxSpeed, color, extraHeight = 0, zIndex = 20 }) {
    var barsTop = []
    var barsBot = []

    let n = Math.floor(window.innerWidth / 25)

    for (let i = 0; i <= n; i++) {
        let rs = RandInt(minSpeed, maxSpeed)
        let rh = 100 * (i / (n)) + extraHeight
        barsTop.push(<Bar key={i} h={rh} loc="b" s={rs} c={color} i={i / n} />)
        barsBot.push(<Bar key={i} h={rh} loc="t" s={-rs} c={color} i={i / n} />)
    }

    barsBot.reverse()

    return (
        <>
        <div className={"flex flex-none absolute w-full h-full top-0 items-start z-" + zIndex}>
            {barsTop}
        </div>,
        <div className={"flex flex-none absolute w-full h-full bot-0 items-end overflow-y-hidden z-" + zIndex}>
            {barsBot}
        </div>
    </>)
}

function Landing() {
    const [scroll, setScroll] = React.useState(false)

    // Cannot have Rellax creation in here with handleScroll
    // Had to nest in Bars which makes rellax do weird stuff
    React.useEffect(() => {
        new Rellax('.rellax', {
            breakpoints: [640, 768, 1024]
        })

        if (window.scrollY > 0) {
            setScroll(true);
        }

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else setScroll(false);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

    }, [])

    return (
        <section className="h-screen w-full">
            <div className="h-full2">
                <div className="flex sticky top-0 justify-center items-center h-screen w-auto text-center">
                    {console.log(scroll)}
                    {scroll ? null :
                        <svg className="animate-pulse relative h-14 w-full fill-current text-indigo-200 z-30" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>}

                    <header className="absolute w-auto z-10">
                        <div className="relative text-center object-center content-center items-center p-4">
                            <span className="text-2xl font-normal text-indigo-200">Hi, I'm <b>Fred</b></span>
                            <h1 className="text-indigo-400 text-4xl font-sans font-extrabold">welcome to my portfolio</h1>
                            <div className="relative mt-3"><span className="text-sm font-bold text-indigo-200 animate-pulse">(keep scrolling)</span></div>
                            <svg className="animate-pulse relative h-5 w-full fill-current text-indigo-200" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                            </svg>
                        </div>
                    </header>

                    <Bars minSpeed={4} maxSpeed={6} color={7} zIndex={0} />
                    <Bars minSpeed={7} maxSpeed={9} color={6} />
                    <Bars minSpeed={10} maxSpeed={12} color={5} />
                    <Bars minSpeed={13} maxSpeed={15} color={4} extraHeight={2} />

                    {/**
                            <Bars minSpeed={6} maxSpeed={8} color={7} zIndex={0}/>
                            <Bars minSpeed={9} maxSpeed={12} color={6}/>
                            <Bars minSpeed={13} maxSpeed={16} color={5}/>
                            <Bars minSpeed={18} maxSpeed={22} color={4} extraHeight={2}/>
                            **/}

                </div>
            </div>
        </section>
    )
}

function Title({ text = '', children }) {
    return (
        <div className="relative flow flex-wrap h-20 w-full content-center items-center text-center font-bold">
            <div className="w-full px-6 py-4">
                <div className="font-bold text-3xl text-indigo-400">{children}</div>
                <p className="text-gray-300 text-base">
                    {text}
                </p>
                <hr className="m-auto self-center w-1/2 border-1 mt-1" />
            </div>
        </div>
    )
}

function TextElement(props) {
    return (
        <div className={`relative px-6 py-3 ${props.c ? 'text-center' : ''}`}>
            {props.title ? <div className="font-bold text-xl text-indigo-400 mb-2 z-20">{props.title}</div> : null}
            <p className="text-gray-300 font-normal text-xl z-20 overflow-hidden">
                {props.children}
            </p>
        </div>
    )
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
        console.log("running useEffect")
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

function GridElement({ onClick, span = 1, ...props }) {
    let image = null
    if (props.image != null) {
        image = <div className="flex items-center relative px-6 py-3 w-full max-h-80 overflow-hidden">
                    <img src={props.image} alt="" className="block w-full h-auto hover:w-5/6"/>
                </div>
    } else image = null
    
    console.log(image)
    
    return (

        <div
            className={`flex items-center col-span-1 md:col-span-${span - 1} xl:col-span-${span} relative h-300 w-full py-5 px-5 font-bold z-10`}
            data-rellax-speed="2">
            <div
                className="flex flex-col cursor-pointer items-start rounded w-full h-full overflow-hidden my-5 mx-2 md:mx-5 bg-indigo-even-darker2 shadow-xl  border-indigo-400 border-t-6 hover:border-t-20 hover:bg-indigo-even-darker duration-200"
                onClick={onClick}>
                <TextElement title={props.title}>{props.children}</TextElement>
                {image}
                
            </div>
        </div>

    )
}

function Contents(props) {


    function handleClick(test) {
        props.setInfoPanel(!props.infoPanel)
        console.log(test)
    }

    return (
        <section className="h-screen">
            <div className="h-full2 relative items-end justify-items-end ">

                <div className="relative flow flex-row items-end top-0 h-1/2 w-full flex-wrap"></div>

                <div className="relative flow flex-row items-end bg-purple-even-darker bottom-0 w-full">

                    <Title>About me</Title>
                    <div className="relative w-2/3 m-auto">
                        <TextElement c="true">
                            {text.about.short}
                        </TextElement>
                    </div>
                    <Title>Projects</Title>
                    <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 relative px-2 md:px-20 w-full overflow-auto">
                        <GridElement title="Dog Nights" span={2} onClick={() => { handleClick() }} image={gamePic}>
                            {text.game.short}                            
                        </GridElement>
                        <GridElement title="Dog Nights Game">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi,
                            enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae
                            sint atque rerum modi.
                        </GridElement>
                        <GridElement title="Dog Nights Game">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi,
                            enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae
                            sint atque rerum modi.
                        </GridElement>
                        <GridElement title="Dog Nights Game">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi,
                            enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae
                            sint atque rerum modi.
                        </GridElement>
                        <GridElement title="Dog Nights Game">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi,
                            enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae
                            sint atque rerum modi.
                                </GridElement>
                        <GridElement title="Dog Nights Game">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eum veritatis neque nisi,
                            enim illum fugit fuga corrupti minima labore dolores reiciendis aliquid, laudantium quam beatae
                            sint atque rerum modi.
                        </GridElement>
                        
                    </div>
                    <Drops o="10" nDrops={30} />
                </div>
            </div>
        </section>
    )
}

// const OverlayPanel = props => {

//     const handleClick = () => {
//         props.setInfoPanel(!props.infoPanel)
//     }


//     return (
//         props.infoPanel ?
//             <container className="flex justify-center items-center" >
//                 <div className="fixed mt-auto top-0 h-full w-full bg-indigo-even-darker2 opacity-70 z-40" onClick={handleClick} />
//                 <div className="fixed m-auto top-1/4 w-2/3 bg-indigo-even-darker z-40 o-100" />
//             </container>
//             : null


//     )

// }

const MoreInfo = props => {

    return (
        <div className="flex absolute w-full justify-center items-center">
            <div className="flex fixed justify-center items-center mt-auto top-0 h-full w-full bg-purple-even-darker z-0" onClick={props.handleClick}>
                <div className="fixed m-auto h-2/3 w-2/3 bg-pink-500 z-40 o-100" />
            </div>
        </div>
    )

}

const TestHide = props => {
    const handleClick = () => {
        props.setInfoPanel(!props.infoPanel)
    }


    return (
        props.infoPanel ?
            <>
                <div className="absolute transform transition -translate-x-full ease-in-out duration-700 z-50 bg-purple-even-darker">
                    {props.children}
                </div>
                <MoreInfo handleClick={handleClick} />
            </>
            :
            <>
                <div className="absolute transform transition translate-x ease-in-out duration-700 z-50 bg-purple-even-darker">
                    {props.children}
                </div>
                <MoreInfo handleClick={handleClick} />
            </>
    )
}

function App() {
    const [infoPanel, setInfoPanel] = React.useState(false)

    return (
        <React.Fragment>
            <TestHide infoPanel={infoPanel} setInfoPanel={setInfoPanel}>
                <Landing />
                <Contents infoPanel={infoPanel} setInfoPanel={setInfoPanel} />
            </TestHide>
        </React.Fragment>
    )
}

export default App;
