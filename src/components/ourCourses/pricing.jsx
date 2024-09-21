import Button from "../button"

const Pricing = ({ mode }) => {
    const theme = {
        light: {
            bg: "bg-[#E2E2E2] text-[##6C6C6C]",

        },
        dark: {
            bg: "bg-[#161e2c] text-white border-[#474646]",
        },
    }
    return (
        <div className="flex items-center justify-center p-4 lg:px-12 py-14">
            <div className="flex flex-col md:flex-row  gap-8 items-center">
                <div className={`flex flex-col gap-8 p-4 md:p-6 border-2  rounded-xl ${theme[mode].bg}`}>
                    <h2 className="font-bold text-xl">Basic</h2>
                    <div className="flex items-end">
                        <h1 className="font-bold text-4xl">$600</h1>
                        <p className="text-sm opacity-60 mb-1">/course</p>
                    </div>
                    <p className="text-sm opacity-60">Dedicated support and infrastructure for your course</p>
                    <div className="flex items-center justify-center w-full">
                        <Button bg={"bg-[#161e2c]"} />
                    </div>
                    <ul role="list" className="flex flex-col gap-5 text-inherit ">
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                    </ul>
                </div>
                <div className={`flex flex-col gap-8 p-4 md:p-6 border-2  rounded-xl ${theme[mode].bg}`}>
                    <div className="flex items-center w-full justify-between">
                        <div className="flex flex-col gap-5">
                            <h2 className="font-bold text-xl">React</h2>
                            <div className="flex items-end">
                                <h1 className="font-bold text-4xl">$799</h1>
                                <p className="text-sm opacity-60 mb-1">/course</p>
                            </div>
                        </div>
                        <div className="w-[60px] h-[60px] border border-[#9A9A9A] rounded-2xl flex items-center justify-center  ">
                            <div className="w-[45px] h-[45px] flex items-center justify-center  react">
                                <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_i_1_4494)">
                                        <path d="M23.843 8.75108C23.5341 8.64089 23.223 8.53827 22.9096 8.44323C22.9616 8.22243 23.0095 8.00038 23.0534 7.77706C23.7603 4.18758 23.2981 1.29582 21.7207 0.34388C20.2103 -0.569575 17.7334 0.382361 15.2346 2.65843C14.989 2.88301 14.7483 3.11432 14.5127 3.35235C14.3556 3.19422 14.1945 3.03946 14.0294 2.88806C11.4104 0.454277 8.78543 -0.570837 7.20982 0.384254C5.69947 1.2996 5.25059 4.01789 5.88675 7.42001C5.95039 7.75645 6.02188 8.09143 6.10122 8.42493C5.72968 8.53533 5.37082 8.6533 5.02767 8.7782C1.96104 9.89794 0 11.6536 0 13.4742C0 15.3553 2.10483 17.2415 5.30255 18.3853C5.56193 18.4774 5.82372 18.5629 6.08793 18.642C6.00215 18.9991 5.92623 19.3601 5.86017 19.7252C5.25603 23.0686 5.72726 25.7226 7.23459 26.6322C8.79147 27.5715 11.4032 26.6064 13.949 24.2786C14.1504 24.0944 14.3518 23.8998 14.5532 23.695C14.8077 23.952 15.0695 24.2014 15.3385 24.4432C17.8034 26.6625 20.2375 27.5589 21.7424 26.6467C23.2981 25.7043 23.8038 22.8529 23.1471 19.3839C23.0967 19.1189 23.0387 18.8485 22.9731 18.5726C23.1567 18.5158 23.3366 18.4572 23.5126 18.3966C26.8354 17.2441 29 15.3806 29 13.4761C28.9988 11.6466 26.9749 9.87965 23.843 8.75108ZM16.0496 3.63623C18.1901 1.68631 20.191 0.916682 21.1033 1.46677C22.0741 2.05282 22.4517 4.41595 21.8415 7.51526C21.8013 7.71713 21.7578 7.91837 21.711 8.11897C20.4337 7.81559 19.1383 7.60147 17.8337 7.47804C17.0867 6.35444 16.2678 5.28483 15.3827 4.27653C15.5993 4.057 15.8213 3.84357 16.0484 3.63623H16.0496ZM8.5625 15.0298C8.82469 15.5597 9.09877 16.0831 9.38473 16.6C9.67593 17.1274 9.97941 17.647 10.2952 18.1588C9.39746 18.0569 8.50537 17.9067 7.62245 17.709C7.87861 16.8435 8.19397 15.9445 8.5625 15.0298ZM8.5625 11.981C8.20001 11.0858 7.89311 10.2052 7.64118 9.35479C8.46886 9.16112 9.3509 9.00278 10.2704 8.88292C9.96229 9.38507 9.66586 9.89458 9.38111 10.4114C9.09636 10.9283 8.82288 11.4515 8.56069 11.981H8.5625ZM9.22101 13.5057C9.60283 12.6743 10.014 11.8588 10.4547 11.0593C10.8949 10.2603 11.3635 9.47949 11.8605 8.71701C12.7232 8.64888 13.6077 8.61292 14.5012 8.61292C15.3947 8.61292 16.2846 8.64888 17.1467 8.71764C17.6385 9.47843 18.1043 10.2565 18.5441 11.0517C18.9839 11.847 19.4006 12.6587 19.7941 13.4868C19.4058 14.3212 18.9902 15.14 18.5471 15.9433C18.1077 16.7423 17.6446 17.5254 17.1576 18.2925C16.2967 18.3556 15.4056 18.3903 14.4994 18.3903C13.5932 18.3903 12.719 18.3607 11.8738 18.3032C11.3732 17.5382 10.9007 16.7541 10.4565 15.9508C10.0122 15.1476 9.59981 14.3325 9.2192 13.5057H9.22101ZM19.6195 16.5911C19.9115 16.0621 20.1918 15.5261 20.4605 14.9831C20.8287 15.855 21.1538 16.7461 21.4343 17.6529C20.541 17.8629 19.6378 18.024 18.7284 18.1354C19.0353 17.627 19.3323 17.1122 19.6195 16.5911ZM20.4484 11.9816C20.1809 11.4496 19.9028 10.9239 19.6141 10.4045C19.3321 9.89226 19.0383 9.38633 18.7326 8.88671C19.6576 9.00909 20.545 9.17185 21.3769 9.37056C21.1095 10.2566 20.7996 11.128 20.4484 11.9816ZM14.5133 5.20324C15.1166 5.89155 15.6862 6.6112 16.22 7.35945C15.0782 7.30267 13.9355 7.30267 12.7921 7.35945C13.3558 6.58099 13.9327 5.85868 14.5133 5.20324ZM7.8333 1.50526C8.80355 0.917313 10.9489 1.75759 13.2102 3.85639C13.3545 3.99076 13.5001 4.13144 13.6451 4.27716C12.7555 5.28532 11.9308 6.35399 11.1766 7.47615C9.87484 7.59862 8.58207 7.80935 7.30649 8.10699C7.23278 7.79746 7.16633 7.48582 7.10712 7.17209C6.56037 4.25572 6.92225 2.05724 7.8333 1.50526ZM6.419 17.3929C6.17735 17.321 5.93871 17.243 5.7031 17.1589C4.2894 16.6542 3.1216 15.9956 2.3199 15.2784C1.60218 14.6355 1.23849 13.994 1.23849 13.4742C1.23849 12.3696 2.81288 10.9603 5.43848 10.0046C5.76834 9.88469 6.10102 9.77514 6.43652 9.67589C6.82647 10.9844 7.29872 12.2647 7.85021 13.5082C7.29215 14.769 6.81405 16.0667 6.419 17.3929ZM13.1328 23.302C12.0073 24.3315 10.88 25.0614 9.88617 25.4292C8.99325 25.7591 8.28218 25.7686 7.85263 25.5093C6.93796 24.9573 6.55735 22.8257 7.07631 19.9668C7.13793 19.6303 7.20842 19.2939 7.28776 18.9574C8.57611 19.2472 9.88186 19.4451 11.196 19.5498C11.9575 20.6778 12.789 21.7525 13.685 22.7671C13.505 22.9519 13.3207 23.1298 13.1328 23.302ZM14.5477 21.8372C13.9605 21.1742 13.3745 20.4405 12.803 19.652C13.3584 19.6747 13.9239 19.686 14.4994 19.686C15.0902 19.686 15.6751 19.6728 16.2514 19.6457C15.7195 20.4059 15.1509 21.1374 14.5477 21.8372ZM22.0705 23.6408C21.8977 24.6148 21.5503 25.2646 21.1208 25.5245C20.2067 26.0783 18.2523 25.3586 16.1451 23.4604C15.9034 23.2434 15.6618 23.0106 15.4159 22.7664C16.2945 21.7479 17.1065 20.6689 17.8463 19.5365C19.1677 19.4196 20.4798 19.2078 21.7733 18.9025C21.8325 19.1524 21.8848 19.3971 21.9303 19.6368C22.2209 21.1698 22.2626 22.5564 22.0705 23.6408ZM23.1217 17.1658C22.9634 17.2207 22.8003 17.2737 22.6348 17.3254C22.2292 16.0107 21.7385 14.7263 21.1661 13.4811C21.717 12.2525 22.1885 10.9867 22.5774 9.69229C22.874 9.7825 23.1622 9.87712 23.4395 9.97743C26.1231 10.9439 27.7603 12.3746 27.7603 13.4742C27.7603 14.6475 25.992 16.1704 23.1217 17.1658Z" fill="url(#paint0_linear_1_4494)" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_i_1_4494" x="0" y="0" width="29" height="29.0279" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="2.02795" />
                                            <feGaussianBlur stdDeviation="1.01397" />
                                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_4494" />
                                        </filter>
                                        <linearGradient id="paint0_linear_1_4494" x1="14.5" y1="2.60699e-09" x2="14.315" y2="113.862" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset="1" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm opacity-60">Dedicated support and infrastructure for your course</p>
                    <div className="flex items-center justify-center w-full">
                        <Button bg={"bg-[#161e2c]"} />
                    </div>
                    <ul role="list" className="flex flex-col gap-5 text-inherit ">
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                        <li className="flex items-center gap-2 ">
                            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="12" stroke="#6C6C6C" />
                                <path d="M7.075 10.78L8.335 10.12L11.845 16.99L15.97 8.29L17.245 8.905L12.52 18.88L11.245 18.895L7.075 10.78Z" fill="#6C6C6C" />
                            </svg>
                            <p className="opacity-60">Dedicated support and infrastructure</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing