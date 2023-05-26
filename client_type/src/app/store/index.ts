import { userSlice } from "./../../shared/models/users/userSlice";
import {
    combineReducers,
    configureStore,
    Reducer,
    ThunkAction,
} from "@reduxjs/toolkit";
import { AppState } from "../../shared/interfaces/store";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
    user: userSlice.reducer,
});
const store = configureStore({
    reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
// export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
//     users: userSlice.reducer,
// });

// export const store = configureStore({
//     reducer: rootReducer,
// });
