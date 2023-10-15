const initialState = [];

const expReducer = (state = initialState, { type, payload }) => {
  if (type === "addExperience") {
    let newState = [...state];
    newState.push(payload);
    return newState;
  } 
  else if(type==="delExperience"){
    const newState = [...state].filter((elem)=>{
      return elem.expid !== payload.expid
    })
    return newState
  }
  else {
    return state;
  }
};
export default expReducer;
