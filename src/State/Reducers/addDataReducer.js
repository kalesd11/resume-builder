const initialState = [];

const addData = (state = initialState, { type, payload }) => {
  if (type === "addData") {
    const newState = [...state];
    newState.push(payload);
    // console.log(newState);
    return newState;
  }
  else if(type==="delData"){
    return []
  }
  else {
    return state;
  }
};
export default addData;
