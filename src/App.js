import React from 'react';
import gamePic from './img/creature2.png'
import text from './text.js'

import Landing from './LandingComponent.js'
import Drops from './DropsComponent.js'



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

const MoreInfo = props => {

    return (
        <div className="flex absolute w-full justify-center items-center">
            <div className="flex fixed justify-center items-center mt-auto top-0 h-full w-full bg-purple-even-darker z-0" onClick={props.handleClick}>
                <div className="fixed m-auto h-2/3 w-2/3 bg-pink-500 z-40 o-100" />
            </div>
        </div>
    )

}

//========
// TODO:  Use React context to store what text element we are currently on y setting it on click on one of the Grid elements or whatever
// TODO:  That way you can keep track without large strign everywhere. Hiopefully this is the solution you are looking for. Learn Vim.
//========


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
