import { featuredTech } from "../assets/data/skills";

function Familiartech() {
  const iconBoxesDiv = featuredTech.map(
    (x: { title: string; dir: string }, index: number) => (
      <div className="skill" key={index}>
        <div className="iconBox">
          <img src={x.dir} alt="" />
          <div>{x.title}</div>
        </div>
      </div>
    )
  );
  return (
    <div className="familiartech">
      <h1 className="mainHeading">Tech I'm familiar with</h1>
      <div className="skills">{iconBoxesDiv}</div>
    </div>
  );
}

export default Familiartech;
