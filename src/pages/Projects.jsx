import React from "react";

import { useEffect, useState } from "react";
import { getAllProjects } from "../services/projectService";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getAllProjects();
      setProjects(data);

    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>My Projects</h2>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>

            <a href={project.githubUrl} target="_blank" rel="noreferrer" style={styles.button}>
              View GitHub
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {

  container: {
    padding: "40px"
  },

  heading: {
    marginBottom: "30px",
    textAlign: "center"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "25px"
  },

  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "10px 15px",
    backgroundColor: "#333",
    color: "#fff",
    borderRadius: "6px"
  }
};

export default Projects;