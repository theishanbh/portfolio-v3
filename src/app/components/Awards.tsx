import { featuredAwards } from "../assets/data/awards";

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
      <div className="place" key={x.id}>
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
    <div className="awards">
      <h1 className="mainHeading">Awards</h1>
      <div className="awardsPlaces">{awardsDiv}</div>
    </div>
  );
}

export default Awards;
