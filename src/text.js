import gatherbun from "./img/gatherbun-1.png"

import futile from "./img/futile-1.png"

import hoards from "./img/crypto-hoards-2.png"

// import lmgtfy1 from "./img/lmgtfy1.png"
// import lmgtfy3 from "./img/lmgtfy-page.png"
// import lmgtfy2 from "./img/lmgtfy2.png"

import sigmo1 from "./img/sigmo-preview-portfolio.gif"
import sigmo2 from "./img/sigmo-preview3.gif"

import blender1 from "./img/creature2.png"
import blender2 from "./img/sirenhead.png"
import blender4 from "./img/stove.png"

// import portfolio1 from "./img/bg-image-2.png"
// import portfolio2 from "./img/react-gif.gif"

import game1 from "./img/game1.jpg"
import game2 from "./img/landscape.gif"

import erebus1 from "./img/erebus-1.png"
import erebus2 from "./img/erebus-2.png"

const text = {
  about: {
    short: `Fullstack JS/TS developer with a keen interest in all things web dev. Always learning. Currently working on futile.me and gatherbun.com`,
  },
  projects: [
    {
      bgfixed: true,
      span: 1,
      path: "gatherbun",
      title: "Gatherbun",
      short:
        "NextJS app using Prisma with PostgreSQL database all containerized with docker and hosted on VPS with CI/CD using GH Actions",
      long: (
        <>
          <a href="https://gatherbun.com/" className="underline">
            gatherbun.com
          </a>{" "}
          is a platform I am currently working on that aims to deliver improved
          virtual invitations for any occasion by taking full advantage of the
          medium. It's a NextJS app that uses the Prisma ORM with a PostgreSQL
          database, all containerized with docker and hosted on VPS with CI/CD
          using GH Actions and using Stripe as a payment processor.
        </>
      ),
      images: {
        cover: [gatherbun],
        horizontal: [gatherbun],
        vertical: [],
      },
    },
    {
      bgfixed: true,
      span: 1,
      path: "futile.me",
      title: "futile.me",
      short:
        "Personal NextJS writing project with custom auth implementation using iron-session, text editing with TipTap",
      long: (
        <>
          <a href="https://futile.me/" className="underline">
            futile.me
          </a>{" "}
          is a personal project I am working on. It's a minimal writing platform
          that uses the TipTap editor for writing and has a lot of custom CSS.
          While it's not designed it in mind, it will work on mobile. It's more
          of a platform entirely for me to use to write, so it is less concerned
          with UX.
          <br />
          <br />
          It uses iron-session for auth, but I didn't want to use any emails, I
          wanted classic username+password auth. To make recovery possible and
          increase security, I implemented a 12-word mnemonic recovery system
          which you can see when creating a new account.
          <br />
          <br />
          Please not as this is still an in development platform, any data and
          accounts might be removed before release.
        </>
      ),
      images: {
        cover: [futile],
        horizontal: [futile],
        vertical: [],
      },
    },
    {
      bgfixed: true,
      span: 1,
      path: "crypto-hoards",
      title: "Crypto Hoards",
      short:
        "React app that uses the Solana JSON RPC API to fetch information on your solana wallet, retrieving your NFTs and allowing you to view them within the app",
      long: (
        <>
          <a href="https://crypto-hoards.com/" className="underline">
            Crypto Hoards
          </a>{" "}
          is a Solana Web3 enabled web app that can connect to your solana
          wallet and display your media NFTs. The code is available{" "}
          <a
            href="https://github.com/fbold/crypto-hoards"
            className="underline"
          >
            on my GitHub
          </a>
          .
        </>
      ),
      images: {
        cover: [hoards],
        horizontal: [hoards],
        vertical: [],
      },
    },
    {
      bgfixed: true,
      span: 1,
      path: "into-erebus",
      title: "Into Erebus",
      short: "Interactive 3D web experience made with react-three-fiber",
      long: (
        <>
          This project is intended to be a 3D web experience that depicts the
          tragic events of the Franklin expedition of 1845. <br /> It uses
          react-three-fiber for the 3D graphics, which makes the three.js
          library available as react components.
          <br />
          Not yet finished but the repo is, as always,{" "}
          <a href="https://github.com/fbold/into-erebus" className="underline">
            on my GitHub
          </a>
          .
        </>
      ),
      images: {
        cover: [erebus1],
        horizontal: [erebus2],
        vertical: [],
      },
    },
    // {
    //   bgfixed: true,
    //   span: 1,
    //   path: "portfolio",
    //   title: "This Page!",
    //   short:
    //     "A fully responsive React app styled with tailwind CSS made from scratch.",
    //   long: (
    //     <>
    //       One of the first react apps I made was this site. It uses the rellax
    //       package for parts of the intro effect. The rest is TailwindCSS.
    //     </>
    //   ),
    //   images: {
    //     cover: [portfolio1],
    //     horizontal: [portfolio2],
    //     vertical: [],
    //   },
    // },
    // {
    //   span: 1,
    //   path: "addon",
    //   title: "LMGTFY Firefox Addon",
    //   short: (
    //     <>
    //       A firefox add-on that allows you to immediately obtain a link to a
    //       <a
    //         className="underline"
    //         href="https://letmegooglethat.com/"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         {" "}
    //         LMGTFY{" "}
    //       </a>
    //       question to send in reply to anyone asking a rudely googleable
    //       question.
    //     </>
    //   ),
    //   long: (
    //     <>
    //       This was a simple project to familiarize myself with the browser addon
    //       development workflow. Code available on{" "}
    //       <a
    //         className="underline"
    //         href="https://github.com/fbold/lmgtfy-add-on"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         GitHub
    //       </a>
    //       .<br />
    //       And you can check out the addon{" "}
    //       <a
    //         className="underline"
    //         href="https://addons.mozilla.org/en-GB/firefox/addon/lmgtfy-addon/"
    //         target="_blank"
    //         rel="noreferrer"
    //       >
    //         here
    //       </a>
    //       .
    //     </>
    //   ),
    //   images: {
    //     cover: [lmgtfy1],
    //     horizontal: [lmgtfy2],
    //     vertical: [lmgtfy3],
    //   },
    // },
    {
      span: 1,
      path: "game-dev",
      title: "Game Development",
      short: `Worked with Unity game engine for a few years developing games and other projects, as well as 3D modelling for them`,
      long: (
        <>
          I've spent a lot of time in the past working on personal game
          development projects in the Unity game engine. Nothing released...
          Yet!
          <br />
          Pictured below are assets and scenes from my most recent game dev
          project, twitter page here:{" "}
          <a href="https://twitter.com/SurakDev" className="underline">
            https://twitter.com/SurakDev
          </a>
          <br />
          As part of my game development journey I have also learnt 3D modelling
          with blender.
        </>
      ),
      images: {
        cover: [game1],
        horizontal: [game2, blender1, blender4],
        vertical: [blender2],
      },
    },
    // blender: {
    //   span: 2,
    //   title: "3D Modelling",
    //   short: `Take a look at some of the blender models I have made!`,
    //   long: `As part of my game development journey, I have had to learn 3D modelling to allow myself to have more control over the style and consistency in style of the game, as well as making the development process more economical (albeit also more time consuming!)
    //       I love the asthetic and lore surrounding creatures like sirenhead. Some of my better models include a version of the sirenhead creature (created by Trevor Henderson), another original creature with a similar style, and an old stove prop.`,
    //   images: {
    //     cover: [blender3],
    //     horizontal: [blender1, blender4],
    //     vertical: [blender2],
    //   },
    // },
    {
      span: 2,
      path: "sigmo",
      title: "Unity Orbital Mechanics Simulator",
      short:
        "An application that makes use of Unity's physics engine to simulate gravitational interactions between objects in two possible modes.",
      long: "This application models the effects of gravity on the orbit of a spacecraft depending on its direction of propulsion and visualises the n body problem. This involved bringing orbital mechanics equations into code in order to accurately simulate a large number of gravitational interactions for one part of the program, as well as allowing for real-time visualization of the orbit of a craft during an orbital manoeuvre.",
      images: {
        cover: [sigmo1],
        horizontal: [sigmo1],
        vertical: [sigmo2],
      },
    },
  ],
}

export default text
