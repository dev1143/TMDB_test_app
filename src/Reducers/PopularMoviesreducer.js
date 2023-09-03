const initialValues = {
  id: 0,
  completed: false,
  errorMessage:null
};

export const tablereducer = (state = initialValues, action) => {
  switch (action.type) {
    case 'passvalue':
        // state = JSON.parse(JSON.stringify(action.payload));
        return {
          id:action.payload
        };
     case 'OPEN_LOADER':
      return {
        ...state,
        completed:action.payload
      };
      case "OPEN_SNACKBAR_ERROR":{
        return{
          completed:true,
          errorMessage:action.payload
        }
      }
      case "CLOSE_SNACKBAR_ERROR":{
        return{
          completed:false,
        }
      }
      case 'CLOSE_LOADER':
        return {
          ...state,
          completed:action.payload
        };
    default:
        return state
}

};

// export { reducer, initialValues };
