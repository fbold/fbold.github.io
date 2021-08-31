import { Link } from "react-router-dom"
import { TextElement } from "../TextComponents"

const Image = ({src}) => (
  <div className="flex items-center relative px-0 lg:px-0  w-full max-h-96 overflow-hidden">
    <img src={src} alt="" className="block w-full h-auto"/>
  </div>
)

const GridElement = ({title, span, onClick, image, children}) => {
  
  return (
    <Link to={`/${title}`}>
      <div
        className={`flex items-start col-span-1 md:col-span-${span} xl:col-span-${span}  relative my-2 h-300 w-full font-bold z-10`}
        data-rellax-speed="2">
        <div
          className="flex flex-col cursor-pointer items-start rounded w-full h-auto overflow-hidden bg-indigo-even-darker2 shadow-xl border-6 border-indigo-400 border-t-6 hover:border-t-20 hover:bg-indigo-even-darker duration-200"
          onClick={onClick}>
          <TextElement title={title}>{children}</TextElement>
          {image[0] && <Image src={image} />}
          
        </div>
      </div>
    </Link>
  )
}

export default GridElement