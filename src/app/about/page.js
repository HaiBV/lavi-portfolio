import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <header className={"fixed w-full top-0 left-0 grid grid-cols-10 gap-x-6 p-6 z-50"}>
        <h1 className={"col-span-2"}>
            <a href="" className={"block"}>
                <Image src="/img/hero/logo.svg" alt="Lavio" className={"w-full"} width={166} height={88}></Image>
            </a>
        </h1>
          <p className={"relative text-xs col-start-8 col-span-3 pl-4 before:absolute before:bg-current before:w-2.5 before:h-2.5 before:top-0.5 before:left-0"}>Open to freelance opportunities</p>
          <div className={"fixed z-10 grid grid-cols-10 w-full gap-x-6 bottom-6 left-0 px-6"}>
              <ul className={"text-2xl col-span-3 flex gap-x-6 col-start-1"}>
                  <li><a href="">Work</a></li>
                  <li><a href="" className={"opacity-50"}>About</a></li>
                  <li><a href="" className={"opacity-50"}>Contact</a></li>
              </ul><p className={"col-span-2 text-21 font-light col-start-5"}>Keep scrolling</p>
              <p className={"col-span-3 text-21 col-start-8"}>Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span></p>
          </div>
      </header>
        <section>
            <div className={"grid grid-cols-10 gap-x-6 p-6 mt-[50vh]"}>
                <p className={"col-start-6 col-span-5 text-[42px] leading-none"}>Independent designer who focus on creating intuitive and</p>
            </div>
            <div className={"relative max-w-[1314px] mx-auto mt-[10vh] -mb-[50px]"}>
                <p className={"absolute w-max text-[#eaeaf480] top-[20%] left-[65%] -translate-y-[50%] -translate-x-[50%]"}>( Scroll to discover )</p>
                <Image className={"w-full mix-blend-exclusion"} src="/img/about/logo.png" alt="" width={1314} height={657}></Image>
            </div>
            <div className={"grid grid-cols-10 gap-x-6 p-6"}>
                <h2 className={"text-[24px] leading-none"}>MY STORY</h2>
                <p className={"col-start-5 col-span-5 text-[68px] leading-none"}>IT ALL STARTED IN (2016) I BEGUN TO</p>
                <p className={"col-start-6 col-span-5 text-[68px] leading-none"}>IMMERSE MYSELF INTO DIGITAL WORLD</p>
            </div>
        </section>
    </main>
  );
}