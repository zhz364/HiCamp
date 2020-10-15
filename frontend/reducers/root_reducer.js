import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import spotsReducer from "./spots_reducer"
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    spots: spotsReducer
});

export default rootReducer;
