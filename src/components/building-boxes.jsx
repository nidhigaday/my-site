import * as React from "react";

import "../styles/building-boxes.css";

function BuildingBoxes() {
  return (
    <div className="building-boxes column-center">
      <div className="base-row flow-row">
        {[...Array(7)].map((_, i) => (
          <div className="base-box transparent" />
        ))}
        <div className="base-box box-1" />
        {[...Array(3)].map((_, i) => (
          <div className="base-box transparent" />
        ))}
      </div>
      <div className="base-row flow-row">
        {[...Array(2)].map((_, i) => (
          <div className="base-box transparent" />
        ))}
        <div className="base-box box-2" />
        {[...Array(3)].map((_, i) => (
          <div className="base-box transparent" />
        ))}

        <div className="base-box box-5" />
        {[...Array(2)].map((_, i) => (
          <div className="base-box" />
        ))}

        {[...Array(2)].map((_, i) => (
          <div className="base-box transparent" />
        ))}
      </div>
      <div className="base-row flow-row">
        <div className="base-box transparent" />
        {[...Array(2)].map((_, i) => (
          <div className="base-box" />
        ))}

        <div className="base-box box-6" />
        <div className="base-box transparent" />
        <div className="base-box box-4" />
        {[...Array(3)].map((_, i) => (
          <div className="base-box" />
        ))}

        <div className="base-box box-3" />
        <div className="base-box transparent" />
      </div>
      <div className="base-row flow-row">
        <div className="base-box box-3" />
        {[...Array(10)].map((_, i) => (
          <div className="base-box" />
        ))}
      </div>
    </div>
  );
}

export default BuildingBoxes;
