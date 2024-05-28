import { featuredTech } from "../app/assets/data/skills";
import Image from "next/image";

function Familiartech() {
  const iconBoxesDiv = featuredTech.map(
    (x: { title: string; dir: string }, index: number) => (
      <div className="md:h-20 block " key={index}>
        <div className="flex justify-center items-center">
          <Image
            className="h-12 w-12"
            src={x.dir}
            alt=""
            width={50}
            height={50}
          />
          <div className="w-60 relative text-xl font-bold pl-2">{x.title}</div>
        </div>
      </div>
    )
  );
  return (
    <div className="h-auto p-6 md:pl-12 md:pb-10 md:mb-10">
      <h1 className="underline text-3xl md:text-4xl font-extrabold">
        Tech I&apos;m familiar with
      </h1>
      <div className="mt-12 flex flex-wrap items-center gap-y-2 md:gap-0">
        {iconBoxesDiv}
      </div>
    </div>
  );
}

export default Familiartech;
