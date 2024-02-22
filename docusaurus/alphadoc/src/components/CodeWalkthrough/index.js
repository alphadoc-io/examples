import React, { useEffect } from "react";

const CodeWalkthrough = ({ blockId, projectVersionId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://docs.alphadoc.io/web-components/code-walkthrough/index.js";
    script.type = "module";
    document.head.appendChild(script);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href =
      "https://docs.alphadoc.io/web-components/code-walkthrough/styles.css";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <code-walkthrough
      block-id={blockId}
      project-version-id={projectVersionId}
      theme="dark"
      offset-from-top="48"
      vertical-padding="32"
    ></code-walkthrough>
  );
};

export default CodeWalkthrough;
