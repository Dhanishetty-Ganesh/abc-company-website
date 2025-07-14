import React, { useEffect, useState } from "react";
import "./index.css";

const DEFAULT_HEADING = `Hyper boost your <span class="highlight">Revenue Management, Marketing</span> and Commercial Functions with <strong>Business Ready AI</strong>`;

const CMSPage = () => {
  const [headingText, setHeadingText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://abc-company-website-rk5x.onrender.com/api/heading")
      .then((res) => res.json())
      .then((data) => setHeadingText(data.text || DEFAULT_HEADING))
      .catch((err) => {
        console.error("Error loading heading:", err);
        setHeadingText(DEFAULT_HEADING);
      });
  }, []);

  const postHeading = async (text) => {
    setLoading(true);
    try {
      const response = await fetch("https://abc-company-website-rk5x.onrender.com/api/heading", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      alert(data.message || "Updated successfully!");
      window.location.reload(); // force reload to reflect change in Hero
    } catch (err) {
      console.error("Error saving:", err);
      alert("Failed to save heading.");
    }
    setLoading(false);
  };

  const handleSave = () => {
    postHeading(headingText);
    setEditMode(false);
  };

  const handleReset = () => {
    setHeadingText(DEFAULT_HEADING);
    postHeading(DEFAULT_HEADING);
    setEditMode(false);
  };

  return (
    <div className="cms-container">
      <h2 className="cms-title">🛠️ Content Management System</h2>

      <label className="cms-label">Website Hero Heading:</label>
      <textarea
        className="cms-textarea"
        value={headingText}
        disabled={!editMode}
        onChange={(e) => setHeadingText(e.target.value)}
        rows={5}
      />

      {loading && <p className="cms-loading">⏳ Saving... Please wait</p>}

      <div className="cms-buttons">
        <button className="cms-btn edit" onClick={() => setEditMode(!editMode)}>
          {editMode ? "Cancel" : "Edit"}
        </button>

        <button
          className="cms-btn save"
          onClick={handleSave}
          disabled={!editMode || loading}
        >
          Save
        </button>

        <button
          className="cms-btn reset"
          onClick={handleReset}
          disabled={!editMode || loading}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CMSPage;
