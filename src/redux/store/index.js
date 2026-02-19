import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
    storage: localStorage,
    key: "root",
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ serializableCheck: false });
    },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
