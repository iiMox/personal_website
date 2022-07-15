import { combineReducers } from "redux";

import auth from "./auth";
import skills from "./skills";
import services from "./services";
import projects from "./projects";
import messages from "./messages";

const rootReducer = combineReducers({
    auth,
    skills,
    services,
    projects,
    messages,
});

export default rootReducer;
