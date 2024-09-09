import LionHero from "./LionHero"

const Footer = ({ mode }) => {
    const theme = {
        light: {
            bg: " bg-transparent text-black",
            li_text: "text-black",
            lion_color:"#000"
        },
        dark: {
            bg: "footer_bg text-white",
            li_text: "text-[#8d8a8a]",
            lion_color:"#fff"
        },
    }

    return (
        <div className={`flex flex-col  items-center justify-center w-full p-4  lg:p-8 relative text-inherit ${theme[mode].bg}`}>
            <div className="flex flex-col items-center relative justify-center w-full mt-12 max-w-5xl text-inherit">
                <div className="grid grid-cols-1 opacity-50 w-full  md:grid-cols-[55%_40%] justify-between  gap-5">
                    <div className="flex flex-col w-full  items-start gap-3">
                        <h1 className="font-bold  text-4xl relative">Oanthe
                            <div className=" absolute -top-6 -right-8 ">
                                <LionHero color={theme[mode].lion_color} width={50} height={50} opacity={"1"} />
                            </div>
                        </h1>
                        <small className="text-xs font-bold">Professional Web Design</small>
                        <p className="text-xs font-light lg:max-w-[23.5rem]">Hi! My name is Dmitrii and I’m an expert in web design and branding. I can help you make your website more attractive</p>
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col items-start gap-3">
                            <h1 className="font-bold text-xs">Company</h1>
                            <ul className={`space-y-2 ${theme[mode].li_text} font-bold`}>
                                <li className="text-xs ">About</li>
                                <li className="text-xs">Contact</li>
                                <li className="text-xs">Careers</li>
                                <li className="text-xs">Press</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h1 className="font-bold text-xs">Use Cases</h1>
                            <ul className={`space-y-2 ${theme[mode].li_text} font-bold`}>
                                <li className="text-xs">Design</li>
                                <li className="text-xs">Marketing</li>
                                <li className="text-xs">Analytics</li>
                                <li className="text-xs">Engineering</li>
                            </ul>
                        </div>
                        <div className="flex flex-col items-start gap-3">
                            <h1 className="font-bold text-xs">Company</h1>
                            <ul className={`space-y-2 ${theme[mode].li_text} font-bold`}>
                                <li className="text-xs">About</li>
                                <li className="text-xs">Contact</li>
                                <li className="text-xs">Careers</li>
                                <li className="text-xs">Press</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer