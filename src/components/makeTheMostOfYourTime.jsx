import Button from "./button"

const MakeTheMostOfYourTime = () => {
    return (
        <div className="flex flex-col gap-16 items-center justify-center w-full p-4 lg:p-8 lg:py-12 text-inherit">
            <div className="flex flex-col items-center justify-center gap-6 max-w-5xl text-inherit">
                <h2 className="text-lg font-normal text-inherit text-center">Certified Front End Course</h2>
                <h1 className="text-4xl font-bold text-inherit text-center lg:max-w-[20rem]">Make the most of your time</h1>
                <Button />
            </div>


            <img className="lg:max-w-[20rem]" src="/assets/mostOfTime.svg" alt="" />

        </div>
    )
}

export default MakeTheMostOfYourTime