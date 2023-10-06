import React from "react";

const MovieBack = ({ data }) => {
  return (
    <div>
      <div className="hoverwrap">
        <div className="hovertitle">{data.title}</div>
        <div className="overview">{data.overview}</div>
      </div>
    </div>
  );
};

export default MovieBack;
