import { combineReducers } from "redux";
import skillReducer from "./skillReducer";
import expReducer from "./expReducer";
import eduReducer from "./eduReducer";
import addData from "./addDataReducer";
import completeForm from "./completeFormReducer";
import editResume from "./editResume";
import resumeToDelete from "./resumeToDelete";
import templateName from "./TemplateName";
import goToDownload from "./goToDownload";

const reducers = combineReducers({
    templateName : templateName,
    skills : skillReducer,
    exps : expReducer,
    edus : eduReducer,
    data : addData,
    completeForm:completeForm,
    editResume : editResume,
    resumeToDelete : resumeToDelete,
    goToDownload : goToDownload
})

export default reducers