import { combineReducers, createStore } from "redux";
import { initialMessages, messageReducer } from "../features/messages/messageSlice";
import { initialProjects, projectsReducer } from "../features/projects/ProjectsSlice";
import { initialUsers, usersReducer } from "../features/users/usersSlice";

const store = createStore(combineReducers({
    Projects: projectsReducer,
    Messages: messageReducer,
    Users: usersReducer,
}), {
    Projects: initialProjects,
    Messages: initialMessages,
    Users: initialUsers
});
export default store;