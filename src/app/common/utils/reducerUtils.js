export const createReducer = (initialState, fnMap) => {
  return (state = initialState, action) => {
    const handler = fnMap[action.type];
    return handler ? handler(state, action.payload) : state;
  };
};
