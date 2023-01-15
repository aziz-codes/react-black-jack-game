const Alert = ({ message, handleClose, sum }) => {
  return (
    <div className="fixed flex flex-row items-center justify-center bg-slate-500 bg-opacity-50 w-screen h-screen">
      <div className="border shadow-md rounded-md h-32 w-80 bg-white flex flex-col justify-around items-center p-3 gap-2">
        <h4>{message}  </h4>
        <div className="h-9 w-9 rounded-full shadow-md border p-1 text-center">
        {message ==="You got a Black Jack" ? null : sum}
        </div>
        <button
          className="rounded-md border-none p-1 w-36 h-10 bg-sky-500 font-semibold text-white"
          onClick={() => {
            handleClose();
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Alert;
