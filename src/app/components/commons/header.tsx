"use client"
import React, { useEffect, useState } from "react";
import { BiCompass } from "react-icons/bi";
import { BsFillBalloonFill } from "react-icons/bs";
import { BiSolidFlag } from "react-icons/bi";

const HeaderDefault = () => {
    const [classString, setBooleanShow] = useState("p-5 flex flex-row justify-between bg-transparent w-full fixed duration-300")
    const [classString1, setClassString1] = useState("hidden")
    function Scroll() {
        useEffect(function mount() {
            function onScroll(e: Event) {
                if (window.scrollY >= 500) {
                    setBooleanShow("p-3 md:p-10 flex flex-col md:flex-row justify-between bg-primary w-full fixed duration-300")
                    setClassString1("my-10")
                } else {
                    setBooleanShow("p-5 flex flex-row justify-between bg-transparent w-full fixed duration-300")
                    setClassString1("hidden my-10")
                }
            }

            window.addEventListener("scroll", onScroll);

            return function unMount() {
                window.removeEventListener("scroll", onScroll);
            };
        });
    }
    Scroll()

    return (
        <>              
            <div className={classString}>
                <div className="flex flex-row">
                    <BsFillBalloonFill className = "font-bold text-4xl text-secondary"/>
                    <h1 className="font-bold text-4xl text-secondary"> Globy</h1>
                </div>
                <div className={classString1}>
                    <p className="font-bold text-center">Type your address and <span className="p-1 rounded bg-white">discover your restaurants.</span></p>
                    <form className= "flex flex-row items-center w-full mt-5 bg-white rounded-lg max-w-lg">
                        <button type = "submit" className="btn btn-secondary rounded-none rounded-l-lg border-none"><BiSolidFlag className = "text-xl"/></button>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full rounded-none rounded-r-lg border-none" />
                        <button className="text-secondary btn bg-white border-none"><BiCompass className = "text-xl"/> Actual ubication</button>
                    </form>
                </div>
                <button className="btn btn-secondary rounded-full px-12">Start</button>
            </div>
        </>
    )
}

export {
    HeaderDefault
}