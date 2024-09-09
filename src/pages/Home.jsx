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


const Home = () => {
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
        <Hero mode={mode} />
        <MakeItSimple mode={mode} />
        <CertifiedCourses />
        <GridCards mode={mode} />
        <MoveTheNeedle mode={mode} />
        <MakeTheMostOfYourTime />
        <ShowImage />
        <NewLetter />
        <Footer mode={mode} />
        <CopyRight />
      </div>

      {/* <div className="h-screen"></div>
      <div className="h-screen"></div> */}
    </div>
  )
}

export default Home