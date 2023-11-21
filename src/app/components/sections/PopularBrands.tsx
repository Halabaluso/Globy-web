function PopularBrands(){
    return(
        <div className="flex flex-col items-center justify-center bg-primary pt-10">
            <p className="text-4xl font-extrabold my-10">Principal brands</p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <button className="btn m-1 rounded-full">
                    McDunalds
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Burger Kongs
                    <div className="badge">+99</div>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <button className="btn px-12 btn-secondary rounded-full">See all brands</button>
            </div>
        </div>
    )
}

export {
    PopularBrands
}