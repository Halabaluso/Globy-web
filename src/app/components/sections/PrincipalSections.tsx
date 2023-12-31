function PrincipalSections() {
    return (
        <div className="flex flex-col items-center justify-center bg-primary pt-10">
            <p className="text-4xl font-extrabold my-10">Discover our sections</p>
            <div className="flex flex-col md:flex-row justify-center items-center">
                <button className="btn m-1 rounded-full">
                    Supermarket
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Real food
                    <div className="badge">+99</div>
                </button>
                <button className="btn m-1 rounded-full">
                    Vegan food
                    <div className="badge">+99</div>
                </button>
            </div>
            <div className="flex flex-col items-center justify-center mt-10">
                <button className="btn px-12 btn-secondary rounded-full">See all categories</button>
            </div>
        </div>
    )
}

export {
    PrincipalSections
}