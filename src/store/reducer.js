const reducer = (state, action) => {
  switch (action.type) {
    case 'MOUNT_STATE':
      console.log(action.payload, 'sodasfas');
      return {
        ...state,
        ...action.payload,
      };
    case 'UPDATE_SINS':
      return {
        ...state,
        sins: action.payload,
      };
    case 'CLEAR_SINS':
      return {
        ...state,
        sins: state.defaultSins,
      };
    default:
      return state;
  }
};

export default reducer;
