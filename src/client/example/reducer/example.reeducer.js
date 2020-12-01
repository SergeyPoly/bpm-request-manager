export const exampleReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return {
      data: [],
      loading: false,
    };
  }
  switch (action.type) {
    default:
      return state.example;
  }
};
