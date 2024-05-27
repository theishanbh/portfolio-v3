import { featuredExperience } from "../assets/data/experience";
function Experience() {
  const experienceDiv = featuredExperience.map(
    (
      x: {
        role: string;
        company: string;
        link: string;
        activeTime: string;
        contributions: string[];
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
          {x.contributions.map((each: string, index: number) => (
            <li key={index}>{each}</li>
          ))}
        </ul>
      </div>
    )
  );
  return (
    <div className="experience">
      <h1 className="mainHeading">Experience</h1>
      <div className="experiencePlaces">{experienceDiv}</div>
    </div>
  );
}

export default Experience;
