import { TextElement } from "../components/TextComponents"
import Collage from "../components/CollageComponent"

const ExpandedInfo = ({ extendedInfoObject, handleClick }) => (
  <div className="flex absolute w-full justify-center items-center no-scrollbar">
    <div className="flex fixed justify-center items-center mt-auto top-0 h-full w-full bg-purple-even-darker z-0">
      <div className="absolute top-5 h-14 w-14 cursor-pointer z-30 rounded-full bg-purple-even-darker invisible md:visible" onClick={handleClick}>
        <svg className="animate-pulse w-full h-full fill-current text-indigo-200" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
        </svg>
      </div>
      {/* <div className="absolute bottom-5 h-14 w-14 cursor-pointer z-30 rounded-full bg-purple-even-darker visible md:invisible" onClick={handleClick}>
        <svg className="animate-pulse w-full h-full fill-current text-indigo-200" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
        </svg>
      </div> */}
      <div
      className={`flex items-center relative h-full w-full font-bold z-10 `}
      data-rellax-speed="2">
        <div
          className="flex relative flex-col items-start w-full h-full md:w-2/3 md:h-4/5 overflow-scroll no-scrollbar my-5 mx-auto bg-indigo-even-darker shadow-xl  border-indigo-400 md:rounded border-l-6 border-r-6 duration-200">
          <TextElement>{extendedInfoObject.long}</TextElement>
          <Collage object={extendedInfoObject}/>
        </div>
      </div>
    </div>
  </div>
)

export default ExpandedInfo