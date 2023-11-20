import Image from "next/image"
import image1 from "../../../img/image1.jpg"
import image2 from "../../../img/image2.jpg"
import image3 from "../../../img/image3.jpg"
import image4 from "../../../img/image4.jpg"
import image5 from "../../../img/image5.jpg"
import image6 from "../../../img/image6.jpg"
import image7 from "../../../img/image7.jpg"
import image8 from "../../../img/image8.jpg"


function BestRestaurant(){
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="text-center">
                <p className="text-4xl font-extrabold">Food in your home and much more</p>
                <div className="grid grid-cols-4 gap-20 p-20">
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image1}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>McDunalds</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image2}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>Burgur Kung</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image3}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>QFC</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image4}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>Tulo Pizza</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image5}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>Americuns food´s</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image6}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>Stragiatelu</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image7}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>KGB</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image className="rounded-full"
                            src={image8}
                            width={150}
                            height={150}
                            alt="Picture of the author"
                        />
                        <div className="bg-primary p-1 rounded shadow -mt-4 font-bold">
                            <p>McFlurrus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export{
    BestRestaurant
}