import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "Intermidiate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
  {
    skill: "Python",
    level: "beginner",
    color: "#2662EA",
  },
];

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkilList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="code\image1.jpg" alt="code image" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Moses Mutisya</h1>
      <p>
        I am a fullstack web developer experienced in Javascript and python.
        When not coding, I like to watch a movie, take a walk, or just sit at
        home relaxing
      </p>
    </div>
  );
}

function SkilList() {
  const skill = skills;
  return (
    <div className="skill-list">
      {/* <Skills name="HTML+CSS 💪" color="orangered" />
      <Skills name="Javascript 💪" color="yellow" />
      <Skills name="Web design 💪" color="purple" />
      <Skills name="Git and GitHub 💪" color="orange" />
      <Skills name="Python 💪" color="green" />
      <Skills name="React 💪" color="blue" />
      <Skills name="Flask 💪" color="grey" /> */}
      {skills.map((skill) => (
        <Skills skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skills({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "Intermidiate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
