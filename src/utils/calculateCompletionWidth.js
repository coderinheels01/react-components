export const calculateCompletionWidth = (width = 0, percent = 0) => {
  return parseInt(width * (percent / 100), 10);
};

export default calculateCompletionWidth;
