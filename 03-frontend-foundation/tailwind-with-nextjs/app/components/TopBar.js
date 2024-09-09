export default function TopBar() {
  return (
    <div className="flex  fixed bg-black w-full">
      <img src="youtube_logo.png" />

      <div className="flex w-full justify-between">
        <div className=" flex w-full h-12  justify-center align-middle m-2">
          <div className="flex w-1/2 h-10 border p-1 border-slate-400 hover:border-blue-600 rounded-l-full">
            <img  src="search.png" />
            <input className="w-full bg-black outline-none " type="text" placeholder="Search" />
          </div>
          <div className=" flex justify-center align-middle w-16 h-10 border  border-slate-400 rounded-r-full bg-slate-800">
          <button><img className="w-7 h-7"  src="search.png" /></button>
          </div>
        </div>

        <div className="flex  justify-end">
          <button>Video</button>
          <button>Notification</button>
          <button>Account</button>
        </div>
      </div>
    </div>
  );
}
