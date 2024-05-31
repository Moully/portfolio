import Image from "next/image"

export const Getintouch = ()=>{
    return(
        <div className="flex flex-col items-center gap-[10px] my-[20px]">
            <h2 className={`text-[24px] px-[20px] my-[20px] bg-gray-800 rounded-lg`}>Contact</h2>
            <p className={`text-[#D1D5DB] text-[20px] md:w-[70%] md:my-[20px]`}>What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.</p>
            <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[10px]">
                    <div className="w-[24px] h-[24px]">
                        <Image width={24} height={24} alt="mail" className={`invert h-full w-full`} src="/logos/mail.svg"/>
                    </div>
                    <p className="font-semibold text-[18px]">amoramgl@gmail.com</p>
                    <div className="w-[24px] h-[24px]">
                        <Image width={24} height={24} alt="copy" className={`invert h-full w-full`} src="/logos/copy.svg"/>
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <div className="w-[24px] h-[24px]">
                        <Image width={24} height={24} alt="github" className={`invert h-full w-full`} src="/logos/github.svg"/>
                    </div>
                    <p className="font-semibold text-[18px]">https://github.com/Moully</p>
                    <div className="w-[24px] h-[24px]">
                        <Image width={24} height={24} alt="copy" className={`invert h-full w-full`} src="/logos/copy.svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}