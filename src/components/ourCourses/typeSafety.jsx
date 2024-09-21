
const TypeSafety = ({ theme }) => {
    const paragraph = `
    Being one of the most popular choices for a web framework, likely there is a plugin for what you want.

   If the plugin you need is not there, it's easy to create one and share it with the community.
  `
    return (
        <div className="flex items-center justify-center p-4 lg:px-12">
            <div className="flex flex-col md:flex-row  gap-8 items-center">
                <div>
                    <h1 className="font-extrabold text-xl sm:text-5xl py-2 transition-all  gradient_type">Type Safety</h1>
                    <p className="whitespace-pre-line max-w-md  text-sm opacity-70">
                        {
                            paragraph
                        }
                    </p>

                </div>
                <img src={`/assets/${theme == "dark" ? "jest_dark" : "jest"}.svg`} className={`w-full md:w-1/2 h-auto max-w-md`} alt="Jest" />

            </div>

        </div >
    )
}

export default TypeSafety