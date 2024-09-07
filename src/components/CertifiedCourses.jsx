import Button from "./button"


const CertifiedCourses = () => {
    return (
        <div className="flex items-center justify-center w-full p-4 lg:p-8 lg:py-12 text-inherit">
            <div className="flex flex-col items-center justify-center gap-5 max-w-5xl text-inherit">
                <h2 className="text-lg font-normal text-inherit text-center">Certified Front End Course</h2>
                <h1 className="text-4xl font-bold text-inherit text-center">Anywhere, Anytime</h1>
                <Button border="gradient_border" />
            </div>
        </div>
    )
}

export default CertifiedCourses