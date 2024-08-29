import "./styles.css";

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
  return (
    <div className="skill-list">
      <Skills name="HTML+CSS 💪" color="orangered" />
      <Skills name="Javascript 💪" color="yellow" />
      <Skills name="Web design 💪" color="purple" />
      <Skills name="Git and GitHub 💪" color="orange" />
      <Skills name="Python 💪" color="green" />
      <Skills name="React 💪" color="blue" />
      <Skills name="Flask 💪" color="grey" />
    </div>
  );
}

function Skills(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.name}</span>
    </div>
  );
}
