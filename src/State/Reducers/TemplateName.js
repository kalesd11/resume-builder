
const initialState = {};

const templateName = (state = initialState, { type, payload }) => {
  if (type === "templateName") {
    const newState = { ...payload };
    return newState;
  } else {
    return state;
  }
};
export default templateName