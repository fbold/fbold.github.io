import { Link, useHistory } from "react-router-dom"
import { TextElement } from "../TextComponents"

const Image = ({src}) => (
  <div className="flex items-end mt-auto relative px-0 lg:px-0 w-full max-h-96 overflow-hidden">
    <img src={src} alt="" className="block w-full h-auto "/>
  </div>
)

const GridElement = ({title, span, path, onClick, image, children}) => {
  const history = useHistory()
  
  return (
    // <Link to={`/${path}`}>
      <div onClick={() => history.push('/'+path)}className={`flex items-start col-span-1 md:col-span-1 xl:col-span-1 relative h-full w-full font-bold z-10`}>
        <div
          className="flex flex-col cursor-pointer items-start rounded w-full h-full overflow-hidden bg-indigo-even-darker2 shadow-xl hover:-mb-14p border-6 border-indigo-400 hover:border-t-20 hover:border-indigo-500 hover:bg-indigo-even-darker duration-100"
          onClick={onClick}
        >
          <TextElement title={title}>{children}</TextElement>
          {image[0] && <Image src={image} />}
          
        </div>
      </div>
    // </Link>
  )
}

export default GridElement