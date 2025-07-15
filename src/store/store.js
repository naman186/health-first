import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authslice";
import databaseSlice from "./databaseSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    database: databaseSlice,
  }
}
);
export default store;