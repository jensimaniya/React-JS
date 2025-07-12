import React from "react";

const AboutUs = () => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "40px",
    fontFamily: "Segoe UI, sans-serif",
    lineHeight: "1.7",
    backgroundColor: "#f0f4f8", // light blue-gray
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    color: "#222",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#1a237e", // dark indigo
    marginBottom: "20px",
  };

  const sectionStyle = {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "#ffffff", // white box for each section
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  };

  const sectionHeadingStyle = {
    color: "#0d47a1",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>This is AboutUs Page....</h1>
      <p style={{ fontSize: "16px" }}>
        Welcome to our company! We are passionate about delivering high-quality
        services and products.
      </p>

      <section style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>Our Mission</h2>
        <p>
          Our mission is to empower businesses through innovative solutions and
          exceptional customer service.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>Our Team</h2>
        <p>
          We are a team of skilled professionals with diverse backgrounds in
          design, development, and business strategy.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={sectionHeadingStyle}>Contact Us</h2>
        <p>
          Email: contact@company.com <br />
          Phone: +1 (123) 456-7890
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
