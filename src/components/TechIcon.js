

export const TechIcon = ({name}) => {
  
  switch (name) {
    case 'node':
      return <img title="NodeJS" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    case 'js':
      return <img title="JavaScript" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
    case 'html':
      return <img title="HTML5" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    case 'css':
      return <img title="CSS3" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    case 'tailwind':
      return <img title="TailwindCSS" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
    case 'python':
      return <img title="Python" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
    case 'unity':
      return (
        <svg className="h-20  w-20 text-white" fill="white" viewBox="0 0 128 128">
          <title>Unity3D</title>
          <path d="M82.48 63.578l22.418-38.402 10.832 38.402-10.832 38.398zm-10.926 6.238l22.422 38.402-39.047-9.922-28.211-28.48zM93.969 18.93L71.555 57.34H26.719L54.93 28.855zm32 31.582L112.293.031 61.25 13.559l-7.555 13.18-15.336-.109L1 63.582l37.359 36.949h.004l15.324-.113 7.57 13.176 51.035 13.527 13.676-50.473-7.762-13.07zm0 0"></path>
        </svg>
      )
    case 'react':
      return <img title="React.js" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    case 'git':
      return <img title="Git" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
    case 'ts':
      return <img title="TypeScript" className="h-20  w-20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
    default:
      return null
  }
}