import Image from "next/image";

export default function Parallax(){
    return(
        <main className="h-screen w-screen overflow-hidden relative">
            <Image width={1200} height={1600} alt="background" src="/parallax/background.png" className="parallax absolute w-[2800px] left-[50%] top-[calc(50%-390px)] translate-y-[-50%] translate-x-[-50%] z-1"/>
            <Image width={1200} height={1600} alt="fog_7" src="/parallax/fog_7.png" className="parallax absolute w-[1900px] left-[calc(50%+300px)] top-[calc(50%-200px)] translate-y-[-50%] translate-x-[-50%] z-2"/>
            <Image width={1200} height={1600} alt="mountain_10" src="/parallax/mountain_10.png" className="parallax absolute w-[890px] left-[calc(50%+230px)] top-[calc(50%+69px)] translate-y-[-50%] translate-x-[-50%] z-3"/>
            <Image width={1200} height={1600} alt="fog_6" src="/parallax/fog_6.png" className="parallax fog-6"/>
            <Image width={1200} height={1600} alt="mount_9" src="/parallax/mountain_9.png" className="parallax mountain-9"/>
            <Image width={1200} height={1600} alt="mount_8" src="/parallax/mountain_8.png" className="parallax mountain-8"/>
            <Image width={1200} height={1600} alt="fog_5" src="/parallax/fog_5.png" className="parallax fog-5"/>
            <Image width={1200} height={1600} alt="mountain_7" src="/parallax/mountain_7.png" className="parallax mountain-7"/>
            <div className="text- parallax">
                <h2>China</h2>
                <h1>Zhangjiajie</h1>
            </div>
            <Image width={1200} height={1600} alt="mount_6" src="/parallax/mountain_6.png" className="parallax mountain-6"/>
            <Image width={1200} height={1600} alt="fog_4" src="/parallax/fog_4.png" className="parallax fog-4"/>
            <Image width={1200} height={1600} alt="mountain_5" src="/parallax/mountain_5.png" className="parallax mountain-5"/>
            <Image width={1200} height={1600} alt="fog_3" src="/parallax/fog_3.png" className="parallax fog-3"/>
            <Image width={1200} height={1600} alt="mount_4" src="/parallax/mountain_4.png" className="parallax mountain-4"/>
            <Image width={1200} height={1600} alt="mount_3" src="/parallax/mountain_3.png" className="parallax mountain-3"/>
            <Image width={1200} height={1600} alt="fog_2" src="/parallax/fog_2.png" className="parallax fog-2"/>
            <Image width={1200} height={1600} alt="mountain_2" src="/parallax/mountain_2.png" className="parallax mountain-2"/>
            <Image width={1200} height={1600} alt="mountain_1" src="/parallax/mountain_1.png" className="parallax mountain-1"/>
            <Image width={1200} height={1600} alt="sun_rays" src="/parallax/sun_rays.png" className="parallax sun-rays"/>
            <Image width={1200} height={1600} alt="black_shadow" src="/parallax/black_shadow.png" className="parallax black_shadow"/>
            <Image width={1200} height={1600} alt="fog_1" src="/parallax/fog_1.png" className="parallax fog-1"/>
            
        </main>
    )
}