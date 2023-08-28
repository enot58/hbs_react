import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api";
import { IUserSlice } from "../../interfaces/models";
import Check from "./Check";
import Login from "./Login";

const initialState: IUserSlice = {
    isAuth: false,
    user: null,
    isLoading: false,
    isError: false,
    token: null,
    dataError: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout(state) {
            localStorage.removeItem("token");
            state.isAuth = false;
            state.token = null;
            state.user = null;
        },
    },
    extraReducers(builder) {
        builder.addMatcher(authApi.endpoints.login.matchPending, Login.pending);
        builder.addMatcher(
            authApi.endpoints.login.matchFulfilled,
            Login.fulfilled
        );
        builder.addMatcher(
            authApi.endpoints.login.matchRejected,
            Login.rejected
        );

        builder.addMatcher(authApi.endpoints.check.matchPending, Check.pending);
        builder.addMatcher(
            authApi.endpoints.check.matchFulfilled,
            Check.fulfilled
        );
        builder.addMatcher(
            authApi.endpoints.check.matchRejected,
            Check.rejected
        );
    },
});

export const userReducer = userSlice.reducer;