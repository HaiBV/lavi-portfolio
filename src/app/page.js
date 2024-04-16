"use client";
import Image from "next/image";
import { works } from "@/data/works";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <Swiper modules={[Mousewheel, EffectFade]} effect={"fade"} mousewheel={true} className="h-screen workSlider">
        {works.map((work) => (
          <SwiperSlide
            key={work.title}
            className={
              "relative before:absolute before:bg-[url('/img/hero/logo-slider.svg')] before:bg-contain before:bg-no-repeat before:bg-center before:w-[100%] before:h-[100%] before:top-[50%] before:left-[50%] before:-translate-y-[50%] before:-translate-x-[50%] before:scale-0 before:z-10 before:pointer-events-none"
            }
          >
            <div
              className={
                "relative h-screen grid px-6 pt-[14rem] pb-20 font-medium text-[68px] leading-none grid-rows-slide"
              }
            >
              <div className="grid grid-cols-10 gap-x-6">
                <div
                  className={
                    "relative col-start-2 pl-7 before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:left-0"
                  }
                ></div>
                <p
                  className={
                    "relative col-start-6 pl-7 before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:left-0"
                  }
                >
                  {work.date}
                </p>
                <p
                  className={
                    "relative col-start-10 before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:-left-9"
                  }
                >
                  {work.century}
                </p>
              </div>
              <div className="grid items-center grid-cols-10 gap-x-6">
                <h2 className={"ttl-slider col-span-5 text-[110px] overflow-hidden"}>
                  <span className={"relative block translate-y-full duration-700 delay-[2000ms]"}>{work.title}</span>
                </h2>
                <div className="col-span-2">
                  <p className={"flex flex-col items-start text-2xl"}>
                    {work.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </p>
                </div>
                <Link href="" className={"text-[21px] col-start-10 justify-self-end underline-double"}>
                  Case study
                </Link>
              </div>
              <div className="grid grid-cols-10 gap-x-6">
                <div
                  className={
                    "relative col-start-2 pl-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:left-0"
                  }
                ></div>
                <p
                  className={
                    "relative col-start-6 pl-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:left-0"
                  }
                >
                  {work.month}
                </p>
                <p
                  className={
                    "relative col-start-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:-left-9"
                  }
                >
                  {work.year}
                </p>
              </div>

              <div className={"img-slider absolute -z-10 w-screen h-screen top-0 left-0 duration-[2000ms]"}>
                <Image
                  className={"absolute w-screen h-screen object-cover"}
                  src={work.heroImage}
                  alt=""
                  width={1920}
                  height={1080}
                ></Image>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
