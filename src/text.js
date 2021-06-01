import lmgtfy1 from './img/lmgtfy1.png'
import lmgtfy2 from './img/lmgtfy-page.png'
import sigmo1 from './img/sigmo-preview-portfolio.gif'
import sigmo2 from './img/sigmo-preview2-portfolio.gif'
import blender1 from './img/creature2.png'
import blender2 from './img/sirenhead.png'
import blender3 from './img/creature-animated.gif'
import blender4 from './img/stove.png'

const projects = {
    about: {
        short: `I'm a young programmer and game developer looking to get into the industry and put my skills to use in a professional environment.
        I've been obsessed with programming for as long as I can remember, I've always been eager to bring my ideas to life in a tangible way,
        and programming gave me that freedom. From early java game programming, to messing about with arduino, to starting my journey in web development
        and now becoming a Unity obsessed maniac and avid React learner.`,
    },
    projects: {
        game: {
            span: 3,
            title: "Dug In",
            short: `Dug In (working title) is a first person video game I am developing in the Unity game engine that will be my first commercial release. You play as an isolated man mourning the recent death of his dog, however a strange turn of events leaves you fighting off hordes of night creatures defending an otherworldly crystal that has taken the form of your dog.`,
            long: `naklsdjaskd jaks jdkaj sdklajsdaklsdja lskdjalsk djalksdjalksjd laksjd lkas jdlkaj sdlkjasldk jaklsdjalkjsdlkajsdlkajsldkjalksdjklajsdlkasd
            aksjdklajsdlkajsdlkjalskdjlaksjdlkasjdlkjasldkjalskdjlaksj dlkaaaklsjdklajskldo gua[oieuf klajshflkHJ SLOADIKFHJ LASKDF OLIWSD ;JK;DASD]`,
            images: {
                cover: [],
                horizontal: [],
                vertical: [],
            },
        },
        lmgtfy: {
            title: "LMGTFY Firefox Addon",
            short: [`A firefox add-on that allows you to immediately obtain a link to a `,
                    <a className="underline" href="https://letmegooglethat.com/" target="_blank" rel="noopener noreferrer">LMGTFY</a>,
                    ` question to send in reply to anyone asking a rudely googleable question.`],
            long: [`This was a simple project to familiarize myself with the browser addon development workflow, the process itself is very straightforward,
                    essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenation for the URL
                    was all that was required, plus a few methods to obtain the information from the selected text and saving urls to the clipboard. `,<br/>,<br/>,`
                    The result was a silly addon that allow you to copy text on any page and copy that as a URL to letmegooglethat.com that will show you how to google that text,
                    you can alternatively use the addon icon in the toolbar to open a little menu to copy your own question URL as well as toggle "copied to clipboard" notifications.`],
            images: {
                cover: [lmgtfy1],
                horizontal: [lmgtfy2],
                vertical: [],
            },
        },
        blender: {
            title: "3D Modelling",
            short: `I have learnt the basics of 3D modelling in blender to assist in my indie game development projects. Some of my better models include a version of the sirenhead creature (created by Trevor Henderson), another original creature with a similar style, and an old stove prop.`,
            long: `This was a simple project to familiarize myself with the browser addon development workflow, the process itself is very straightforward,
            essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenationThis was a simple project to familiarize myself with the browser addon development workflow, the process itself is very straightforward,
            essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenationThis was a simple project to familiarize myself with the browser addon development workflow, the process itself is very straightforward,
            essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenationThis was a simple proof of concept to see how easy it would be to make a browser add-on, turns out the process itself is very straightforward,
                    essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenation for the URL
                    was all that was required, plus a few methods to obtain the information from the selected text and saving urls to the clipboard`,
            images: {
                cover: [blender3],
                horizontal: [blender1, blender4],
                vertical: [blender2],
            },
        },
        sigmo: {
            title: "Unity Orbital Mechanics Simulator",
            short: "An application that makes use of Unity's physics engine to simulate gravitational interactions between objects in two possible modes. One where you can observe the effects on the orbit of a spacecraft depending on its direction of propulsion.",
            long: "",
            images: {
                cover: [sigmo1],
                horizontal: [sigmo1],
                vertical: [sigmo2],
            },
        },
        portfolio: {
            span: 2,
            title: "This Page!",
            short: "A React app styled with tailwind CSS made from scratch.",
            long: "",
            images: {
                cover: [],
                horizontal: [sigmo1],
                vertical: [sigmo2],
            },
        },
    
    }
}

export default projects