export default function() {
  return {
    history: [
      { squares: Array(9).fill(null)}
    ],
    stepNumber: 0,
    xIsNext: true
  };
}