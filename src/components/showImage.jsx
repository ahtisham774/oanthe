import { FiUpload } from "react-icons/fi"
import { MdDateRange } from "react-icons/md"

const ShowImage = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-center w-full p-4 lg:p-8 relative text-inherit">
            <div className="flex flex-col items-center justify-center gap-5  text-inherit">
                <h2 className="text-lg font-normal text-inherit text-center">Certified Course</h2>
                <h1 className="text-4xl font-bold text-inherit text-center">Move the needle</h1>
            </div>

            <div className="w-full showImageBg  grid grid-cols-1 text-white md:grid-cols-[20rem_1fr] gap-4 rounded-3xl max-w-4xl p-6">
                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-col gap-4  px-4">
                        <h1 className="text-4xl font-extrabold lg:self-end text-[#D49900]">Clear as day</h1>
                        <div className="flex items-center justify-end gap-3">
                            <svg className="mix-blend-difference" width="35" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M36.5 30C33.1863 30 30.5 32.6863 30.5 36C30.5 39.3137 33.1863 42 36.5 42C39.8137 42 42.5 39.3137 42.5 36C42.5 32.6863 39.8137 30 36.5 30ZM36.5 30V16C36.5 14.9391 36.0786 13.9217 35.3284 13.1716C34.5783 12.4214 33.5609 12 32.5 12H26.5M12.5 18C15.8137 18 18.5 15.3137 18.5 12C18.5 8.68629 15.8137 6 12.5 6C9.18629 6 6.5 8.68629 6.5 12C6.5 15.3137 9.18629 18 12.5 18ZM12.5 18V42" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className="lg:max-w-[8rem]">A single source
                                of truth</p>
                        </div>
                        <p className="opacity-80 text-inherit text-xs md:max-w-[15rem]">
                            When you add work to your
                            Slate calendar we automatically
                            calculate useful insights
                        </p>
                    </div>


                    <div className="overflow-hidden rounded-3xl">
                        <img src="/assets/tiger.png" className="max-w-[20rem] grayscale -translate-x-5" alt="" />
                    </div>

                </div>
                <div className="w-full flex flex-col items-center gap-8">
                    <h1 className="text-4xl font-extrabold gradient_text_green_to_teal">Go the distance</h1>

                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-col lg:flex-row items-start justify-between gap-5">
                            <div className="flex flex-col gap-5 w-full p-4 rounded-3xl bg-[#D2F4FF]">
                                <h5 className="text-[#0A65EE] font-bold text-sm">Safe harbor</h5>
                                <div className="flex items-center gap-10 justify-between py-4 text-[#008AD7]">
                                    <h1 className="text-2xl font-extrabold ">Clear as day</h1>
                                    <MdDateRange className="w-5 h-5" />
                                </div>
                                <input type="date" placeholder="mm/dd/yyyy" className="w-full p-2 rounded-xl border-2 placeholder:text-[#1F8197] text-[#1F8197] bg-transparent  border-[#55888F]" />
                                <div className="flex items-center justify-end gap-5 text-[#1F8197] font-bold">
                                    <button className="bg-none border-none text-xs outline-none text-inherit">Cancel</button>
                                    <button className="bg-none border-none text-xs outline-none text-inherit">OK</button>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-3">
                                <div className="flex items-center gap-3 bg-[#A3EEFF] p-1 px-3 rounded-lg">
                                    <FiUpload className="text-[#06B5C0]" />
                                    <small className="text-[#D37F00] text-xs font-bold">Steady as a rock</small>
                                </div>
                                <h2 className="text-[#06B5C0] font-extrabold text-3xl">Buttoned up</h2>
                                <p className="opacity-80 text-inherit text-xs md:max-w-[15rem]">
                                    When you add work to your
                                    Slate calendar we automatically
                                    calculate useful insights
                                </p>
                                <div className="flex items-start justify-between w-full">
                                    <img src="/assets/mi.svg" className="max-w-[6rem]" alt="MI" />
                                    <h1 className="font-extrabold text-[#2C95F6] text-base">@mui/material</h1>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row lg:items-start w-full py-4 justify-between gap-5">
                            <div className="flex items-center gap-5">
                                <img src="/assets/terminal.svg" className="max-w-[3rem]" alt="terminal" />
                                <h2 className="max-w-[8rem] font-bold">A single source
                                    of truth</h2>
                            </div>
                            <div className="flex items-center gap-5">
                                <img src="assets/git_icon1.svg" className="w-16" alt="icon1" />
                                <img src="assets/git_icon2.svg" className="w-16" alt="icon2" />
                                <img src="assets/git_icon3.svg" className="w-16" alt="icon3" />

                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-end w-full pt-4 justify-between gap-5">
                            <p className="bg-[#061548] text-white p-4 text-center rounded-2xl text-inherit text-xs md:max-w-[15rem]">
                                When you add work to your
                                Slate calendar we automatically
                                calculate useful insights
                            </p>
                            <div className="flex items-center flex-col gap-2">
                                <h1 className="font-bold text-white">Batten down the hatches</h1>
                                <p className="text-white text-center opacity-80 text-xs md:max-w-[13rem]">
                                    When you add work to your
                                    Slate calendar we automatically
                                    calculate useful insights
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:flex-row lg:items-end w-full justify-between gap-5">
                            <img src="/assets/axios.svg" className="max-w-[13rem]" alt="" />
                            <img src="/assets/bottom_icons.svg" className="max-w-[9rem]" alt="" />

                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default ShowImage