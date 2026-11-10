import React from "react";

function TeacherCard({ name, subject, experience }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Subject: {subject}</p>
      <p>Experience: {experience} years</p>
    </div>
  );
}
function App() {
  return (
    <div>
      <h1>Teachers</h1>

      <TeacherCard
        name="Ram"
        subject="DSA"
        experience={5}
      />

      <TeacherCard
        name="Rohan"
        subject="Python"
        experience={8}
      />

      <TeacherCard
        name="Rohit"
        subject="Java"
        experience={3}
      />
    </div>
  );
}

export default App;
