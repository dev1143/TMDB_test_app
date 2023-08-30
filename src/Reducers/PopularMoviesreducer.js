// const initialValues = {
//   id: 0,
//   completed: false,
// };

export const tablereducer = (state = [], action) => {
  switch (action.type) {
    case 'passvalue':
        state = JSON.parse(JSON.stringify(action.payload));
        return state;
    default:
        return state
}

};

// export { reducer, initialValues };
