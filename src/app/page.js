import Image from "next/image";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main>
      <header className={"fixed w-full top-0 left-0 p-3 z-50"}>
        <h1>
          <a href="">
              <Image src="/img/hero/logo.svg" alt="Lavio" width={166} height={88}></Image>
          </a>
        </h1>
      </header>
        <section className={"text-current"}>
            <ul>
                {works.map((work) => (
                    <li key={work.title} className={"relative"}>
                        <h2 className={"absolute text-110 inset-x-6 top-1/2 translate-y-[-50%]"}>{work.title}</h2>
                        <p className={"absolute text-2xl leading-none w-44 top-1/2 left-1/2 translate-y-[-50%]"}>{work.description}</p>
                        <p className={"absolute font-medium text-68 left-1/2 top-20 pl-7 before:absolute before:bg-current before:w-2 before:h-2 before:top-6 before:left-0"}>{work.date}</p>
                        <p className={"absolute font-medium text-68 left-1/2 bottom-10 pl-7 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-6 before:left-0"}>{work.month}</p>
                        <p className={"absolute font-medium text-68 left-90 top-20 before:absolute before:bg-current before:w-2 before:h-2 before:top-6 before:left-[-1.75rem]"}>{work.century}</p>
                        <p className={"absolute font-medium text-68 left-90 bottom-10 before:absolute before:bg-current before:w-2 before:h-2 before:bottom-6 before:left-[-1.75rem]"}>{work.year}</p>
                        <Image className={"w-full h-screen"} src={work.heroImage} alt="" width={1920} height={1080}></Image>
                    </li>
                ))}
            </ul>
            <p className={"absolute top-4 left-2/3 text-xs pl-5 before:absolute before:bg-current before:w-2.5 before:h-2.5 before:top-0.5 before:left-0"}>Open to freelance opportunities</p>
            <a href="#" className={"absolute text-21 leading-none font-medium border-b border-gray pb-1 right-6 top-1/2 translate-y-[-50%]"}>Case study</a>
            <p className={"absolute text-21 font-light left-40 bottom-7"}>Keep scrolling</p>
            <p className={"absolute w-max left-2/3 bottom-7 text-21"}>Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span></p>
            <ul className={"absolute left-6 bottom-7 text-2xl flex gap-x-6"}>
                <li><a href="#">Work</a></li>
                <li><a href="#" className={"opacity-50"}>About</a></li>
                <li><a href="#" className={"opacity-50"}>Contact</a></li>
            </ul>
        </section>
    </main>
  );
}
