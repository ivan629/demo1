const initialState = {
  history: [
    { squares: Array(9).fill(null) }
  ],
  stepNumber: 0,
  xIsNext: true,
  squareClicked: null,
  number: 0,
  isHumanPlayer: true,
  isRoleOptionsVisible: false,
  isButtonPressedValue: true
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

    case 'SEE_HISTORY': {
      const { stepNumber, xIsNext } = action.payload;
      return {
        ...state,
        stepNumber,
        xIsNext

      };
    }
      case 'SET_SWITCH_PLAYER': {
          return {
              ...state, isHumanPlayer:  action.payload
          };

      }

      case 'SET_VISIBLE_ROLE_OPTIONS': {
          return {
              ...state, isRoleOptionsVisible:  action.payload
          }
      }

      case 'SEND_ROLE_TO_SERVER': {
          return {
              ...state,
              isButtonPressedValue: !state.isButtonPressedValue,
              xIsNext: !state.isButtonPressedValue
          };
      }

      default: return state;
  }
}
