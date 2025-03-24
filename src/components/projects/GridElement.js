import { Link, useHistory } from "react-router-dom"
import { TextElement } from "../TextComponents"

const Image = ({ src }) => (
  <div className="flex items-center mt-auto relative px-0 lg:px-0 w-full overflow-hidden">
    <img src={src} alt="" className="block w-full h-auto " />
  </div>
)

const GridElement = ({ title, span, path, onClick, image, children }) => {
  const history = useHistory()

  return (
    // <Link to={`/${path}`}>
    <div
      onClick={() => history.push("/" + path)}
      className={`flex items-start col-span-1 md:col-span-1 xl:col-span-1 relative h-full w-full font-bold z-10`}
    >
      <div
        className="flex flex-col group cursor-pointer items-start w-full h-full overflow-hidden bg-black shadow-xl border-6 border-indigo-400 hover:border-white duration-200"
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
