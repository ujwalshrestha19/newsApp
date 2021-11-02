import { combineReducers } from "redux";
import PostsReducer from "./PostsReducer";

const RootReducer = combineReducers({
    //this will contain [ost Reducer
    posts: PostsReducer
});

export default RootReducer;