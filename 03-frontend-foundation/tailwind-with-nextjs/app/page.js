import Gallary from "./components/Gallary";
import TopBar from "./components/TopBar";


export default function Home() {
  return (
    <>
    <div className="flex">
      <div className="w-14  pr-4">
      {/* 
      App Bar
      */}
      </div>
    <div className="">
      <TopBar />    
      <Gallary />
    </div>

    </div>

    </>
  );
}
