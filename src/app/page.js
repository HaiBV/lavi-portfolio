import Image from "next/image";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {works.map((work) => (
          <li key={work.title}>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <p>{work.date}</p>
            <p>{work.heroImage}</p>
            <Image src={work.heroImage} alt="" width={1920} height={1080}></Image>
            <p>{work.caseStudy}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
