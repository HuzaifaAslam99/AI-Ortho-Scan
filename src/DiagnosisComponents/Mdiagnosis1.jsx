import React, { useEffect } from 'react';
import Elbow from "./Elbow AI enhanced.jpg";
import Loading from "./icons8-loading-100.png";
// import Logo from "./logo.png"
import "./MdiagnosisStyle.css";


const Mdiagnosis = () => {

  useEffect(() => {
    // Example functionality to handle file upload
document.querySelector('.attach-btn').addEventListener('click', () => {
    alert('Attach button clicked! File upload functionality goes here.');
});

  // Example functionality for the Treatment button
document.querySelector('.treatment-btn').addEventListener('click', () => {
    alert('Dear User, Apologoes for inconvenience but the AI OrthoScan is limited to only 2 modules for now');
});
// JavaScript for Button Interactivity
document.addEventListener("DOMContentLoaded", () => {
    // Select all buttons
    const buttons = document.querySelectorAll(".attach-btn, .settings-btn, .treatment-btn");

    // Add hover effect
    buttons.forEach((button) => {
        // On hover: reduce opacity and add a border
        button.addEventListener("mouseover", () => {
            button.style.opacity = "0.8";
            button.style.border = "2px solid #00bfa5"; // Add teal border
        });

        // On hover out: restore original styles
        button.addEventListener("mouseout", () => {
            button.style.opacity = "1";
            button.style.border = "none"; // Remove border
        });
    });
});
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="top-bar">
        <button className="attach-btn">📎 Attach</button>
        <input
          type="text"
          className="details-input"
          placeholder="Insert any relevant details about the files..."
        />
        <button className="settings-btn">⚙ Settings</button>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Scan Details */}
        <div className="scan-details">
          <div className="scan-images">
            <div className="user-icon">👤</div>
            <img src={Elbow} alt="X-ray" className="scan-image" />
          </div>
          <div className="completionOfScan" id="loadingIcon">
            <img src={Loading} alt="loadingIcon" />
            <div className="scan-status">Scan uploaded and processed successfully</div>
          </div>
          <p className="diagnosis-text">
            The scan reveals a non-displaced fracture of the proximal ulna, located near the elbow joint.
            The fracture line is clean, with no signs of displacement or bone fragmentation.
            Surrounding soft tissues, including the ligaments and muscles, appear intact with no significant
            swelling or inflammation detected. The joint space remains well-preserved, and no signs of
            additional fractures or dislocation are present.
          </p>
          <button className="treatment-btn">Treatment</button>
        </div>
      </div>
    </div>
  );
};

export default Mdiagnosis;
