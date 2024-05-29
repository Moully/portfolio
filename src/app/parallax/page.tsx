"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Parallax() {
    const parallaxRef = useRef<HTMLDivElement>(null);
    const parallaxElements = Array.from(parallaxRef.current?.getElementsByClassName(styles.parallax) || []) as HTMLElement[];
    const [xValue, setXValue] = useState(0);
    const [yValue, setYValue] = useState(0);
    const [zValue, setZValue] = useState(0);
    const [perspective, setPerspective] = useState(0);
    const [rotateDegree, setRotateDegree] = useState(0)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setXValue(e.clientX - window.innerWidth / 2);
            setYValue(e.clientY - window.innerHeight / 2);
            setRotateDegree(xValue/ (window.innerWidth /2))
            setPerspective(window.innerWidth * 0.2)
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useEffect(() => {

        parallaxElements.forEach(el => {
            const speedX = parseFloat(el.getAttribute('data-speedX') || '1');
            const speedY = parseFloat(el.getAttribute('data-speedY') || '1');
            const speedZ = parseFloat(el.getAttribute('data-speedZ') || '1');
            const rotateSpeed = parseFloat(el.getAttribute('data-rotate') || '1');
            const isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
            const z = (xValue - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
            setZValue(z);

            el.style.transform = `rotateY(${rotateDegree * rotateSpeed}deg) translateX(calc(-50% + ${xValue * speedX}px)) translateY(calc(-50% + ${yValue * speedY}px)) perspective(${perspective * 4}px) translateZ(${perspective + z * speedZ}px)`;
        });
    }, [parallaxElements, perspective, rotateDegree, xValue, yValue, zValue]);

    return (
        <main className="relative">
        <div className="flex w-[100%] justify-between items-center p-[20px] z-[110] absolute left-0 top-0 text-white select-none">
            <h1 className="text-[24px]">China Travel</h1>
            <div className="flex gap-[20px] text-[16px] items-center">
                <p>Services</p>
                <p>Book travel</p>
                <p>About Us</p>
                <Link href={`/parallax`} target="_blank"> <p className="border-2 p-[4px] rounded-md">Go to paralax</p> </Link>
            </div>
        </div>
        <div ref={parallaxRef} className="h-[100vh] w-[100vw] bg-black overflow-hidden relative border-2">
            <div className={`${styles.vignette}`}></div>
            <Image width={1600} height={1600} alt="background" src="/parallax/background.png" priority={true} data-rotate="0" className={`${styles.parallax} ${styles.bgImg}`} data-speedY="0.38" data-speedZ="0" data-speedX="0.3"/>
            <Image width={1200} height={1600} alt="fog_7" src="/parallax/fog_7.png" className={`${styles.parallax} ${styles.fog7}`} data-rotate="0" data-speedY="0.32" data-speedZ="0" data-speedX="0.27"/>
            <Image width={1200} height={1600} alt="mountain_10" src="/parallax/mountain_10.png" className={`${styles.parallax} ${styles.mountain10}`} data-rotate="0" data-speedY="0.305" data-speedZ="0" data-speedX="0.195"/>
            <Image width={1200} height={1600} alt="fog_6" src="/parallax/fog_6.png" className={`${styles.parallax} ${styles.fog6}`} data-speedY="0.28" data-rotate="0" data-speedZ="0" data-speedX="0.25" />
            <Image width={1200} height={1600} alt="mount_9" src="/parallax/mountain_9.png" className={`${styles.parallax} ${styles.mountain9}`} data-speedY="0.155" data-rotate="0.02" data-speedZ="0.15" data-speedX="0.125"/>
            <Image width={1200} height={1600} alt="mount_8" src="/parallax/mountain_8.png" className={`${styles.parallax} ${styles.mountain8}`} data-speedY="0.11" data-rotate="0.02" data-speedZ="0" data-speedX="0.1"/>
            <Image width={1200} height={1600} alt="fog_5" src="/parallax/fog_5.png" className={`${styles.parallax} ${styles.fog5}`} data-speedY="0.16" data-speedZ="0" data-rotate="0" data-speedX="0.1"/>
            <Image width={1200} height={1600} alt="mountain_7" src="/parallax/mountain_7.png" className={`${styles.parallax} ${styles.mountain7}`} data-speedY="0.1" data-speedZ="0" data-rotate="0.09" data-speedX="0.1"/>
            <div className={`${styles.text} ${styles.parallax}`} data-speedY="0.07" data-speedZ="0" data-speedX="0.07" data-rotate="0.11">
                <h2>China</h2>
                <h1>Zhangjiajie</h1>
            </div>
            <Image width={1200} height={1600} alt="mount_6" src="/parallax/mountain_6.png" className={`${styles.parallax} ${styles.mountain6}`} data-rotate="0.065" data-speedY="0.05" data-speedZ="0.05" data-speedX="0.065" />
            <Image width={1200} height={1600} alt="fog_4" src="/parallax/fog_4.png" className={`${styles.parallax} ${styles.fog4}`} data-rotate="0" data-speedY="0.022" data-speedZ="0" data-speedX="0.14" />
            <Image width={1200} height={1600} alt="mountain_5" src="/parallax/mountain_5.png" className={`${styles.parallax} ${styles.mountain5}`} data-rotate="0.13" data-speedY="0.02" data-speedZ="0.23" data-speedX="0.0135" />
            <Image width={1200} height={1600} alt="fog_3" src="/parallax/fog_3.png" className={`${styles.parallax} ${styles.fog3}`} data-speedY="0.018" data-rotate="0" data-speedZ="0" data-speedX="0.011" />
            <Image width={1200} height={1600} alt="mount_4" src="/parallax/mountain_4.png" className={`${styles.parallax} ${styles.mountain4}`} data-speedY="0.024" data-rotate="0.1" data-speedZ="0.35" data-speedX="0.059" />
            <Image width={1200} height={1600} alt="mount_3" src="/parallax/mountain_3.png" className={`${styles.parallax} ${styles.mountain3}`} data-speedY="0.018" data-rotate="0.1" data-speedZ="0.32" data-speedX="0.04" />
            <Image width={1200} height={1600} alt="fog_2" src="/parallax/fog_2.png" className={`${styles.parallax} ${styles.fog2}`} data-speedY="0.0115" data-rotate="0" data-speedZ="0" data-speedX="0.015" />
            <Image width={1200} height={1600} alt="mountain_2" src="/parallax/mountain_2.png" className={`${styles.parallax} ${styles.mountain2}`} data-speedY="0.013" data-speedZ="0.42" data-rotate="0.15" data-speedX="0.0235" />
            <Image width={1200} height={1600} alt="mountain_1" src="/parallax/mountain_1.png" className={`${styles.parallax} ${styles.mountain1}`} data-speedY="0.018" data-speedZ="0.53" data-rotate="0.2" data-speedX="0.027" />
            <Image width={1200} height={1600} alt="sun_rays" src="/parallax/sun_rays.png" className={`${styles.sunRays}`}/>
            <Image width={1200} height={1600} alt="fog_1" src="/parallax/fog_1.png" className={`${styles.parallax} ${styles.fog1}`} data-speedY="0.01" data-speedZ="" data-rotate="0" data-speedX="0.12" />
        </div>
        </main>
    );
}