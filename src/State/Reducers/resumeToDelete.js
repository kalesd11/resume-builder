const initialState = {};

const resumeToDelete = (state = initialState, { type, payload }) => {
  if (type === "resumeToDelete") {
    const newState = { ...payload };
    return newState;
  } else {
    return state;
  }
};
export default resumeToDelete;