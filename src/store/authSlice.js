import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    user : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.user = action.payload; // Store user data in the state
        },
        logout: (state) => {
            state.status = false;
            state.user = null; // Clear user data on logout
        },

    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;