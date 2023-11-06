import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Aplikasi Catatan</h1>
      <button onClick={() => handleToggleDarkMode((previousDarkMode) => !previousDarkMode)} className="save">
        Mode Gelap
      </button>
    </div>
  );
};

export default Header;
