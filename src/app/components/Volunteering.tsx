import { featuredVolunteering } from "../assets/data/volunteering";

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
    <div className="volunteering">
      <h1 className="mainHeading">Volunteering</h1>
      <div className="volunteeringPlaces">{volunteeringDiv}</div>
    </div>
  );
}

export default Volunteering;
