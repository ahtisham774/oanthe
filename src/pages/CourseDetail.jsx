import { useState } from "react"
import { TopNavbar } from "../components/Navbar"
import Hero from "../components/Hero"
import MakeItSimple from "../components/MakeItSimple"
import CertifiedCourses from "../components/CertifiedCourses"
import GridCards from "../components/gridCards"
import MoveTheNeedle from "../components/moveTheNeedle"
import MakeTheMostOfYourTime from "../components/makeTheMostOfYourTime"
import ShowImage from "../components/showImage"
import NewLetter from "../components/newLetter"
import Footer from "../components/footer"
import CopyRight from "../components/copyRight"
import OurCourseBanner from "../components/ourCourses/ourCourseBanner"
import FasterThan from "../components/ourCourses/fasterThan"
import JestFunctions from "../components/ourCourses/jestFunctions"
import TypeSafety from "../components/ourCourses/typeSafety"
import StartInMin from "../components/ourCourses/startInMin"
import Pricing from "../components/ourCourses/pricing"
import LikeThisPage from "../components/ourCourses/likeThisPage"


const CourseDetail = () => {
    const [mode, setMode] = useState("light")
    const theme = {
        light: {
            bg: "bg-[#f0f0f0] text-black",
        },
        dark: {
            bg: "bg-[#0A1221] text-white",
        },
    }
    return (
        <div className="w-full  flex flex-col pt-[53px]  min-h-[calc(100dvh)]">
            <TopNavbar mode={mode} handleChangeMode={() => setMode(prev => prev == "light" ? "dark" : "light")} />
            <div className={`flex flex-col h-full w-full ${theme[mode].bg}`}>
                <OurCourseBanner />
                <FasterThan />
                <div className="flex flex-col gap-10">
                    <JestFunctions theme={mode} />
                    <TypeSafety theme={mode} />
                </div>
                <StartInMin theme={mode} />
                <Pricing mode={mode} />
                <LikeThisPage />
                <Footer mode={mode} />
                <CopyRight />
            </div>

            {/* <div className="h-screen"></div>
      <div className="h-screen"></div> */}
        </div>
    )
}

export default CourseDetail