const ProgressBar = props => {
  return(
    <>
      <div className="w-4/5 md:w-2/3 m-auto">
        <p className="font-mono text-lg text-indigo-200">{props.title}</p>
      </div>
      <div className=" h-4 w-4/5 md:w-2/3 m-auto items-center" >
        <div className="flex align-middle w-full m-auto items-center">
          <div className={`bg-indigo-300 h-4 z-30`} style={{width:props.p*10+"%"}} >
          
          </div>
          <div className={`h-4 border-dashed border-2 border-l-0`} style={{width:100-props.p*10+"%"}} >
            
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgressBar