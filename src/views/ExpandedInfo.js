import { TextElement, Title } from "../components/TextComponents"
import Collage from "../components/CollageComponent"
import { useHistory } from "react-router-dom"
import { IoIosArrowBack } from "react-icons/io"

const ExpandedInfo = ({ extendedInfoObject }) => {
  const history = useHistory()

  return (
    <div className="flex w-full no-scrollbar">
      <div className="flex fixed items-center mt-auto top-0 h-full w-full bg-purple-even-darker z-0">
        <div
          className={`flex items-center relative h-full w-full font-bold z-10`}
        >
          <div className="flex relative flex-col md:pt-5 items-start md:items-center w-full h-full overflow-scroll no-scrollbar">
            <div
              className="hidden md:flex relative mr-auto ml-6 text-left text-gray-200 cursor-pointer items-center"
              onClick={() =>
                history.length >= 2 ? history.goBack() : history.push("/")
              }
            >
              <IoIosArrowBack size={20} />
              <p className="text-gray-200 font-normal text-lg md:text-xl underline inline">
                Back
              </p>
            </div>
            <div className="w-full md:w-2/3 xl:w-1/2">
              <Title justify="left">{extendedInfoObject.title}</Title>
              <TextElement>{extendedInfoObject.long}</TextElement>
            </div>
            <Collage object={extendedInfoObject} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpandedInfo
