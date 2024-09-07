/**
 * v0 by Vercel.
 * @see https://v0.dev/t/skxbnqq63kw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Button, Checkbox, Input, Typography } from "@material-tailwind/react"
import { MdClose } from "react-icons/md"


export default function SignIn() {

    const mode = "light"

    const theme = {
        dark: {
            bg: "bg-black",
            text: "text-white",
            bg_image: "bg_dark"
        },
        light: {
            bg: "bg-white",
            text: "text-black",
            bg_image: "bg_light"
        }
    }






    return (
        <div className={`w-full h-full flex items-center justify-center overflow-hidden min-h-screen bg-form ${theme[mode].bg_image} transition-all relative`}>


            <div className="bg-form_container w-full max-w-7xl min-h-[calc(100dvh-300px)] flex items-center justify-center rounded-2xl p-8 ">
                <div className={`${theme[mode].bg} ${theme[mode].text}  p-8 rounded-xl w-full max-w-sm mx-auto relative `}>
                    <div className="flex justify-end mb-4 z-[2]">
                        <MdClose className=" cursor-pointer" />
                    </div>

                    <Typography

                        variant="h4"
                        bold
                        className="mb-6 text-inherit font-normal"
                    >
                        Sign in
                    </Typography>
                    <form className="space-y-6 z-[2]">
                        <div>
                            {/* <label htmlFor="email" className="block text-white mb-2">
                                Email or phone number
                            </label> */}
                            <Input size="lg" color={`${mode === "dark" ? "white" : "black"}`} label="Email" />
                        </div>
                        <div>
                            <div className="flex items-center justify-end pb-2">

                                <div className="flex items-center justify-between gap-2">
                                    <EyeIcon className=" cursor-pointer " />
                                    <span className="">Hide</span>
                                </div>
                            </div>
                            <div className="relative">
                                <Input type="password" color={`${mode === "dark" ? "white" : "black"}`} label="Password" />

                            </div>
                        </div>
                        <Button className="w-full bg-[#B6B6B6] text-black py-3 rounded-full font-normal  mt-4 ">Sign in</Button>
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center">
                                <Checkbox id="remember" />
                                <label htmlFor="remember" className=" ml-2">
                                    Remember me
                                </label>
                            </div>
                            <a className="" >
                                Need help?
                            </a>
                        </div>
                    </form>
                    <div className="mt-6 text-start ">
                        <Typography variant="small" className="flex gap-2">
                            Don&apos;t have an account?{" "}
                            <Typography variant="small" className="font-semibold underline" >
                                Sign up
                            </Typography>
                        </Typography>
                        <Typography variant="small" className="mt-2">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.  <span className="font-semibold " >
                            Learn More
                        </span></Typography>
                    </div>

                </div>
            </div>


        </div>
    )
}

function DoorClosedIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
            <path d="M2 20h20" />
            <path d="M14 12v.01" />
        </svg>
    )
}


function EyeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}