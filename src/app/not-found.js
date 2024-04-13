import Image from "next/image";
export default function NotFound() {
  return (
    <section className={"relative h-screen"}>
      <h2 className={"absolute text-[42px] top-[42%] left-[50%] -translate-x-[50%] -translate-y-[50%]"}>404</h2>
      <div className={"absolute grid grid-cols-10 gap-x-6 px-6 left-0 top-[75%] -translate-y-[50%]"}>
        <p className={"col-start-6 col-span-5 text-[42px] leading-none tracking-tighter"}>
          {`You've ventured too far into the canvas! There's nothing here but potential. Let's go back and see the completed works.`}
        </p>
      </div>
    </section>
  );
}
