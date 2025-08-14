import React from "react";
import { useParams, Link } from "react-router-dom";

const certificates = {
  "AI-ML-DS Internship": {
    title: "AI-ML-DS Internship",
    provider: "Blackbucks Engineers",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert01.jpg`,
    description: "The AI-ML-DS Internship with the International Institute of Digital Technologies, Blackbuck Engineers, and APSCHE was an intensive 8-week program that provided hands-on experience in Artificial Intelligence, Machine Learning, and Data Science. Rated “Excellent” for performance, the internship helped in developing strong foundations in intelligent technologies, data analysis, and processing techniques."
  },
  "UI-UX Design Internship": {
    title: "UI-UX Design Internship",
    provider: "Blackbucks Engineers",
    year: 2025,
    image: `${process.env.PUBLIC_URL}/cert02.jpg`,
    description: "The UI/UX Design Internship with Blackbuck Engineers, held from May to July 2025 over 120 hours, focused on human-centered design principles. It provided expertise in tools like Figma and Adobe XD while teaching methods to create visually appealing, user-friendly digital experiences."
  },
  "Network Addressing and Basic Troubleshooting Course": {
    title: "Network Addressing and Basic Troubleshooting Course",
    provider: "CISCO Networking Academy",
    year: 2024,
    image: `${process.env.PUBLIC_URL}/cert03.jpg`,
    description: "Cisco Networking Academy: Network Addressing and Basic Troubleshooting course, completed on December 26, 2024, built skills in network protocols, IPv4/IPv6 addressing, troubleshooting methods, and foundational Cisco router and switch usage. This training enhanced understanding of connectivity issues, protocol operations, and network configuration."
  }
// Add more certificate entries here
};

export default function CertificateDetails() {
  const { certId } = useParams();
  const cert = certificates[certId];

  if (!cert) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h2>Certificate not found</h2>
        <Link to="/">Back to Profile</Link>
      </div>
    );
  }

  return (
    <section style={{ maxWidth: "700px", margin: "2rem auto", padding: "2rem", background: "white", borderRadius: "14px", boxShadow: "0 4px 32px rgba(0,0,0,.08)" }}>
      <h2>{cert.title}</h2>
      <p><em>{cert.provider} ({cert.year})</em></p>
      <img src={cert.image} alt={`${cert.title} Certificate`} style={{ width: "100%", maxHeight: "400px", objectFit: "contain", borderRadius: "8px", marginBottom: "1rem" }} />
      <p>{cert.description}</p>
      <Link to="/" style={{ color: "#69c9d3", textDecoration: "underline" }}>Back to Profile</Link>
    </section>
  );
}
