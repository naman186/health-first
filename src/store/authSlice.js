import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    user : null,
    role : null,  // ye role se hi navigation possible ho payega
   
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.user = action.payload; // Store user data in the state
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.status = false;
            state.user = null; // Clear user data on logout
            state.role = null;
        },

    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;