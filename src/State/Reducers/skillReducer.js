const initialState = []

const skillReducer = (state = initialState, { type, payload }) => {
  if(type==="addSkill"){
    let newState = [...state]
    newState.push(payload)
    return newState
  }
  else{
    return state
  }
}
export default skillReducer