const Alert = ({message,handleClose}) => {
  return (
    <div className='fixed flex flex-row items-center justify-center bg-slate-500 bg-opacity-50 w-screen h-screen'>
        <div className='border shadow-md rounded-md h-32 w-80 bg-white flex flex-col justify-around items-center p-3'>
            <h4>{message}</h4>
            <button className="rounded-md border-none p-1 w-36 h-10 bg-sky-500 font-semibold text-white" onClick={()=>{handleClose()}}>OK</button>
        </div>
    </div>
  )
}

export default Alert