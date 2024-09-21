
const Button = ({text="Get Started" , bg="gradient_btn",border=""}) => {
    return (
        <button className={`flex items-center w-fit gap-2 py-2 px-4 border rounded-full text-white ${bg} ${border}`}>
            <span className="text-sm font-semibold capitalize">{text}</span>
            <img src="/assets/btn_lion.svg" className="w-8" alt="" />
        </button>
    )
}

export default Button