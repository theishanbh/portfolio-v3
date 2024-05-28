import { featuredTech } from "../app/assets/data/skills";
import Image from "next/image";

function Familiartech() {
  const iconBoxesDiv = featuredTech.map(
    (x: { title: string; dir: string }, index: number) => (
      <div className="h-20 block md:h-14" key={index}>
        <div className="flex justify-center items-center">
          <Image
            className="h-12 w-12 md:h-8 md:w-8"
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
    <div className="h-auto pl-12 pt-12">
      <h1 className="underline text-4xl font-extrabold">
        Tech I'm familiar with
      </h1>
      <div className="mt-12 flex flex-wrap items-center">{iconBoxesDiv}</div>
    </div>
  );
}

export default Familiartech;
