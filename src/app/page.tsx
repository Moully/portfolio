"use client";

import { useState, useEffect, useCallback } from "react";

export default function Home() {
  const [translate, setTranslate] = useState(0);
  const [storedMousePosition, setStoredMousePosition] = useState(0);
  const [firstMouse, setFirstMouse] = useState(null);

  const handleMouseDown = useCallback((e:any) => {
    setFirstMouse(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e:any) => {
    if (firstMouse === null) return;

    const mouseDelta = firstMouse - e.clientX;
    const screenWidth = window.innerWidth / 2;
    const percentage = (mouseDelta / screenWidth) * -50;

    const nextTranslate = storedMousePosition + percentage;
    if (nextTranslate > 0 || nextTranslate < -50) return;
    
    setTranslate(nextTranslate);
  }, [firstMouse, storedMousePosition]);

  const handleMouseUp = useCallback(() => {
    setFirstMouse(null);
    setStoredMousePosition(translate);
  }, [translate]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return (
    <main className="h-screen w-screen bg-black m-auto relative overflow-hidden">
      <div
        className="flex gap-[4vmin] w-[300%] h-[100%] absolute left-[50%] items-center relative select-none"
        style={{ transform: `translate(${translate}%, 0)`}}
      >
        <img className="image w-[40vmin] h-[50vmin] object-cover transition-transform" src="/main/pic1.jpg" alt="pic1" draggable="false" style={{objectPosition:`${-2*translate}% 50%`}} />
        <img className="image w-[40vmin] h-[50vmin] object-cover" src="/main/pic7.jpg" alt="pic7" draggable="false" style={{objectPosition:`${-2*translate}% 50%`}} />
        <img className="image w-[40vmin] h-[50vmin] object-cover" src="/main/pic8.jpg" alt="pic8" draggable="false" style={{objectPosition:`${-2*translate}% 50%`}} />
        <img className="image w-[40vmin] h-[50vmin] object-cover" src="/main/pic4.jpg" alt="pic4" draggable="false" style={{objectPosition:`${-2*translate}% 50%`}} />
        <img className="image w-[40vmin] h-[50vmin] object-cover" src="/main/pic5.jpg" alt="pic5" draggable="false" style={{objectPosition:`${-2*translate}% 50%`}} />
        <img className="image w-[40vmin] h-[50vmin] object-cover" src="/main/pic6.jpg" alt="pic6" draggable="false" style={{objectPosition:`${-2*translate}% 50%`}} />
      </div>
    </main>
  );
}
