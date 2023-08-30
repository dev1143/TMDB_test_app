const initialValues = {
  id: 0,
  completed: false,
};

const reducer = (state = initialValues, action) => {
  switch (action.type) {
    case "passvalue": {
      return {
        ...state,
        id: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer, initialValues };
