import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = ["Python","Java","HTML", "CSS", "JavaScript", "React", "Tailwind CSS","AWS","Docker","Tableu","Canva"];
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, i) => <li key={i}>{skill}</li>)}
      </ul>
    </section>
  );
}