import {
    SQUARE_CLICKED,
    BEFORE_SEE_HISTORY,
    SWITCH_PLAYER,
    PLAYER_ROLE,
    SET_END_GAME,
    CLEAR_HISTORY
} from '../constants/Game';

export const squareClick = square => ({
  type: SQUARE_CLICKED,
  payload: square
});

export const jumpTo = square => ({
  type: BEFORE_SEE_HISTORY,
  payload: square
});

export const switchPlayer = square => ({
    type: SWITCH_PLAYER,
    payload: square
});

export const isRoleChosen = square => ({
    type: PLAYER_ROLE,
    payload: square
});

export const isEndGameVisible = square => ({
    type: SET_END_GAME,
    payload: square
});

export const clearHistory = square => ({
    type: CLEAR_HISTORY,
    payload: square
});


