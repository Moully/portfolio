import { InfiniteMovingCards } from "../util/InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
    const testimonials = [
        {
          quote:
            "Idej uu, urj tas, COMEBACK IZ REALS. GG EZ *****",
          name: "FELLOW SUPPORT",
          title: "Nice dota2 game man",
        },
        {
          quote:
            "Инээд муутай, инээхээрээ царай муутай",
          name: "Опозит албан ёсны фенклуб",
          title: "Опозит",
        },
        {
          quote: "Намайг муулсан болгоны амыг оёлтой нь биш. /n Гэхдээ тэр болгоныг тэвчдэг соёлтой нь би биш аая хха",
          name: "Хөлдүү Төмс",
          title: "90-ээд оныхон",
        },
        {
          quote:
            "I MUST NOT FEAR. FEAR IS THE MIND-KILLER. FEAR IS THE LITTLE DEATH THAT BRINGS OBLITERATION",
          name: "Paul Atreides",
          title: "Dune qoute",
        },
        {
          quote:
            "DREAMS MAKE GOOD STORIES, BUT EVERYTHING IMPORTANT HAPPENS WHEN WE'RE AWAKE",
          name: "DUNCAN IDAHO",
          title: "Dune quote",
        },
      ];
      
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
        className="bg-gray-950"
      />
    </div>
  );
}