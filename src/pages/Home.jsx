import React from "react";

function Home() {

  return (
    <div style={styles.container}>

      <h1>Hello, I'm a Full Stack Developer</h1>

      <p>
        I build scalable full-stack applications using
        Java, Spring Boot, React, and PostgreSQL.
      </p>

    </div>
  );
}

const styles = {

  container: {
    height: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px"
  }
};

export default Home;