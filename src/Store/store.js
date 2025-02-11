import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import resumeReducer from "../Slices/ResumeSlice.js";
import Authreducer from "../Slices/AuthSlice.js"
import {thunk} from "redux-thunk"; 

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["Resume"], 
};

const rootReducer = combineReducers({
  Resume: resumeReducer,
  Auth : Authreducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
      thunk,
    }),
});

export const persistor = persistStore(store);
