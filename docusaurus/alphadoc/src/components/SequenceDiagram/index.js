import React from "react";

const SequenceDiagram = ({ src }) => {
  return (
    <iframe
      allow="clipboard-read; clipboard-write"
      src={src}
      style={{
        width: "100%",
        height: "80vh",
      }}
    ></iframe>
  );
};

export default SequenceDiagram;
