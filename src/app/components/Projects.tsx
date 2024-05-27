import { featuredProjects } from "../assets/data/projects";

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
      <div className="place" key={index}>
        <div className="role">{x.role}</div>
        <a href={x.link} className="company">
          {x.company}
        </a>
        <h2 className="activeTime">{x.activeTime}</h2>
        <ul className="contributions">
          {x.contributions.map((each, index) => (
            <li key={index}>{each}</li>
          ))}
        </ul>
      </div>
    )
  );
  return (
    <div className="projects">
      <h1 className="mainHeading">Projects</h1>
      <div className="projectsPlaces">{projectsDiv}</div>
    </div>
  );
}

export default Projects;
