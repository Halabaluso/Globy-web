'use client';
import Lottie from "lottie-react";
import { BiCompass } from "react-icons/bi";
import { BiSolidFlag } from "react-icons/bi";
import { herogif1 } from "../../../img/gifs"


function HeroComponent (){
    return(
        <div className="flex flex-col items-center justify-center bg-primary pt-20">
            <div className = "flex flex-row items-center space-x-4">
                <div className = "w-52 md:w-96">
                    <Lottie animationData={herogif1}/>
                </div>
                <div className="flex flex-col max-w-xl text-center p-5 md:p-20">
                    <p className="text-2xl md:text-6xl font-extrabold">Food in your home and much more</p>
                    <p className="mt-5 text-sm md:text-lg">Food, markets, buy and more.</p>
                    <form className="flex flex-row items-center w-full mt-5 bg-white rounded-lg">
                        <button type = "submit" className="btn btn-secondary rounded-none rounded-l-lg border-none hidden md:block"><BiSolidFlag className = "text-xl"/></button>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full rounded md:rounded-r-lg border-none" />
                        <button className="text-secondary btn bg-white border-none hidden md:flex flex-row items-center"><BiCompass className = "text-xl"/> <p>Actual ubication</p></button>
                    </form>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fillOpacity="1" d="M0,0L48,10.7C96,21,192,43,288,42.7C384,43,480,21,576,42.7C672,64,768,128,864,160C960,192,1056,192,1152,170.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export {
    HeroComponent
}