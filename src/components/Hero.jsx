import LionHero from "./LionHero"



const Hero = ({ mode }) => {
    const theme = {
        light: {
            bg: "bg-transparent",
            text: "text-black",
            lion_color: "#040000",
            opacity: "0.13"

        },
        dark: {
            bg: "bg-hero",
            text: "text-white",
            lion_color: "#E8E8E8",
            opacity: "0.2"
        },
    }
    return (
        <div className={`w-full h-full px-4 lg:px-12`}>
            <div className={`w-full  flex items-center  py-20 rounded-3xl justify-center ${theme[mode].bg} ${theme[mode].text} transition-all`}>
                <div className="flex w-full max-w-xl  flex-col items-end justify-center  relative">
                    <div className=" absolute -top-5 sm:top-0 sm:-right-5 translate-y-0">
                        <LionHero color={theme[mode].lion_color} width={200} height={100} opacity={theme[mode].opacity} />
                    </div>
                    {/* <img src="/assets/lion_hero.svg" className="text-red-500 w-[200px] h-auto object-cover  transition-all block" alt="Hero Image" /> */}
                    <h1 className="font-bold text-7xl sm:text-9xl text-center mt-16  transition-all lg:mt-12 w-full font-inherit text-inherit">Oanthe</h1>
                    <span className="font-semibold px-3 py-1 text-black rounded-lg bg-[#FFD600]">Full Stack</span>

                    <div className="w-full flex items-center justify-center  py-4">
                        <p className=" text-base sm:text-lg lg:text-xl font-normal leading-relaxed w-full  text-center">
                            Both <span className="mx-1 hero_gradient_text">Front End and Back End</span>, now coming together
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero