"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Home() {
  const [translate, setTranslate] = useState(0);
  const storedMousePosition = useRef(0);
  const firstMouse = useRef<number | null>(null);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    firstMouse.current = e.clientX;
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (firstMouse.current === null) return;

    const mouseDelta = firstMouse.current - e.clientX;
    const screenWidth = window.innerWidth / 2;
    const percentage = (mouseDelta / screenWidth) * -50;

    const nextTranslate = storedMousePosition.current + percentage;
    if (nextTranslate > 0 || nextTranslate < -50) return;

    setTranslate(nextTranslate);
  }, []);

  const handleMouseUp = useCallback(() => {
    firstMouse.current = null;
    storedMousePosition.current = translate;
  }, [translate]);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    firstMouse.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (firstMouse.current === null) return;

    const touchDelta = firstMouse.current - e.touches[0].clientX;
    const screenWidth = window.innerWidth / 2;
    const percentage = (touchDelta / screenWidth) * -50;

    const nextTranslate = storedMousePosition.current + percentage;
    if (nextTranslate > 0 || nextTranslate < -50) return;

    setTranslate(nextTranslate);
  }, []);

  const handleTouchEnd = useCallback(() => {
    firstMouse.current = null;
    storedMousePosition.current = translate;
  }, [translate]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return (
    <main className="relative">
      <div className="w-[100%] text-white flex absolute text-white z-[1] justify-center gap-[20px] select-none mt-[10px]">
        <Link href="https://aboutmetemplete.vercel.app/" target="_blank"><p>About me</p></Link>
        <Link href="/contact"><p>Contact me</p></Link>
      </div>
      <div className="h-screen w-screen bg-black m-auto relative overflow-hidden fixed">
        <div
          className="flex gap-[4vmin] w-[300%] h-[100%] absolute left-[50%] items-center relative select-none"
          style={{ transform: `translate(${translate}%, 0)` }}
        >
          <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/pic1.jpg" alt="pic1" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
          <Link href="https://blognm.vercel.app/" target="_blank">
            <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/blogmain.png" alt="blogmain" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
          </Link>
          <Link href="https://ecommercenmtesting.vercel.app/" target="_blank" className="select-none">
            <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/ecommerce.png" alt="ecommerce" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
          </Link>
          <Link href="/parallax" className="select-none">
            <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/parallax.png" alt="parallax" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
          </Link>
          <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/pic4.jpg" alt="pic4" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
          <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/pic5.jpg" alt="pic5" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
          <Image width={1600} height={1600} className="image w-[40vmin] h-[70vmin] object-cover" src="/main/pic6.jpg" alt="pic6" draggable="false" style={{ objectPosition: `${-2 * translate}% 50%` }} />
        </div>
      </div>
    </main>
  );
}
