

const StartInMin = ({theme}) => {
    return (
        <div className="py-12 mt-12 flex items-center justify-center p-4 lg:px-12">
            <div className="flex flex-col gap-2 items-center">
                <h1 className="font-extrabold text-xl sm:text-5xl text-center transition-all w-full font-inherit text-inherit gradient_sim">Start in Minutes</h1>

                <div className="w-full flex items-center justify-center max-w-xl py-4">
                    <p className=" text-base sm:text-lg font-normal leading-relaxed w-full  text-center">
                        Universal design systems for every framework you use. Edit the code and see live update immediately.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <img src={`/assets/${theme == "dark" ? "jest_dark" : "jest"}.svg`} className={`w-full  h-auto max-w-md`} alt="Jest" />
                <img src={`/assets/${theme == "dark" ? "jest_dark" : "jest"}.svg`} className={`w-full  h-auto max-w-md`} alt="Jest" />
                <img src={`/assets/${theme == "dark" ? "jest_dark" : "jest"}.svg`} className={`w-full  h-auto max-w-md`} alt="Jest" />

                </div>
            </div>

        </div>
    )
}

export default StartInMin