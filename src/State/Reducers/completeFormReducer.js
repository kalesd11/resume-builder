const initialState = [];

const completeForm = (state = initialState, { type, payload }) => {
  // Adding Resume
  if (type === "completeForm") {
    const newState = [...state];
    newState.push(payload);
    // console.log(newState);
    return newState;
  }

  // Deleteing Resume
  else if (type === "delResume") {
    console.log(state);
    const newState = [...state].filter((elem) => {
      return elem.resumeid !== payload.resumeid;
    });
    localStorage.setItem("data",JSON.stringify(newState))
    return newState;
  }

  //adding state from localstorage
  else if(type==="accessLocal"){
    const local = JSON.parse(localStorage.getItem("data"))
    const newState = [...local];
    return newState
  }

  //editing personal details
  else if(type==="editPersonals"){
    const newState = [...state].map(data=>{
      if(data.resumeid===payload.resumeid){
        const newdata = {...data};
        newdata.userdata[0] = payload.data;
        return newdata
      }else{
        return data
      }
    })
    console.log(newState)
    localStorage.setItem("data",JSON.stringify(newState))
    return newState
    
  }
  //editing educational details
  else if(type==="editEducations"){
    const newState = [...state].map(data=>{
      if(data.resumeid===payload.resumeid){
        const newdata = {...data};
        newdata.userdata[1] = payload.data;
        return newdata
      }else{
        return data
      }
    })
    console.log(newState)
    localStorage.setItem("data",JSON.stringify(newState))
    return newState
    
  }
  //ediing experience details
  else if(type==="editExperiences"){
    const newState = [...state].map(data=>{
      if(data.resumeid===payload.resumeid){
        const newdata = {...data};
        newdata.userdata[2] = payload.data;
        return newdata
      }else{
        return data
      }
    })
    console.log(newState)
    localStorage.setItem("data",JSON.stringify(newState))
    return newState
    
  }
  //editing skills details
  else if(type==="editSkills"){
    const newState = [...state].map(data=>{
      if(data.resumeid===payload.resumeid){
        const newdata = {...data};
        newdata.userdata[3] = payload.data;
        return newdata
      }else{
        return data
      }
    })
    console.log(newState)
    localStorage.setItem("data",JSON.stringify(newState))
    return newState
    
  }

  else {
    return state;
  }
};
export default completeForm;
