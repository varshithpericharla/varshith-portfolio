import React from 'react';
import './Academics.css';

const academics = [
  { institution: "Bharatiya Vidya Bhavans-CBSE(Bhimavaram)", year: "2020", score: "80%" },
  { institution: "Sri Chaitanya-Junior College(Bhimavaram)", year: "2022", score: "70%" },
  { institution: "SRKR Engineering College-JNTUK(Bhimavaram)", year: "2026", score: "6.48 CGPA" }
];

function Academics() {
  return (
    <section className="academics">
      <h2>Academics</h2>
      <ul>
        {academics.map((item, index) => (
          <li key={index} className="academic-item">
            <span className="institution">{item.institution}</span>
            <span className="year">Year: {item.year}</span>
            <span className="score">Score: {item.score}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Academics;
