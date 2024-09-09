import Button from "./button"

const CourseCard = ({ course, mode }) => {
    const theme = {
        light: {
            bg: "bg-[#E2E2E2] text-black",

        },
        dark: {
            bg: "bg-[#161e2c] text-white",
        },
    }
    return (
        <div className={`flex flex-col w-full max-w-[18rem] snap-center shrink-0 p-6 gap-16 justify-between rounded-lg ${theme[mode].bg}`}>
            <div className="flex">
                {course?.svg}
                <div className="flex flex-col gap-1 ml-5">
                    <h1 className="text-xl font-bold">{course?.title}</h1>
                    <div className="flex items-center gap-3">
                        {course?.icons?.map(icon =>
                            icon
                        )}

                    </div>
                </div>
            </div>
            <p className="text-inherit lg:max-w-[20rem]">
                <span className="opacity-60">
                    Empower your knowledge
                    to solve bigger problems
                    with our
                </span>
                <span className="font-bold opacity-100 "> Certified front-end
                    Course</span>
            </p>
            <Button />
        </div>
    )
}

export default CourseCard