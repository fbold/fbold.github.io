export const Title = ({children}) => (
  <div className="relative flow flex-wrap h-auto w-full content-center items-center text-center font-bold">
    <div className="w-full px-6 py-2">
      <div className=" font-bold text-3xl text-indigo-400 ">{children}</div>
      <hr className="m-auto self-center w-1/2 border-2 rounded-full mt-1" />
    </div>
  </div>
)

export const TextElement = ({title, c, children}) => (
  <div className={`relative px-3 lg:px-6 py-3 ${c ? 'text-center' : 'text-left'}`}>
    {title ? <div className="font-bold text-2xl text-indigo-400 mb-2 z-20">{title}</div> : null}
    <p className="text-gray-200 font-normal text-lg md:text-xl z-20 overflow-hidden">
      {children}
    </p>
  </div>
)