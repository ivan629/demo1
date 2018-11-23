export const squareClick = (square) => {
  return {
    type: 'SQUARE_CLICKED',
    payload: square
  };
};

export const jumpTo = (square) => {
  return {
    type: 'BEFORE_SEE_HISTORY',
    payload: square
  };
};
