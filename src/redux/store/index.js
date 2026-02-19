import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

import { mainReducer, searchReducer } from "../reducers/index";

const ultraReducer = combineReducers({
    favorite: mainReducer,
    result: searchReducer,
});

const persistConfig = {
    storage: localStorage,
    key: "root",
};

const persistedReducer = persistReducer(persistConfig, ultraReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false });
    },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
