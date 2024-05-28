import { featuredProjects } from "../app/assets/data/projects";

function Projects() {
  const projectsDiv = featuredProjects.map(
    (
      x: {
        link: string;
        role: string;
        company: string;
        contributions: string[];
        activeTime: string;
      },
      index: number
    ) => (
      <div className="block p-8 md:ml-0 md:p-8 md:pl-4" key={index}>
        <div className="text-2xl font-bold pb-2">{x.role}</div>
        <a
          href={x.link}
          className="text-xl no-underline text-blue-600 visited:text-blue-600 hover:text-blue-800 hover:underline active:text-blue-600"
        >
          {x.company}
        </a>
        <h2 className="text-xl font-normal pt-4">{x.activeTime}</h2>
        <ul className="pt-2 text-white list-disc">
          {x.contributions.map((each, index) => (
            <li className="text-lg ml-5 pl-1" key={index}>
              {each}
            </li>
          ))}
        </ul>
      </div>
    )
  );
  return (
    <div className="h-auto pl-12 pt-12">
      <h1 className="underline text-4xl">Projects</h1>
      <div className="flex flex-col">{projectsDiv}</div>
    </div>
  );
}

export default Projects;
