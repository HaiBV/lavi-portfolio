"use client"
import Image from "next/image";
import { works } from "@/data/works";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel';
import "swiper/css/effect-fade";

export default function Home() {
  return (
    <main className="">
      <header className={"fixed w-full top-0 left-0 grid grid-cols-10 gap-x-6 p-6 z-50"}>
        <h1>
          <a href="" className={"block"}>
            <Image src="/img/hero/logo.svg" alt="Lavio" className={"w-100"} width={166} height={88}></Image>
          </a>
        </h1>
          <p className={"relative text-xs col-start-8 col-span-3 pl-4 before:absolute before:bg-current before:w-2.5 before:h-2.5 before:top-0.5 before:left-0"}>Open to freelance opportunities</p>
          <div className={"fixed z-10 grid grid-cols-10 text-[21px] w-full gap-x-6 bottom-6 left-0 px-6"}>
              <ul className={"col-span-3 flex gap-x-6 col-start-1"}>
                  <li><a href="">Work</a></li>
                  <li><a href="" className={"opacity-50"}>About</a></li>
                  <li><a href="" className={"opacity-50"}>Contact</a></li>
              </ul>
              <p className={"col-span-2 font-light col-start-5"}>Keep scrolling</p>
              <p className={"col-span-3 col-start-8"}>Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span></p>
          </div>
      </header>
        <section>
            <Swiper
                modules={[Mousewheel, EffectFade]}
                effect={"fade"}
                mousewheel={true}
                className="workSlider !h-screen"
            >
                {works.map((work) => (
                    <SwiperSlide key={work.title}>
                        <div className={"item relative !h-screen !grid grid-cols-10 gap-x-6 auto-rows-max px-6 pt-[20.4vh] font-medium text-[68px] leading-none before:absolute before:bg-[url('/img/hero/logo-slider.png')] before:bg-contain before:bg-center before:w-[100%] before:h-[100%] before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%] before:scale-0 before:blur before:backdrop-blur before:z-10 before:duration-[3200ms] before:pointer-events-none duration-[2000ms]"}>
                            <div className={"relative col-start-2 pl-7 before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:left-0"}></div>
                            <p className={"relative col-start-6 pl-7 before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:left-0"}>{work.date}</p>
                            <p className={"relative col-start-10 before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:-left-9"}>{work.century}</p>
                            <h2 className={"col-span-5 text-[110px] mt-[21vh] mb-[18.4vh]"}>{work.title}</h2>
                            <p className={"flex items-center col-start-6 text-2xl pt-8"}>{work.description}</p>
                            <div className={"relative col-start-2 pl-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:left-0"}></div>
                            <p className={"relative col-start-6 pl-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:left-0"}>{work.month}</p>
                            <p className={"relative col-start-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:-left-9"}>{work.year}</p>
                            <a href="#" className={"absolute text-[21px] border-b border-gray pb-3 right-6 top-[55.4%] -translate-y-[50%]"}>Case study</a>
                            <Image className={"absolute -z-10 w-screen h-screen top-0 left-0 object-cover"} src={work.heroImage} alt="" width={1920} height={1080}></Image>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    </main>
  );
}