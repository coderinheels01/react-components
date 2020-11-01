import React from "react";
import PropTypes from "prop-types";

/** Progress bar that display progress*/
const ProgressBar = ({ percent, width, height = 15 }) => (
  <div
    style={{
      border: "1px solid #d3d3d3",
      borderRadius: "5em",
      width: width,
      backgroundColor: "#898787",
      overflow: "hidden"
    }}
  >
    <div
      style={{
        borderRadius: "5em 0em 0em 5em",
        width: ProgressBar.calculateCompletionWidth(width, percent),
        height,
        backgroundColor: ProgressBar.calculateCompletionColor(percent)
      }}
    />
    <div />
  </div>
);

/** Calculate completed progress */
ProgressBar.calculateCompletionWidth = (width = 0, percent = 0) => {
  return parseInt(width * (percent / 100), 10);
};

/** Calculate progress bar color  */
ProgressBar.calculateCompletionColor = percent => {
  debugger;
  if (percent === 100) return "#36a01d";
  return percent > 50 ? "#72e356" : "#e02d14";
};

ProgressBar.propTypes = {
  /** Percentage of the progress completed*/
  percent: PropTypes.number.isRequired,

  /** Width of the progress bar*/
  width: PropTypes.number.isRequired,

  /** Height of the progress bar*/
  height: PropTypes.number
};

export default ProgressBar;
