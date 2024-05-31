import Image from "next/image";

export const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-10 md:gap-[80px]">
      <div className="flex items-center w-full md:w-1/2 m-auto">
        <div className="flex w-[360px] h-[380px] md:w-[440px] md:h-[520px] m-auto justify-center relative">
          <Image alt="profile" width={600} height={600} src="/profile/profile.jpg"
            className="w-[280px] h-[360px] md:w-[400px] md:h-[480px] aspect-auto z-10 absolute md:top-0 md:left-[40px]"
            style={{
              border: `8px solid white`,
              zIndex: "1",
            }}
          />
          <div
            className="w-[320px] h-[360px] md:w-[400px] md:h-[480px] bg-slate-200 absolute top-6 md:top-[40px] md:left-0"
            style={{
              border: `8px solid white`,
              backgroundColor: `#E5E7EB`,
            }}
          ></div>
        </div>
      </div>

      <div className="flex flex-col gap-5 w-full md:w-1/2 text-[16px] text-justify">
        <h2 className="text-[30px] text-center">About me</h2>
        <p>
          I&apos;m very enthusiastic about bringing the technical and visual
          aspects of digital product to life. User experience, pixel perfect
          design, and writing clear, readable, highly performant code matters to
          me.
        </p>
        <p>
          I am starting my journey as a web developer from 2024, taking on new
          challenges and learning the latest technologies along the way.
        </p>
        <p>
          I am very much a progressive thinker and enjoy working on products end
          to end, from ideation all the way to development.
        </p>
      </div>
    </div>
  );
};
