import React from "react";

// Pass the child props
function MainLayout({ children }) {
  return (
    <div>
      {/* display the child prop */}
      {children}
    </div>
  );
}

export default MainLayout