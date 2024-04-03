import Image from "next/image";
export default function NotFound() {
  return (
    <main className="">
      <header className={"fixed w-full top-0 left-0 grid grid-cols-10 gap-x-6 p-6 z-50"}>
        <h1 className={"col-span-2"}>
          <a href="" className={"block"}>
            <Image src="/img/hero/logo.svg" alt="Lavio" className={"w-full"} width={166} height={88}></Image>
          </a>
        </h1>
        <p
          className={
            "relative text-base col-start-8 col-span-3 -mt-2 pl-4 tracking-tight before:absolute before:bg-current before:w-2 before:h-2 before:top-[9px] before:left-0"
          }
        >
          Open to freelance opportunities
        </p>
        <div className={"fixed z-10 grid grid-cols-10 w-full text-[21px] gap-x-6 bottom-6 left-0 px-6"}>
          <ul className={"col-span-3 flex gap-x-6 col-start-1"}>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="" className={"opacity-50"}>
                About
              </a>
            </li>
            <li>
              <a href="" className={"opacity-50"}>
                Contact
              </a>
            </li>
          </ul>
          <p className={"col-span-3 col-start-8"}>
            Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span>
          </p>
        </div>
      </header>
      <section className={"relative h-screen"}>
        <h2 className={"absolute text-[42px] top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]"}>404</h2>
        <div className={"absolute grid grid-cols-10 gap-x-6 px-6 left-0 top-[75%] -translate-y-[50%]"}>
          <p className={"col-start-6 col-span-5 text-[42px] leading-none tracking-tighter"}>
            {`You've ventured too far into the canvas! There's nothing here but potential. Let's go back and see the completed works.`}
          </p>
        </div>
      </section>
    </main>
  );
}
