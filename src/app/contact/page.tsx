"use client";
import {Parallax} from "../parallax/page";
import { Tabs } from "../util/tabs";


export default function Contact() {
  const tabs = [
		{
			title: 'Product',
			value: 'product',
			content: <div className="flex overflow-hidden w-full gap-[50px] justify-between">
        <p>HELLOS</p>
        <div className="h-[50vh] w-[50%] overflow-hidden">
          {Parallax()}
        </div>
      </div>
		},
		{
			title: 'Services',
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
