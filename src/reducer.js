export const initalState = {
  user: null,
};

const reducer = (state, action) => {
  console.log('Actions');
  console.log(action);
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
