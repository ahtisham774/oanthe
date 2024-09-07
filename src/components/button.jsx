
const Button = ({text="Get Started" ,border=""}) => {
    return (
        <button className={`flex items-center gap-2 py-2 px-4 border rounded-full text-white gradient_btn ${border}`}>
            <span className="text-sm font-semibold capitalize">{text}</span>
            <img src="/assets/btn_lion.svg" className="w-8" alt="" />
        </button>
    )
}

export default Button