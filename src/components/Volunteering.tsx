import { featuredVolunteering } from "../app/assets/data/volunteering";

function Volunteering() {
  const volunteeringDiv = featuredVolunteering.map(
    (
      x: {
        role: string;
        link: string;
        company: string;
        activeTime: string;
        contributions: string[];
      },
      index: number
    ) => (
      <div className="block p-8 " key={index}>
        <div className="text-2xl font-bold pb-2">{x.role}</div>
        <a
          href={x.link}
          className="text-xl no-underline text-blue-600 visited:text-blue-600 hover:text-blue-800 hover:underline active:text-blue-600"
        >
          {x.company}
        </a>
        <h2 className="text-xl font-normal pt-4">{x.activeTime}</h2>
        <ul className="pt-2 list-disc">
          {x.contributions.map((each: string, index: number) => (
            <li className="text-lg ml-5 pl-2" key={index}>
              {each}
            </li>
          ))}
        </ul>
      </div>
    )
  );
  return (
    <div className="h-auto pl-12 pt-12">
      <h1 className="underline text-4xl">Volunteering</h1>
      <div className="flex flex-col">{volunteeringDiv}</div>
    </div>
  );
}

export default Volunteering;
