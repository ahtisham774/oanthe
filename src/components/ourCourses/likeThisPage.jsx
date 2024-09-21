

const LikeThisPage = () => {
    return (
        <div className="py-12 mt-12 flex items-center justify-center p-4 lg:px-12">
            <div className="flex flex-col gap-2 items-center justify-center">
                <h1 className="font-extrabold text-xl sm:text-5xl text-center transition-all w-full pb-2 font-inherit text-inherit gradient_ltp">Like this page</h1>

                <div className="w-full flex items-center justify-center max-w-xl py-4">
                    <p className=" text-base sm:text-lg font-normal leading-relaxed w-full  text-center">
                        Universal design systems for every framework you use. Edit the code and see live update immediately.
                    </p>
                </div>
                <img src="/assets/ltp.svg" className="h-auto max-w-full w-64" alt="Like This Page" />

            </div>

        </div>
    )
}

export default LikeThisPage