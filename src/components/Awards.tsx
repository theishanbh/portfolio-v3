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
      <div className="block p-8 md:ml-0 md:px-4 md:pr-0" key={x.id}>
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
    <div className="h-auto pl-12 pt-12">
      <h1 className="underline text-4xl">Awards</h1>
      <div className="flex flex-col">{awardsDiv}</div>
    </div>
  );
}

export default Awards;
