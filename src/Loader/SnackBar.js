import React, { useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import CustomContext, { useCustomContext } from '../CustomContext';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function SnackBar() {
const value=useContext(CustomContext);
const {dispatch}=useCustomContext();
console.log('error generator message',value);

const handleClose=()=>{
    if(value?.state.completed == true){
        dispatch({
            type:'CLOSE_SNACKBAR_ERROR',
        })
    }
}
  return (
    <div>
    <Snackbar open={value?.state?.completed} autoHideDuration={2000} onClose={handleClose}>
    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {value?.state?.errorMessage}
    </Alert>
    </Snackbar>
    </div>
  )
}
