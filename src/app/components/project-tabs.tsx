"use client";
import Link from "next/link";
import { Tabs } from "../util/tabs";
import Image from "next/image";

import dynamic from 'next/dynamic'
 
export const ProjectTabs = ()=>{
  const ParallaxNoSSR = dynamic(() => import('../parallax/page'), { ssr: false })
  const tabs = [
    {
			title: 'Leaving Services',
			value: 'services',
			content:
      <div className="w-full font-sans overflow-auto relative h-[80vh] rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-gray-950 select-none">
        <h2>Leaving Request Service</h2>
        <div className="flex flex-col mt-[10px] ">
          <div className="w-[100%] mt-[20px]">
            <Link href={`https://intern-hrms-dashboard-prod-pinecone-studio.vercel.app/leaving`} target="_blank">
              <Image width={1600} height={1600} src="/leavingService/leavingservice.png" alt="pic1"/>
            </Link>
          </div>
          <div className="flex flex-col gap-[20px] w-[100%] text-[14px]">
            <p>Ажилтан гэнтийн ажил гараад ажилдаа очиж чадахгүй үедээ хэн нэгэнд утсаар голчлон мэдэгддэг билээ. Гэхдээ заримдаа ажил дундаа сатааран таны чөлөөний хүсэлтийг бүртгэхээ мартах эсхүл дараа нөхөж бүртгэхдээ буруу хугацаагаар бүртгэх гэх мэт асуудлууд олонтоо гардаг. Харин энэхүү програмыг ашиглан бүх асуудлаа шийдэх боломжтой</p>
            <ul className="list-disc">
              <li>Хаанаас ч чөлөөний хүсэлтийг үүсгэх эрх чөлөө</li>
              <li>Чөлөөний хүсэлтийг хэнээр батлуулахаа сонгох (Шууд удирдлага эсхүл Хүний нөөцийн ажилтан)</li>
              <li>Цагаар эсхүл олон хоногоор чөлөөний хүсэлтээ үүсгэх сонголт</li>
              <li>Өмнөх чөлөөний хүсэлтийн түүхийг харах</li>
              <li>Ажилтаны нийт чөлөөтэй байсан цагыг харах</li>
              <li>Нийт чөлөөний ажилтануудыг календар дээр харах</li>
            </ul>
            <p>DEVELOPER NOTE: LOGIN REQUERED</p>
          </div>
        </div>
      </div>
      },
		{
			title: 'Parallax HomePage Effect',
			value: 'parallax',
			content: 
      <div className="w-full font-sans overflow-auto relative h-[80vh] rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-gray-950 select-none overflow-y-scroll">
        <h2>Explore the Enchanting Zhangjiajie, China</h2>
        <div className="flex flex-col mt-[10px] gap-[20px]">
          <div className="w-[100%] h-[50vh] mt-[20px] overflow-hidden">
            <Link href={`/parallax`} target="_blank">
              <ParallaxNoSSR/>
            </Link>
          </div>
          <div className="flex flex-col gap-[20px] w-[100%] text-[14px]">
            <p>Welcome to Zhangjiajie, a breathtaking destination in China renowned for its stunning natural beauty, dramatic landscapes, and unique cultural experiences. Nestled in the heart of Hunan Province, Zhangjiajie is a must-visit for adventurers, nature enthusiasts, and those seeking a tranquil escape.</p>
            <p>Why Visit Zhangjiajie?</p>
            <ul className="list-disc">
              <li>Spectacular Scenery: Home to the world-famous Zhangjiajie National Forest Park, this area boasts towering sandstone pillars, dense forests, and picturesque valleys that seem straight out of a fantasy world. The park&apos;s unique landscapes inspired the floating Hallelujah Mountains in the movie &quot;Avatar.&quot;</li>
              <li>Tianmen Mountain: Experience the awe-inspiring Tianmen Mountain, known for its thrilling glass skywalks, the longest cable car ride in the world, and the iconic Tianmen Cave, also known as Heaven&apos;s Door.</li>
              <li>Avatar Hallelujah Mountain: Visit the Southern Sky Column in Zhangjiajie National Forest Park, which was renamed &quot;Avatar Hallelujah Mountain&quot; after the famous film. The panoramic views from here are simply breathtaking.</li>
              <li>Glass Bridge: Walk across the Zhangjiajie Grand Canyon Glass Bridge, the longest and highest glass-bottom bridge in the world, offering an exhilarating view of the canyon below.</li>
              <li>Rich Culture: Immerse yourself in the local Tujia and Miao cultures, experiencing their traditional music, dance, and crafts. The Tujia Folk Custom Park is a great place to learn about the region’s heritage.</li>
              <li>Outdoor Adventures: Whether you&apos;re into hiking, rock climbing, or simply exploring scenic trails, Zhangjiajie offers a range of outdoor activities that allow you to fully appreciate its natural beauty.</li>
            </ul>
            <p>Developer Note: Уул нь гоё эффект даач олон зураг нэг зэрэг рендэрлэх, зарим хүмүүсд MotionSickness өдөөдөг тул хэрэглэхгүй байх нь зохимжтой юм билээ</p>
          </div>
        </div>
      </div>
		},
		{
      title: 'Blog',
			value: 'blog',
			content: 
      <div className="w-full font-sans overflow-auto relative h-[80vh] rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-gray-950 select-none">
        <h2>Welcome to MyBLOG!</h2>
        <div className="flex flex-col mt-[10px] gap-[20px] ">
          <div className="w-[100%] overflow-auto mt-[20px]">
            <Link href="https://blognm.vercel.app/" target="_blank">
            <Image width={1600} height={1600} className="object-fit" src="/main/blogmain.png" alt="blogmain"/>
            </Link>
          </div>
          <div className="flex flex-col gap-[20px] w-[100%] text-[14px]">
            <p>At MyBlog, we aim to inspire, inform, and engage our readers with high-quality content that covers a wide range of topics. Whether you&apos;re looking for expert advice, personal stories, in-depth guides, or the latest trends, you&apos;ll find it all here.</p>
            <p>What We Offer:</p>
            <ul className="list-disc">
              <li>Diverse Topics: From lifestyle and wellness to technology and travel, our blog features articles on a variety of subjects to cater to your interests and curiosities.</li>
              <li>Expert Insights: Our team of knowledgeable writers and guest contributors bring you well-researched and insightful content, offering valuable perspectives and practical tips.</li>
              <li>Engaging Stories: Dive into compelling narratives and personal experiences that resonate with readers and provide a sense of connection and inspiration.</li>
              <li>Latest Trends: Stay updated with the newest trends and innovations in your areas of interest, helping you stay ahead of the curve.</li>
              <li>Community Interaction: Join the conversation! Share your thoughts in the comments, connect with like-minded readers, and become part of our vibrant online community.</li>
            </ul>
          </div>
          
        </div>
      </div>
      },
		{
      title: 'Ecommerce',
			value: 'ecommerce',
			content: 
      <div className="w-full font-sans overflow-auto relative h-[80vh] rounded-2xl px-[30px] py-[20px] text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-gray-800 to-gray-950 select-none">
        <h2>Ecommerce</h2>
        <div className="flex flex-col mt-[10px] gap-[20px]">
          <div className="w-[100%] overflow-auto mt-[20px]">
            <Link href="https://ecommercenmtesting.vercel.app/" target="_blank" className="select-none">
              <Image width={1600} height={1600} className="object-cover" src="/main/ecommerce.png" alt="ecommerce" draggable="false"/>
            </Link>
          </div>
          <div className="flex flex-col gap-[20px] w-[100%] text-[14px]">
            <p>At Ecommerce, we bring you a seamless online shopping experience, offering a wide range of high-quality products right at your fingertips. Whether you&apos;re looking for the latest in fashion, cutting-edge electronics, home essentials, or unique gifts, we&apos;ve got you covered.</p>
            <p>Why Shop With Us?</p>
            <ul className="list-disc">
              <li>Vast Selection: Discover an extensive array of products across various categories to meet all your needs and desires.</li>
              <li>Convenience: Shop from the comfort of your home, anytime, anywhere. Our user-friendly interface makes finding and purchasing products a breeze.</li>
              <li>Secure Shopping: Your privacy and security are our top priorities. Enjoy safe transactions with our advanced security measures.</li>
              <li>Fast Shipping: We understand the excitement of receiving your order. Our efficient delivery network ensures your purchases reach you quickly.</li>
              <li>Excellent Customer Service: Our dedicated support team is here to assist you with any questions or concerns, ensuring a pleasant shopping experience.</li>
            </ul>
            <p>Your Satisfaction, Our Priority</p>
          </div>
        </div>
      </div>
      }
	];
  return (
    <main className="relative h-screen w-[100%] flex justify-items-center">
        <Tabs tabs={tabs}/>
    </main>
  );
}
