import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import userReducer from "./components/features/userSlice";
import dataReducer from "./components/reducer/userReducer";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  users:dataReducer
});
// (persistReducer) takes your root Redux reducer and a configuration object, and returns an enhanced reducer it take root-redux & persistConfig object as argument
// it return enhanced reducer that know how to intact with choose storage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// (configureStore) it automatic save & reload state form persist storage
// it take redux store (which is configured with the persistReducer) as argument it return object that manage the rehydration and saving of your Redux state.
// when your application loads, pulling the saved state from storage and applying it to your Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store; 


/*
import { combineReducers } from "redux";
import crudReducer from "./crudReducers";

export default combineReducers({
  list: crudReducer,
});

*/