export const squareClick = square => ({
  type: 'SQUARE_CLICKED',
  payload: square
});

export const jumpTo = square => ({
  type: 'BEFORE_SEE_HISTORY',
  payload: square
});

export const switchPlayer = square => ({
    type: 'SWITCH_PLAYER',
    payload: square
});

export const switchRoleOptions = square => ({
    type: 'SWITCH_ROLE_OPTIONS',
    payload: square
});

export const isRoleChosen = square => ({
    type: 'PLAYER_ROLE',
    payload: square
});


