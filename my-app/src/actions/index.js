export const squareClick = (square) => {
  return {
    type: 'SQUARE_CLICKED',
    payload: square
  };
};

export const jumpTo = (square) => {
  return {
    type: 'SEE_HISTORY',
    payload: square
  };
};
