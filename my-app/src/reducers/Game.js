const initialState = {
  history: [
    { squares: Array(9).fill(null) }
  ],
  stepNumber: 0,
  xIsNext: true,
  squareClicked: null,
  isHumanPlayer: true,
  isRoleOptionsVisible: true,
  isButtonPressedValue: true,
  isEndGame: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_STORE': {
      const { history, stepNumber, xIsNext } = action.payload;

      return {
        ...state,
        history,
        stepNumber,
        xIsNext
      };
    }

    case 'DISPLAY_HISTORY_STEP': {
      const { stepNumber, xIsNext } = action.payload;
      return {
        ...state,
        stepNumber,
        xIsNext
      };
    }

    case 'CLEAR_HISTORY': {
      return {
        ...state,
        stepNumber: initialState.stepNumber,
        xIsNext: initialState.xIsNext,
        history: initialState.history,
        squareClicked: initialState.squareClicked,
        isHumanPlayer: initialState.isHumanPlayer
      };
    }

    case 'SET_SWITCH_PLAYER': {
      return {
        ...state, isHumanPlayer: action.payload
      };
    }

    case 'SHOW_ROLE_OPTIONS':
    case 'HIDE_ROLE_OPTIONS': {
      return {
        ...state, isRoleOptionsVisible: action.payload
      };
    }

    case 'SEND_ROLE_TO_SERVER': {
      return {
        ...state,
        isButtonPressedValue: action.payload,
        xIsNext: action.payload
      };
    }

    case 'SET_END_GAME': {
      return {
        ...state,
        isEndGame: action.payload
      };
    }

    default: return state;
  }
}
