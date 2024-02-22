import React from "react";

const Tutorial = ({ src }) => {
  return (
    <iframe
      allow="clipboard-read; clipboard-write"
      src={src}
      style={{
        width: "100%",
        height: "100vh",
      }}
    ></iframe>
  );
};

export default Tutorial;
