const initialState = {
  history: [
    { squares: Array(9).fill(null)}
  ],
  stepNumber: 0,
  xIsNext: true,
  squareClicked: null
};

export default function(state = initialState, action) {
  switch (action.type) {
  case 'SQUARE_CLICKED': {

    const { history, stepNumber, xIsNext } = action.payload;

    return {
      ...state,
      history,
      stepNumber,
      xIsNext
    };
  }

  case 'SEE_HISTORY': {
    const {stepNumber, xIsNext } = action.payload;

    return  {
      ...state,
      stepNumber,
      xIsNext

    };
  }

  default: return state;
  }
}
