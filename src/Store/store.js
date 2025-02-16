import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session"; 
import resumeReducer from "../Slices/ResumeSlice.js";
import {thunk} from "redux-thunk"; 

const persistConfig = {
  key: "root",
  storage : storageSession,
  whitelist: ["Resume"], 
};

const rootReducer = combineReducers({
  Resume: resumeReducer,
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
