import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className={"fixed z-10 grid grid-cols-10 text-[21px] w-full gap-x-6 bottom-6 left-0 px-6"}>
        <ul className={"col-span-3 flex gap-x-6 col-start-1"}>
          <li>
            <Link href={"/"}>Work</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <p className={"col-span-2 col-start-5"}>Keep scrolling</p>
        <p className={"col-span-3 col-start-8"}>
          Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span>
        </p>
      </div>
    </footer>
  );
};
