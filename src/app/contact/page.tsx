"use client";
import {Parallax} from "../parallax/page";
import { Tabs } from "../util/tabs";


export default function Contact() {
  const tabs = [
		{
			title: 'Parallax HomePage Effect',
			value: 'parallax',
			content: 
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <h2>Parallax Landing HomePage Effect</h2>
        <div className="flex mt-[10px]">
          <div className="flex flex-col gap-[50px] w-[50%] text-[18px]">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error illo explicabo, nemo quam voluptates illum ad quasi, quidem, facere nesciunt repudiandae a tempore quos sed vel praesentium! Fuga iusto velit, iure numquam debitis ratione perspiciatis delectus itaque veniam fugiat est culpa expedita vitae quas minus porro eveniet adipisci laudantium facere.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, debitis nihil optio doloremque ipsum expedita molestias officia reprehenderit? Nesciunt incidunt maiores hic ratione illo a quae dolorem animi cupiditate ipsam sed ducimus vero autem accusantium voluptatum sunt ipsum, dolorum iste. Magni corporis illo quas hic accusantium aspernatur dolore sunt aut?</p>
          </div>
          <div className="h-[50vh] w-[50%] overflow-hidden">
            <Parallax/>
          </div>
        </div>
      </div>
		},
		{
			title: 'Leaving Services',
			value: 'services',
			content:
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> 
      <p>Services</p> 
      </div>},
		{
			title: 'Playground',
			value: 'playground',
			content:
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> 
      <p>Playground</p> 
      </div>},
		{
			title: 'Content',
			value: 'content',
			content:
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> 
      <p>Content</p> 
      </div>},
		{
			title: 'Random',
			value: 'random',
			content:
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> 
      <p>Random</p>
      </div>}
	];
  return (
    <main className="relative">
        <p>working on this</p>
        <Tabs tabs={tabs}/>
    </main>
  );
}
