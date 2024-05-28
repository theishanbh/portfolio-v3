import { featuredAwards } from "../app/assets/data/awards";

function Awards() {
  const awardsDiv = featuredAwards.map(
    (x: {
      role: string;
      link: string;
      company: string;
      activeTime: string;
      contributions: string[];
      id: number;
    }) => (
      <div className="block pl-0 p-4 md:p-8" key={x.id}>
        <div className="text-2xl font-bold pb-2">{x.role}</div>
        <a
          href={x.link}
          className="company no-underline text-lg text-blue-500 visited:text-blue-500 hover:text-blue-700 hover:underline active:text-blue-500"
        >
          {x.company}
        </a>
        <h2 className="text-lg font-normal pt-4">{x.activeTime}</h2>
        <ul className="pt-2 list-disc">
          {x.contributions.map((each: string, index: number) => (
            <li className="text-base ml-5 pl-2" key={index}>
              {each}
            </li>
          ))}
        </ul>
      </div>
    )
  );
  return (
    <div className="h-auto p-6 md:pl-12 md:pb-10 md:mb-10">
      <h1 className="underline text-3xl md:text-4xl">Awards</h1>
      <div className="flex flex-col">{awardsDiv}</div>
    </div>
  );
}

export default Awards;
