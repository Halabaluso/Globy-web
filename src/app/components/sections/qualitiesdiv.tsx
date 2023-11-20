import Image from "next/image"
import image1 from "../../../img/image9.png"
import image2 from "../../../img/image10.png"
import image3 from "../../../img/image11.png"

function QualitiesDiv(){
    
    return(
        <div className="flex flex-col items-center justify-center mt-20">
            <div className="text-center">
                <p className="text-4xl font-extrabold">Everything you want.</p>
                <div className="grid grid-cols-3 gap-20 p-20">
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
            </div>
        </div>
    )
}

export {
    QualitiesDiv
}