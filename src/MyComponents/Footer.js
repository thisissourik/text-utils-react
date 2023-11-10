import React from "react";

const footerStyle = {
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#343a40", // Change this to your preferred background color
  color: "white",
  textAlign: "center",
  padding: "10px",
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <span>© 2023 Text Utils</span>
    </footer>
  );
}
