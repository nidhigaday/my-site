import * as React from "react";

const AnimatedBackground = () => {
  const n = 120;

  return (
    <div id="star-container" className="animated-background">
      {[...Array(n)].map((_, i) => (
        <div className="star" key={i} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
