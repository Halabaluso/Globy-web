import Image from "next/image"
import image1 from "../../../img/image9.png"
import image2 from "../../../img/image10.png"
import image3 from "../../../img/image11.png"

function QualitiesDiv() {

    return (
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="text-center">
                <p className="text-4xl font-extrabold">Everything you want.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 p-20">
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image1}
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="text-center">
                            <p className="text-xl font-bold">The best restaurant of your city</p>
                            <p>Get to know the best restaurants in your city and order <span className="bg-primary rounded">the best food of your choice.</span></p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image2}
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="text-center">
                            <p className="text-xl font-bold">Fast delivery</p>
                            <p>Take your  <span className="bg-primary rounded">order in minutes</span> with direct follow. You can see the time with our online map follow.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image3}
                            width={200}
                            height={200}
                            alt="Picture of the author"
                        />
                        <div className="text-center">
                            <p className="text-xl font-bold">Buy everything, everywhere</p>
                            <p>Buy in all our markets and <span className="bg-primary rounded">much more</span>. All your best products and foods in the same place.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <button className="btn btn-secondary rounded-full border-none px-12">See all features</button>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFD900" fillOpacity="1" d="M0,128L60,122.7C120,117,240,107,360,90.7C480,75,600,53,720,74.7C840,96,960,160,1080,176C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    )
}

export {
    QualitiesDiv
}