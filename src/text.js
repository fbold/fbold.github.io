const projects = {
    about: {
        short: `I'm a young programmer and game developer looking to get into the industry and put my skills to use in a professional environment.
        I've been obsessed with programming for as long as I can remember, I've always been eager to bring my ideas to life in a tangible way,
        and programming gave me that freedom. From early java game programming, to messing about with arduino, to starting my journey in web development
        and now becoming a Unity obsessed maniac and avid React learner.`,
    },
    game: {
        short: `Dog Days (working title) is a first person video game where you play a solitary man mourning the recent death of his best friend, who happens to be a dog,
        `
    },
    lmgtfy: {
        short: [`This firefox add-on allows you to immediately obtain a link to a `,
                <a className="underline" href="https://letmegooglethat.com/" target="_blank" rel="noopener noreferrer">LMGTFY</a>,
                ` question to send in reply to anyone asking a rudely googleable question.`],
        images: ['./src/lmgtfy1.png'],
        long: `This was a simple proof of concept to see how easy it would be to make a browser add-on, turns out the process itself is very straightforward,
                essentially only as difficult as the functionality you want to give it. In my case, some simple string manipulation and concatenation for the URL
                was all that was required, plus a few methods to obtain the information from the selected text and saving urls to the clipboard`
    },
    sigmo: {
        short: "",
        long: ""
    }
}

export default projects