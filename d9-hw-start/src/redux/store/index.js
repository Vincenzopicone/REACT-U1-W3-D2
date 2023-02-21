import { configureStore, combineReducers } from "@reduxjs/toolkit";
/* import appReducer from "../reducers"; */
import memoryReducer from "../reducers/memoryFav";
import searchReducer from "../reducers/searchReducer";

////////
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_PERSIST_KEY,
    }),
  ],
};

const rootReducers = combineReducers({
  /*  app: appReducer, */
  fav: memoryReducer,
  search: searchReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
