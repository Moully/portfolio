
export default function Parallax(){
    return(
        <main className="h-screen w-screen overflow-hidden relative">
            <img src="/parallax/background.png" className="parallax absolute w-[2800px] left-[50%] top-[calc(50%-390px)] translate-y-[-50%] translate-x-[-50%] z-1"/>
            <img src="/parallax/fog_7.png" className="parallax absolute w-[1900px] left-[calc(50%+300px)] top-[calc(50%-200px)] translate-y-[-50%] translate-x-[-50%] z-2"/>
            <img src="/parallax/mountain_10.png" className="parallax absolute w-[890px] left-[calc(50%+230px)] top-[calc(50%+69px)] translate-y-[-50%] translate-x-[-50%] z-3"/>
            <img src="/parallax/fog_6.png" className="parallax fog-6"/>
            <img src="/parallax/mountain_9.png" className="parallax mountain-9"/>
            <img src="/parallax/mountain_8.png" className="parallax mountain-8"/>
            <img src="/parallax/fog_5.png" className="parallax fog-5"/>
            <img src="/parallax/mountain_7.png" className="parallax mountain-7"/>
            <div className="text- parallax">
                <h2>China</h2>
                <h1>Zhangjiajie</h1>
            </div>
            <img src="/parallax/mountain_6.png" className="parallax mountain-6"/>
            <img src="/parallax/fog_4.png" className="parallax fog-4"/>
            <img src="/parallax/mountain_5.png" className="parallax mountain-5"/>
            <img src="/parallax/fog_3.png" className="parallax fog-3"/>
            <img src="/parallax/mountain_4.png" className="parallax mountain-4"/>
            <img src="/parallax/mountain_3.png" className="parallax mountain-3"/>
            <img src="/parallax/fog_2.png" className="parallax fog-2"/>
            <img src="/parallax/mountain_2.png" className="parallax mountain-2"/>
            <img src="/parallax/mountain_1.png" className="parallax mountain-1"/>
            <img src="/parallax/sun_rays.png" className="parallax sun-rays"/>
            <img src="/parallax/black_shadow.png" className="parallax black_shadow"/>
            <img src="/parallax/fog_1.png" className="parallax fog-1"/>
            
        </main>
    )
}