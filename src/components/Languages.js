import React from "react";
import "./Languages.css";

export default function Languages() {
  const languages = ["English", "Telugu"]; // Replace with your own

  return (
    <section className="languages">
      <h2>Languages</h2>
      <ul>
        {languages.map((lang, i) => (
          <li key={i}>{lang}</li>
        ))}
      </ul>
    </section>
  );
}
