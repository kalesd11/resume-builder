const initialState = [];

const eduReducer = (state = initialState, { type, payload }) => {
  if (type === "addEducation") {
    let newState = [...state];
    newState.push(payload);
    return newState;
  }
  
  else if(type==="delEducation"){
    const newState = [...state].filter((elem)=>{
      return elem.eduid !== payload.eduid
    })
    return newState
  }

  else {
    return state;
  }
};
export default eduReducer;
