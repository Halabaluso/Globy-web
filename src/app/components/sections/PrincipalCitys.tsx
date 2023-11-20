import Image from "next/image"
import image1 from "../../../img/image12.png"

function PrincipalCitys(){
    return(
        <div className="bg-primary -mt-16">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#ffffff" fill-opacity="1" d="M0,192L48,208C96,224,192,256,288,277.3C384,299,480,309,576,288C672,267,768,213,864,186.7C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
            </svg>
            <div className="flex flex-col items-center justify-center mt-20">
                <Image src={image1} alt = "Chicken img" width={200} height={200}></Image>
                <p className="text-4xl font-extrabold my-10">Food in your home and much more</p>
            </div>
            <div className="flex flex-row justify-center items-center">
                <button className="btn m-1 rounded-full">
                    New York
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Texas
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    China
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Japan
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Indonesia
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Taiwan
                    <div className="badge">+99</div>
                </button>
            </div>
            <div className="flex flex-row justify-center items-center">
                <button className="btn m-1 rounded-full">
                    New York
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Texas
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Andorra
                    <div className="badge">+99</div>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <button className="btn btn-lg btn-secondary rounded-full">See all countries</button>
            </div>
        </div>
    )
}

export{
    PrincipalCitys
}