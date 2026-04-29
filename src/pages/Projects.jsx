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
      <h2>Projects</h2>

      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>

            <a href={project.githubUrl} target="_blank">
              GitHub
            </a>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px"
  },

  card: {
    border: "1px solid #3a2f2f",
    padding: "20px",
    borderRadius: "10px"
  }
};

export default Projects;