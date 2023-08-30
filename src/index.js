import React,{useReducer,useContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initialValues, reducer } from './Reducers/PopularMoviesreducer';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const [state,dispatch]=useReducer(reducer,initialValues);
// const providerState = {
//   state,
//   dispatch,
// };
const CustomContext=React.createContext();
root.render(
  <React.StrictMode>
    {/* <CustomContext.Provider value={providerState}> */}
    <App />
    {/* </CustomContext.Provider> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
