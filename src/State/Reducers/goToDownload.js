const initialState = {};

const goToDownload = (state = initialState, { type, payload }) => {
  if (type === "goToDownload") {
    const newState = { ...payload };
    return newState;
  } else {
    return state;
  }
};
export default goToDownload;
