import React from "react";

const Header = () => {
  return (
    <div
      style={{
        background: "red",
        width: "1200px",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      Header
      <input type="text" placeholder="Search..." />
    </div>
  );
};

export default Header;
