import React from 'react';

const Resume = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Resume</h1>
      <p>
        This is the Resume page. Here, you can view a detailed overview of skills, experiences, 
        and achievements.
      </p>
      <h2>Summary</h2>
      <p>
        Full Stack Developer with 3+ years of experience specializing in React, Vue.js, and JavaScript. 
        Skilled in building responsive web applications and delivering high-quality solutions.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>React & Redux</li>
        <li>Vue.js</li>
        <li>Node.js & Express</li>
        <li>HTML, CSS, JavaScript</li>
      </ul>
      <h2>Work Experience</h2>
      <p>
        <strong>Frontend Developer</strong> - XYZ Company (2021 - Present)
      </p>
      <p>
        <strong>Web Developer</strong> - ABC Solutions (2018 - 2021)
      </p>
    </div>
  );
};

export default Resume;
