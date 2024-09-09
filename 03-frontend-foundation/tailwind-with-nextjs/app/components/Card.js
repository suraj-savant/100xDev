import React from "react";

export default function Card(){

    return(
        <div className="p-2 border-solid">
            <img className="rounded-lg" src="thumbnail.png"/>
            <div className="flex justify-between">
                <div className="">
                    <img className="w-9 h-9 rounded-full" src="logo.jpg" alt="logo"/>
                </div>
                <div className="px-3">
                <p className="text-slate-100 text-base">Build your AI Startup with DataStax Astra...</p>
                <p className="text-gray-500 text-sm">Laith Academy <br/> 223K views 2 years ago</p>

                </div>


            </div>
        </div>
    )
}