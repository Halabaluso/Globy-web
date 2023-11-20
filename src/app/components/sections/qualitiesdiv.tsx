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
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>McDunalds</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image2}
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>McDunalds</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image3}
                            width={300}
                            height={300}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>McDunalds</p>
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