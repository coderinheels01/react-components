import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/** Progress bar that display progress*/
const ProgressBar = ({ percent, width, height = 15 }) => {
  const ProgressBarWrapper = styled.div`
    border: 1px solid #d3d3d3;
    border-radius: 5em;
    width: ${width}px;
    background-color: #898787;
    overflow: hidden;
  `;

  const ProgressBarPercent = styled.div`
    border-radius: 5em 0em 0em 5em;
    width: ${calculateCompletionWidth(width, percent)}px;
    height: ${height}px;
    background-color: ${calculateCompletionColor(percent)};
  `;
  return (
    <ProgressBarWrapper>
      <ProgressBarPercent />
    </ProgressBarWrapper>
  );
};

/** Calculate completed progress */
const calculateCompletionWidth = (width = 0, percent = 0) => {
  return parseInt(width * (percent / 100), 10);
};

/** Calculate progress bar color  */
const calculateCompletionColor = percent => {
  if (percent >= 100) return "#36a01d";
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
