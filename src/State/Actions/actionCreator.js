// To add Skills by id
const addSkill = (payload) => ({
  type: "addSkill",
  payload,
});

// To add Experience by Id
const addExperience = (payload) => ({
  type: "addExperience",
  payload: payload,
});

//To add education by id
const addEducation = (payload) => ({
  type: "addEducation",
  payload,
});

//Delete Education By id
const delEducation = (payload) => ({
  type: "delEducation",
  payload,
});

// To delete Experience on the basis of id
const delExperience = (payload) => ({
  type: "delExperience",
  payload,
});

// To save Complete state of form
const completeForm = (payload) => ({
  type: "completeForm",
  payload,
});

// To add step by step data of form
const addData = (payload) => ({
  type: "addData",
  payload: payload,
});

// making collected state empty after saving data to main state
const delData = (payload) => ({
  type: "delData",
  payload: payload,
});

//delete resume by id
const delResume = (payload) => ({
  type: "delResume",
  payload,
});

const resumeToDelete = (payload)=>({
  type:"resumeToDelete",
  payload
})
// To access localStorage 
const accessLocal = (payload) =>({
  type: "accessLocal",
  payload,
})

//Edit Resume data according to id
const editResume = (payload)=>({
  type : "editResume",
  payload
})

//To complete Edit Resume Process 
const completeEdit = (payload) =>({
  type : "completeEdit",
  payload
})

// to edit personal details
const editPersonals = (payload) =>({
  type:"editPersonals",
  payload
})
// to edit education details
const editEducations = (payload) =>({
  type:"editEducations",
  payload
})
// to edit experiences details
const editExperiences = (payload) =>({
  type:"editExperiences",
  payload
})
// to edit skills details
const editSkills = (payload) =>({
  type:"editSkills",
  payload
})

//template Name 
const templateName = (payload) =>({
  type:"templateName",
  payload
})

const goToDownload = (payload) => ({
  type:"goToDownload",
  payload
})
export {
  addSkill,
  addExperience,
  addEducation,
  addData,
  delData,
  completeForm,
  delEducation,
  delExperience,
  delResume,
  resumeToDelete,
  accessLocal,
  editResume,
  completeEdit,
  editEducations,
  editExperiences,
  editPersonals,
  editSkills,
  templateName,
  goToDownload
};
