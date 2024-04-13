import Image from "next/image";
import { projects, clients, socials } from "@/data/about";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section>
        <div className={"grid grid-cols-10 gap-x-6 px-6 mt-[50vh]"}>
          <p className={"col-start-6 col-span-4 text-[42px] leading-none"}>
            Independent designer who focus on creating intuitive and
          </p>
        </div>
        <div className={"relative max-w-[1314px] mx-auto mt-[12vh] -mb-[11%]"}>
          <p
            className={
              "absolute w-max text-[#eaeaf480] text-2xl top-[17%] left-[74%] -translate-y-[50%] -translate-x-[50%]"
            }
          >
            ( Scroll to discover )
          </p>
          <Image
            className={"w-full mix-blend-exclusion"}
            src="/img/about/logo.png"
            alt="Lavio"
            width={1314}
            height={657}
          ></Image>
        </div>
        <div className={"relative grid grid-cols-10 gap-x-6 px-6 mb-[380px]"}>
          <h2 className={"col-span-2 text-[24px] leading-none opacity-50"}>MY STORY</h2>
          <p className={"col-start-5 col-span-6 text-[68px] leading-none"}>
            IT ALL STARTED IN (2016)
            <br /> I BEGUN TO
          </p>
          <p className={"col-start-6 col-span-5 text-[68px] leading-none mb-[180px]"}>
            IMMERSE MYSELF INTO DIGITAL WORLD
          </p>
          <Image
            className={"col-start-2 col-span-2 w-full"}
            src="/img/about/main.jpg"
            alt="MY STORY"
            width={356}
            height={394}
          ></Image>
          <div
            className={
              "relative col-start-7 col-span-3 text-[24px] leading-none before:absolute before:bg-[url('/img/about/dots.png')] before:bg-contain before:bg-center before:w-[24px] before:h-[8px] before:bottom-0 before:left-0"
            }
          >
            <p className={"mb-[20px]"}>
              After given the chance to create the first website design, I knew I’d totally fall in love with this
              career path.
            </p>
            <p>
              Throughout the years, my passion for this craft remains unchanged. Each project is a new canvas, a fresh
              opportunity to blend aesthetics with functionality.
            </p>
          </div>
        </div>
        <div className={"grid grid-cols-10 gap-x-6 px-6 mb-[177px]"}>
          <p className={"col-span-2 text-[24px] leading-none opacity-50"}>PAST</p>
          <p className={"col-span-2 col-start-9 text-[24px] leading-none text-right opacity-50"}>EXPERIENCES</p>
          <h2 className={"col-start-2 col-span-8 text-center text-[110px] leading-none mt-[60px]"}>
            CRAFTING INTERFACES <br />
            (WITH)
            <br /> PERSONAL TOUCH
          </h2>
        </div>
        <ul className={"text-[21px] mb-[261px]"}>
          {projects.map((project) => (
            <li
              key={project.number}
              className={"grid grid-cols-10 gap-x-6 px-6 border-t-[1px] border-[#2D2E4D] pt-[14px] mb-[54px]"}
            >
              <p className={"col-start-6 text-[24px]"}>{project.number}</p>
              <p className={"col-span-2"}>{project.title}</p>
              <p className={"col-span-2"}>{project.info}</p>
            </li>
          ))}
        </ul>
        <div className={"grid grid-cols-10 gap-x-6 px-6 mb-[181px]"}>
          <h2 className={"col-span-4 text-[24px] leading-none opacity-50"}>SELECTED CLIENTS</h2>
          <p className={"col-start-6 col-span-5 text-[68px] leading-none"}>
            COLLABORATING WITH DIVERSE CLIENTS TO BRING
          </p>
          <p className={"col-start-5 col-span-6 text-[68px] leading-none"}>UNIQUE STORIES AND VISIONS TO LIFE</p>
        </div>
        <ul className={"text-[24px] mb-[143px]"}>
          {clients.map((client) => (
            <li
              key={client.title}
              className={"grid grid-cols-10 gap-x-6 px-6 border-t-[1px] border-[#2D2E4D] pt-[14px] mb-[54px]"}
            >
              <p
                className={
                  "relative grid grid-cols-5 col-start-6 col-span-5 before:absolute before:w-2 before:h-2 before:bg-[#D0D1E7] before:top-2.5 before:left-0"
                }
              >
                <span className={"col-start-2 col-span-4"}>{client.title}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
      <footer className={"bg-[#DF1DE5] text-[#0F0F1A] text-[21px]"}>
        <Image
          className={"w-full -mt-[2px] mb-[122px]"}
          src="/img/about/shape-footer.png"
          alt="Lavi"
          width={1920}
          height={495}
        ></Image>
        <div className={"grid grid-cols-10 gap-x-6 px-6"}>
          <p className={"col-start-7 col-span-2"}>Social</p>
          <ul className={"col-start-9 col-span-2 mb-[28px]"}>
            {socials.map((social) => (
              <li key={social.title} className={"mb-6"}>
                <a href="" className={"border-b-[1px] border-[#0F0F1A] pb-2"}>
                  {social.title}
                </a>
              </li>
            ))}
          </ul>
          <Link href="/" className={"block col-span-3"}>
            <Image className={"w-full"} src="/img/about/logo-footer.svg" alt="Lavi" width={545} height={282}></Image>
          </Link>
          <p className={"col-start-7 col-span-2 flex items-center leading-snug pb-[72px]"}>
            Have a project in mind?
            <br />
            Let’s talk
          </p>
          <p className={"col-start-9 col-span-2 flex items-center pb-[97px]"}>
            <a href="mailto:hello@lavidesign.studio" className={"border-b-[1px] border-[#0F0F1A] pb-1"}>
              hello@lavidesign.studio
            </a>
          </p>
          <p className={"col-start-9 col-span-2 -mt-[46px] text-[42px]"}>©2024</p>
        </div>
        <div className={"grid grid-cols-10 gap-x-6 mx-6 border-t-[1px] border-[#0F0F1A] mt-[63px] py-[72px]"}>
          <ul className={"col-span-3 flex gap-x-6"}>
            <li>
              <Link href="/">Work</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <p className={"col-span-3 col-start-8"}>
            Saigon, Vietnam <span className={"ml-8 opacity-50"}>12:21PM - GMT+7</span>
          </p>
        </div>
      </footer>
    </>
  );
}
