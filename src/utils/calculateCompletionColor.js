export const calculateCompletionColor = percent => {
  if (percent >= 100) return "#36a01d";
  return percent > 50 ? "#72e356" : "#e02d14";
};

export default calculateCompletionColor;
