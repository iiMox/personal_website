import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import auth from "./auth";
import skills from "./skills";
import services from "./services";
import projects from "./projects";
import messages from "./messages";
import row from "./row";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth,
    skills,
    services,
    projects,
    messages,
    row,
});

export default persistReducer(persistConfig, rootReducer);
