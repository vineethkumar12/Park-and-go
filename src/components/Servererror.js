import React from "react";
import "./server.css";
export const Servererror = () => {
  return (
    <div className="server">
      {console.log("server error")}
      <div className="error-container">
        <h1 className="error-code">Error Code : 405</h1>
        <p className="error-message">server error</p>
      </div>
    </div>
  );
};
