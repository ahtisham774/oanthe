import { FaArrowRight } from "react-icons/fa"




const NewLetter = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-center w-full p-4 lg:p-8 relative text-inherit">
            <div className="flex flex-col items-center relative justify-center w-full p-8 rounded-2xl gap-5 max-w-5xl text-inherit bg_newLetter">
                <div className="absolute top-2 right-3">
                    <svg width="50" height="40" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_1_4668)">
                            <path d="M35.5 62.125L31.2104 58.2792C26.2306 53.7924 22.1136 49.9219 18.8594 46.6677C15.6052 43.4136 13.0167 40.5045 11.0938 37.9406C9.17086 35.3274 7.81495 32.9361 7.02606 30.7667C6.28648 28.5972 5.91669 26.3785 5.91669 24.1104C5.91669 19.4757 7.46981 15.6052 10.5761 12.499C13.6823 9.39272 17.5528 7.8396 22.1875 7.8396C24.7514 7.8396 27.192 8.38196 29.5094 9.46668C31.8268 10.5514 33.8236 12.0799 35.5 14.0521C37.1764 12.0799 39.1733 10.5514 41.4907 9.46668C43.808 8.38196 46.2486 7.8396 48.8125 7.8396C53.4473 7.8396 57.3177 9.39272 60.424 12.499C63.5302 15.6052 65.0834 19.4757 65.0834 24.1104C65.0834 26.3785 64.6889 28.5972 63.9 30.7667C63.1604 32.9361 61.8292 35.3274 59.9063 37.9406C57.9834 40.5045 55.3948 43.4136 52.1407 46.6677C48.8865 49.9219 44.7695 53.7924 39.7896 58.2792L35.5 62.125ZM35.5 54.1375C40.2334 49.8972 44.1285 46.2733 47.1854 43.2656C50.2424 40.2087 52.6584 37.5709 54.4334 35.3521C56.2084 33.084 57.441 31.0872 58.1313 29.3615C58.8216 27.5865 59.1667 25.8361 59.1667 24.1104C59.1667 21.1521 58.1806 18.6868 56.2084 16.7146C54.2361 14.7424 51.7709 13.7563 48.8125 13.7563C46.4952 13.7563 44.3504 14.4219 42.3782 15.7531C40.4059 17.0351 39.05 18.6868 38.3104 20.7084H32.6896C31.95 18.6868 30.5941 17.0351 28.6219 15.7531C26.6497 14.4219 24.5049 13.7563 22.1875 13.7563C19.2292 13.7563 16.7639 14.7424 14.7917 16.7146C12.8195 18.6868 11.8334 21.1521 11.8334 24.1104C11.8334 25.8361 12.1785 27.5865 12.8688 29.3615C13.559 31.0872 14.7917 33.084 16.5667 35.3521C18.3417 37.5709 20.7577 40.2087 23.8146 43.2656C26.8716 46.2733 30.7667 49.8972 35.5 54.1375Z" fill="#936A00" />
                        </g>
                        <defs>
                            <filter id="filter0_i_1_4668" x="0" y="0" width="71" height="75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_4668" />
                            </filter>
                        </defs>
                    </svg>
                </div>

                <div className="flex flex-col gap-8 my-8 items-center justify-center">
                    <h1 className="text-3xl font-extrabold  ">Let’s create something awesome</h1>
                    <button className="text-[#FF6666] p-3 px-4 w-fit flex items-center gap-3 font-bold bg-white rounded-lg">
                        Apply for grant
                        <FaArrowRight className="" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NewLetter