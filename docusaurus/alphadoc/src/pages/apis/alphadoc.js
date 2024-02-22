import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout>
      <iframe
        allow="clipboard-read; clipboard-write"
        src="https://docs.alphadoc.io/apis/alphadoc%20api?showSidebar=true&theme=dark"
        style={{
          width: "100%",
          height: "100vh",
        }}
      ></iframe>
      ;
    </Layout>
  );
}
