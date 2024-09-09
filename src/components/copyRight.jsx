import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"

const CopyRight = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-4 relative text-white bg-[#0A1221]">
            <div className="flex items-center relative justify-between w-full rounded-2xl gap-5 max-w-5xl text-inherit">
                <div className="flex items-center gap-5 text-xs">
                    <p>© 2024 CFEC. All rights reserved.</p>
                    <p>Privacy (Updated 09/2024)</p>
                    <p>Terms</p>
                </div>
                <div className="flex items-center gap-8">
                    <FaTwitter />
                    <FaInstagram  />
                    <FaFacebookF />

                </div>
            </div>

        </div>
    )
}

export default CopyRight