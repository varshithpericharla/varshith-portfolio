import React from "react";
import { Link } from "react-router-dom";
import "./TrainingCourses.css";

export default function TrainingCourses() {
  const courses = [
    {
      id: "AI-ML-DS Internship",
      title: "AI-ML-DS Internship",
      provider: "Blackbucks Engineers",
      year: 2024,
    },
    {
      id: "UI-UX Design Internship",
      title: "UI-UX Design Internship",
      provider: "Blackbucks Engineers",
      year: 2025,
    },
    {
      id: "Network Addressing and Basic Troubleshooting Course",
      title: "Network Addressing and Basic Troubleshooting Course",
      provider: "CISCO Networking Academy",
      year: 2024,
    },
  ];

  return (
    <section className="training">
      <h2>Training & Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <div className="cert-info">
              <div className="cert-text">
                <strong>{course.title}</strong>  
                <div className="provider">{course.provider} ({course.year})</div>
              </div>
            </div>
            <div className="cert-link">
              <Link to={`/certificate/${course.id}`} aria-label={`View details for ${course.title}`}>
                ➡
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
