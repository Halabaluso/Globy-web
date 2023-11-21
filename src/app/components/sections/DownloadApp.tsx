import Image from "next/image"
import image1 from "../../../img/image14.png"
import image2 from "../../../img/image13.png"
import image3 from "../../../img/image15.png"

function DowloadApp(){
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFD900" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,74.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
            </svg>
            <div className="flex flex-col md:flex-row justify-center items-center md:-mt-28">
                <div className="flex flex-col items-center">
                    <Image src={image1} alt = "Download app" width={200} height={200}></Image>
                    <p className="text-6xl font-extrabold text-center">Download our app</p>
                    <p>Take our app and discover all Globy world</p>
                    <Image src={image3} alt = "App stores" width={300} className="mt-10"/>
                </div>
                <Image src={image2} alt = "Download app" width={600}/>
            </div>
        </div>
    )
}

export{
    DowloadApp
}