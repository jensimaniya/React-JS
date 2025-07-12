import React from 'react';

const Profile = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f7f9fc',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    fontFamily: 'Segoe UI, sans-serif',
    textAlign: 'center',
    color: '#333',
  };

  const profileImageStyle = {
    width: '140px',
    height: '140px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid #0d47a1',
    marginBottom: '20px',
  };

  const nameStyle = {
    fontSize: '28px',
    fontWeight: '600',
    marginBottom: '10px',
    color: '#0d47a1',
  };

  const bioStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    lineHeight: '1.6',
  };

  const contactStyle = {
    marginTop: '20px',
    fontSize: '15px',
    lineHeight: '1.5',
  };

  const skillsBoxStyle = {
    marginTop: '30px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  };

  return (
    <div style={containerStyle}>
      <img
        style={profileImageStyle}
        src="https://img.freepik.com/free-photo/portrait-smiling-young-man-rubbing-his-hands_171337-10297.jpg?semt=ais_hybrid&w=740"
        alt="Profile"
      />

      <div style={nameStyle}>John Doe</div>
      <div style={bioStyle}>
        I’m a passionate full-stack developer who loves building web apps and
        learning new tech. Based in India.
      </div>

      <div style={contactStyle}>
        <strong>Email:</strong> john.doe@example.com <br />
        <strong>Phone:</strong> +91 9876543210
      </div>

      <div style={skillsBoxStyle}>
        <h3 style={{ color: "#1a237e" }}>Skills & Interests</h3>
        <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
          <li>✅ React & Node.js</li>
          <li>✅ MongoDB & Express</li>
          <li>✅ UI/UX Design</li>
          <li>✅ Problem Solving</li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
