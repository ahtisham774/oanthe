import Button from "./button"

const MakeItSimple = ({ mode }) => {
    const theme = {
        light: {
            bg: "bg-white",
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
        <div className={`w-full h-full py-8 px-4 lg:px-12 flex items-center justify-center`} >
            <div className={`w-full  flex flex-col overflow-hidden md:flex-row max-w-5xl items-center justify-between  rounded-3xl ${theme[mode].bg} ${theme[mode].text} transition-all`}>
                <div className="w-full">
                    <img src="/assets/tiger.png" className="sm:max-w-[400px]" alt="" />
                </div>
                <div className="flex items-center py-8 h-full w-full justify-center ">
                    <div className="flex flex-col  items-center gap-4 sm:gap-8 ">
                        <h2 className="gradient_sub_title text-2xl sm:text-3xl font-bold">Full Stack</h2>
                        <h1 className="gradient_title font-bold text-3xl sm:text-5xl">Make it simple</h1>
                        <p className=" text-sm font-normal max-w-xs leading-relaxed w-full  text-center">
                            Unified <span className="mx-1 hero_gradient_text">JavaScript and CSS3</span>,  outstanding developer experience.
                        </p>
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MakeItSimple