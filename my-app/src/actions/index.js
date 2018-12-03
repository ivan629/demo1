export const SQUARE_CLICKED = 'SQUARE_CLICKED';
export const JUMP_TO_HISTORY_STEP = 'JUMP_TO_HISTORY_STEP';
export const SWITCH_PLAYER = 'SWITCH_PLAYER';
export const PLAYER_ROLE = 'PLAYER_ROLE';
export const SET_END_GAME = 'SET_END_GAME';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const SET_STORE = 'SET_STORE';
export const SHOW_ROLE_OPTIONS = 'SHOW_ROLE_OPTIONS';
export const HIDE_ROLE_OPTIONS = 'HIDE_ROLE_OPTIONS';
export const AI_CLICK = 'AI_CLICK';
export const SEND_ROLE_TO_SERVER = 'SEND_ROLE_TO_SERVER';
export const DISPLAY_HISTORY_STEP = 'DISPLAY_HISTORY_STEP';
export const JUMP_TO_CLEAR_HISTORY = 'JUMP_TO_CLEAR_HISTORY';
export const SET_SWITCH_PLAYER = 'SET_SWITCH_PLAYER';

export const squareClick = square => ({
  type: SQUARE_CLICKED,
  payload: square
});

export const jumpTo = square => ({
  type: JUMP_TO_HISTORY_STEP,
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

