import Image from "next/image"
import image1 from "../../../img/image12.png"

function PrincipalCitys(){
    return(
        <div className="bg-primary -mt-20">
            <div className="flex flex-col items-center justify-center">
                <Image src={image1} alt = "Chicken img" width={200} height={200}></Image>
                <p className="text-4xl font-extrabold my-10 text-center">Food in your home and much more</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center">
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
            <div className="flex flex-col md:flex-row justify-center items-center">
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
                <button className="btn px-12 btn-secondary rounded-full">See all countries</button>
            </div>
        </div>
    )
}

export{
    PrincipalCitys
}