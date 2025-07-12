import React from "react";

const Home = () => {
  const containerStyle = {
    fontFamily: "Segoe UI, sans-serif",
    padding: "0",
    margin: "0",
    backgroundColor: "#f4f6f8",
    color: "#333",
  };

  const heroStyle = {
    backgroundColor: "#0d47a1",
    color: "#fff",
    padding: "80px 20px",
    textAlign: "center",
  };

  const heroTitle = {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "20px",
  };

  const heroSubtitle = {
    fontSize: "18px",
    marginBottom: "30px",
    maxWidth: "600px",
    margin: "auto",
  };

  const heroButton = {
    padding: "12px 28px",
    backgroundColor: "#ffca28",
    color: "#0d47a1",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
  };

  const featuresSection = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "60px",
    padding: "0 30px 60px",
    flexWrap: "wrap",
  };

  const featureCard = {
    backgroundColor: "#fff",
    padding: "25px",
    width: "280px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    textAlign: "center",
  };

  const featureIcon = {
    fontSize: "40px",
    marginBottom: "15px",
    color: "#0d47a1",
  };

  const featureTitle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "10px",
  };

  const featureDesc = {
    fontSize: "15px",
    lineHeight: "1.6",
  };

  return (
    <div style={containerStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={heroTitle}>Welcome to Our Digital World</h1>
        <p style={heroSubtitle}>
          We build fast, responsive, and scalable web applications to help your
          business grow in the digital era.
        </p>
        <button style={heroButton}>Get Started</button>
      </section>

      {/* Features Section */}
      <section style={featuresSection}>
        <div style={featureCard}>
          <div style={featureIcon}>🚀</div>
          <div style={featureTitle}>Fast Performance</div>
          <div style={featureDesc}>
            Our apps are optimized for speed, ensuring smooth experience across
            all devices.
          </div>
        </div>
        <div style={featureCard}>
          <div style={featureIcon}>🔒</div>
          <div style={featureTitle}>Secure Platform</div>
          <div style={featureDesc}>
            We prioritize security to protect your data and keep everything safe
            and private.
          </div>
        </div>
        <div style={featureCard}>
          <div style={featureIcon}>🎨</div>
          <div style={featureTitle}>Beautiful UI</div>
          <div style={featureDesc}>
            We craft clean, modern, and responsive designs that users love to
            interact with.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
