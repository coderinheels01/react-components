import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { calculateCompletionWidth } from "../../utils/calculateCompletionWidth";
import { calculateCompletionColor } from "../../utils/calculateCompletionColor";

export const ProgressBarWrapper = styled.div(props => ({
  border: "1px solid #d3d3d3",
  borderRadius: "5em",
  width: `${props.width}px`,
  backgroundColor: "#898787",
  overflow: "hidden"
}));

export const ProgressBarPercent = styled.div(props => ({
  borderRadius: "5em 0em 0em 5em",
  width: `${props.width}px`,
  height: `${props.height}px`,
  backgroundColor: props.backgroundColor
}));

/** Progress bar that display progress*/
const ProgressBar = ({ percent, width, height = 15 }) => (
  <ProgressBarWrapper width={width}>
    <ProgressBarPercent
      width={calculateCompletionWidth(width, percent)}
      height={height}
      percent={percent}
      backgroundColor={calculateCompletionColor(percent)}
    />
  </ProgressBarWrapper>
);

ProgressBar.propTypes = {
  /** Percentage of the progress completed*/
  percent: PropTypes.number.isRequired,

  /** Width of the progress bar*/
  width: PropTypes.number.isRequired,

  /** Height of the progress bar*/
  height: PropTypes.number
};

export default ProgressBar;
