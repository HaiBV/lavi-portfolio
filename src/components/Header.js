import Image from "next/image";

export const Header = () => {
  return (
    <header className={"fixed w-full top-0 left-0 grid grid-cols-10 gap-x-6 p-6 z-50"}>
      <h1>
        <a href="" className={"block"}>
          <Image src="/img/hero/logo.svg" alt="Lavio" className={"w-100"} width={166} height={88}></Image>
        </a>
      </h1>
      <p
        className={
          "relative text-base col-start-8 col-span-3 -mt-2 pl-4 tracking-tight before:absolute before:bg-current before:w-2 before:h-2 before:top-[9px] before:left-0"
        }
      >
        Open to freelance opportunities
      </p>
    </header>
  );
};
