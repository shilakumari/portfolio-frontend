import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // API call function
  const sendMessage = async (data) => {
    const response = await fetch("https://api.shilakumari.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    return response.json();
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");
    setLoading(true);

    try {
      await sendMessage(formData);

      setSuccess("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>

      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          required
        />

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>

      </form>

      {success && <p style={{ color: "green" }}>{success}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

    </div>
  );
}

// Styles
const styles = {

  container: {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },

  input: {
    padding: "10px",
    fontSize: "16px"
  },

  textarea: {
    padding: "10px",
    height: "150px",
    fontSize: "16px"
  },

  button: {
    padding: "14px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px"
  }

};

export default Contact;