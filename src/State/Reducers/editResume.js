const initialState = {};

const editResume = (state = initialState, { type, payload }) => {
  if (type === "editResume") {
    const newState = {...payload };
    // console.log(newState);
    return newState;
  } 
  
  else if(type==="completeEdit"){
    const newState = {...payload}
    return newState
  }
  
  else {
    return state;
  }
};
export default editResume