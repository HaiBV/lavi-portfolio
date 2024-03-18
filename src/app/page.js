import Image from "next/image";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main>
      <header className={"fixed w-full top-0 left-0 p-6 z-50"}>
        <h1>
          <a href="">
              <Image src="/img/hero/logo.svg" alt="Lavio" width={166} height={88}></Image>
          </a>
        </h1>
      </header>
        <section className={"text-current"}>
            <ul>
                {works.map((work) => (
                    <li key={work.title} className={"relative h-screen grid grid-cols-10 gap-x-6 auto-rows-max px-6 pt-[20.4vh]"}>
                        <div className={"relative col-start-2 font-medium text-68 pl-7 leading-none before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:left-0"}></div>
                        <p className={"relative col-start-6 font-medium text-68 pl-7 leading-none before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:left-0"}>{work.date}</p>
                        <p className={"relative col-start-10 font-medium text-68 leading-none before:absolute before:bg-current before:w-2 before:h-2 before:top-3 before:-left-9"}>{work.century}</p>
                        <h2 className={"col-span-5 text-110 mt-[21vh] mb-[18.4vh]"}>{work.title}</h2>
                        <p className={"flex items-center col-start-6 text-2xl pt-8 leading-none"}>{work.description}</p>
                        <div className={"relative col-start-2 font-medium text-68 leading-none pl-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:left-0"}></div>
                        <p className={"relative col-start-6 font-medium text-68 leading-none pl-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:left-0"}>{work.month}</p>
                        <p className={"relative col-start-10 font-medium text-68 leading-none before:absolute before:bg-current before:w-2 before:h-2 before:bottom-3 before:-left-9"}>{work.year}</p>
                        <Image className={"absolute -z-10 w-full h-full top-0 left-0 object-cover"} src={work.heroImage} alt="" width={1920} height={1080}></Image>
                    </li>
                ))}
            </ul>
            <div className={"absolute w-full grid grid-cols-10 gap-x-6 top-6 left-0 text-xs px-6"}><p className={"relative col-start-8 col-span-3 pl-4 before:absolute before:bg-current before:w-2.5 before:h-2.5 before:top-0.5 before:left-0"}>Open to freelance opportunities</p></div>
            <a href="#" className={"absolute text-21 leading-none font-medium border-b border-gray pb-3 right-6 top-[55.4%] -translate-y-[50%]"}>Case study</a>
            <div className={"fixed grid grid-cols-10 w-full gap-x-6 bottom-6 left-0 px-6"}>
                <ul className={"text-2xl col-span-3 flex gap-x-6 col-start-1"}>
                    <li><a href="#">Work</a></li>
                    <li><a href="#" className={"opacity-50"}>About</a></li>
                    <li><a href="#" className={"opacity-50"}>Contact</a></li>
                </ul><p className={"col-span-2 text-21 font-light col-start-5"}>Keep scrolling</p>
                <p className={"col-span-3 text-21 col-start-8"}>Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span></p>
            </div>
        </section>
    </main>
  );
}
