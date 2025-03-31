import React, { useState } from "react";
import logo from "../assets/logo-mark.svg";
import iconUpload from "../assets/icon-upload.svg";
import iconInfo from "../assets/icon-info.svg";
import { useNavigate } from "react-router-dom";

const MainBackground = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);

  const CheckAndSetEmail = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setInvalidEmail(!emailRegex.test(value));
  };

  const [githubUser, setGithubUser] = useState("");
  const [recommendFileText, setRecommendFileText] = useState(
    "Upload your photo JPEG or PNG,max size: (500KB)"
  );
  const [overLimit, setOverLimit] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    let selectedFile = e.target.files[0];

    if (selectedFile) {
      if (!["image/jpeg", "image/png"].includes(selectedFile.type)) {
        alert("กรุณาอัปโหลดไฟล์ JPEG หรือ PNG เท่านั้น");
        return;
      }

      if (selectedFile.size > 500 * 1024) {
        setOverLimit(true);
        setRecommendFileText(
          "File is too Large please upload image under 500kb"
        );
        return;
      } else {
        setOverLimit(false);
        setRecommendFileText("Upload your photo JPEG or PNG,max size: (500KB)");
      }

      setFile(URL.createObjectURL(selectedFile)); // แสดงตัวอย่างรูปภาพ
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    let droppedFile = e.dataTransfer.files[0];

    if (droppedFile) {
      if (!["image/jpeg", "image/png"].includes(droppedFile.type)) {
        alert("กรุณาอัปโหลดไฟล์ JPEG หรือ PNG เท่านั้น");
        return;
      }

      if (droppedFile.size > 500 * 1024) {
        setOverLimit(true);
        setRecommendFileText(
          "File is too Large please upload image under 500kb"
        );
        return;
      }

      setFile(URL.createObjectURL(droppedFile)); // แสดงตัวอย่างรูปภาพ
    }
  };

  const handleSubmit = () => {
    if (!fullName || !email || !file || !githubUser) {
      alert("Please fill all fields");
      return;
    }

    navigate("/ticket", { state: { fullName, email, file, githubUser } });
  };

  return (
    <div className="main-background">
      <div className="pattern-lines"></div>
      <div className="pattern-circle"></div>
      <div className="pattern-circle-second"></div>
      <div className="pattern-squiggly-line-bottom-desktop"></div>

      <div className="center-top-label">
        <img
          src={logo}
          alt="Logo"
          style={{ width: "20px", marginRight: "10px" }}
        />
        <label>Coding to Greatness</label>
      </div>

      <div className="center-big-label">
        <label>Your Journey to Coding to Greatness 2025 !</label>
      </div>
      <div className="description-label">
        <label>Your Journey to Coding to Greatness 2025 !</label>
      </div>

      <div className="upload-field">
        <label>Upload Avatar</label>
        <div
          className="field-to-dropfile"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() =>
              !file && document.getElementById("fileInput").click()
            }
          >
            <div className="button-to-upload-avatar">
              <div className="image-container">
                <img
                  src={file || iconUpload}
                  alt="iconUpload"
                  className="uploaded-image"
                />
              </div>
            </div>

            {file ? (
              <div className="button-group">
                <button
                  className="transparent-button"
                  onClick={() => setFile(null)}
                >
                  Remove Image
                </button>
                <button
                  className="transparent-button"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Change Image
                </button>
              </div>
            ) : (
              <div className="upload-text">
                Drag and Drop or Click to Upload
              </div>
            )}
          </div>

          <input
            id="fileInput"
            type="file"
            accept="image/jpeg, image/png"
            style={{ display: "none" }}
            onChange={handleFileUpload}
          />
        </div>
        <div
          className="recomment-size-upload"
          style={{ display: "flex", height: "15px" }}
        >
          <img src={iconInfo} style={{ marginRight: "10px", width: "12px" }} />
          <text style={{ color: overLimit ? "red" : "white" }}>
            {recommendFileText}
          </text>
        </div>
      </div>
      <div className="input-field">
        <label>Full Name</label>
        <div className="full-name">
          <input
            className="input-full-name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          ></input>
        </div>

        <label style={{ marginTop: "30px" }}>Email Address</label>

        <input
          className="full-name"
          type="email"
          value={email}
          onChange={CheckAndSetEmail}
        />

        {invalidEmail && email !== "" && (
          <div
            className="recomment-size-upload"
            style={{ display: "flex", height: "15px" }}
          >
            <img
              src={iconInfo}
              style={{ marginRight: "10px", width: "12px" }}
              alt="info"
            />
            <p style={{ color: "red" }}>Please enter a valid email</p>
          </div>
        )}

        <label style={{ marginTop: "20px" }}>Github User</label>
        <div className="full-name">
          <input
            className="input-full-name"
            value={githubUser}
            onChange={(e) => setGithubUser(e.target.value)}
          ></input>
        </div>
      </div>

      <button className="button-generate" onClick={() => handleSubmit()}>
        Generate My Ticket
      </button>
    </div>
  );
};

export default MainBackground;
