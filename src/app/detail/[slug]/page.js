import Image from "next/image";

export default function Detail() {
  return (
    <>
      <section>
        <div className={"grid grid-cols-10 gap-x-6 px-6 mt-[232px] mb-[252px]"}>
          <div className={"col-start-6 text-[21px] leading-normal -mt-2"}>
            <p>Mobile Design</p>
            <p>UI UX Design</p>
            <p>Art Direction</p>
          </div>
          <div className={"col-start-9 col-span-2"}>
            <Image className={"w-full"} src="/img/detail/detail-sub1.jpg" alt="Lavi" width={355} height={199}></Image>
          </div>
          <p className={"col-start-6 col-span-2 text-[42px] mt-6 mb-[256px]"}>©2024</p>
          <h2 className={"col-span-7 text-[177px] leading-none"}>MATYEU</h2>
          <p className={"col-start-9 flex items-center text-[21px] pt-3"}>
            <a href="" className={"border-b-[1px] border-[#D0D1E7] pb-1.5"}>
              Visit Website
            </a>
          </p>
        </div>
        <div className={"grid grid-cols-10 gap-x-6 px-6"}>
          <h3 className={"col-span-2 text-[24px] leading-none opacity-50"}>OVERVIEW</h3>
          <p className={"col-start-6 col-span-5 text-[42px] leading-none mb-[40px] tracking-tighter"}>
            MatYeu is a pioneering eye healthcare web-based application that leverages artificial intelligence to
            transform the way we manage eye health. It offers personalized diagnostics, all designed to make quality eye
            care more accessible and efficient.
          </p>
          <p className={"col-start-6 col-span-5 text-[42px] leading-none tracking-tighter"}>
            With MatYeu, users and healthcare professionals alike can enjoy a seamless and data-driven approach to
            vision care.
          </p>
          <ul
            className={
              "col-start-6 col-span-4 text-[21px] border-t-[1px] border-[#2D2E4D] pt-[73px] mt-[172px] mb-[99px]"
            }
          >
            <li className={"grid grid-cols-4 gap-x-6 mb-[22px]"}>
              <p className={"opacity-50"}>Client</p>
              <p className={"col-span-3"}>Cao Thang Eye Clinic</p>
            </li>
            <li className={"grid grid-cols-4 gap-x-6 mb-[22px]"}>
              <p className={"opacity-50"}>Agency</p>
              <p className={"col-span-3"}>KeyTechX</p>
            </li>
          </ul>
          <div className={"col-span-10 mb-[40px]"}>
            <Image className={"w-full"} src="/img/detail/detail-sub2.jpg" alt="Lavi" width={1872} height={1048}></Image>
          </div>
          <div className={"col-span-3"}>
            <Image className={"w-full"} src="/img/detail/detail-sub3.jpg" alt="Lavi" width={545} height={726}></Image>
          </div>
          <div className={"col-start-6 col-span-5 mb-[162px]"}>
            <Image className={"w-full"} src="/img/detail/detail-sub4.jpg" alt="Lavi" width={924} height={1232}></Image>
          </div>
          <p className={"col-start-6 col-span-5 text-[42px] leading-none mb-[42px] tracking-tighter"}>
            {`This functionality allows the app to analyze the user's eye condition in real-time. By accessing the camera
            on a smartphone or computer, MatYeu can detect signs of eye fatigue, dryness, or other potential issues.`}
          </p>
          <p
            className={"col-start-6 col-span-5 text-[42px] leading-none mb-[161px] tracking-tighter"}
          >{`This proactive approach to eye health management is part of MatYeu's commitment to leveraging technology for better healthcare outcomes.`}</p>
          <div className={"col-span-10 mb-[40px]"}>
            <Image className={"w-full"} src="/img/detail/detail-sub5.jpg" alt="Lavi" width={1872} height={1048}></Image>
          </div>
          <div className={"col-span-5"}>
            <Image className={"w-full"} src="/img/detail/detail-sub6.jpg" alt="Lavi" width={924} height={924}></Image>
          </div>
          <div className={"col-span-5 mb-[127px]"}>
            <Image className={"w-full"} src="/img/detail/detail-sub7.jpg" alt="Lavi" width={924} height={924}></Image>
          </div>
        </div>
      </section>
      <section className={"sec-contact relative"}>
        <Image
          className={"absolute w-full top-0 left-0"}
          src="/img/about/shape-footer.png"
          alt="Next project AON"
          width={1920}
          height={495}
        ></Image>
        <Image
          className={"w-full"}
          src="/img/detail/contact-main.jpg"
          alt="Next project AON"
          width={1920}
          height={1080}
        ></Image>
        <p className={"absolute w-full left-0 bottom-[13%] px-6 text-center text-[177px] leading-none"}>
          <small className={"block text-[24px] mb-[16px]"}>Next project</small>AON
        </p>
      </section>
    </>
  );
}
