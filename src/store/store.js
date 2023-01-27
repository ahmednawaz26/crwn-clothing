import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const middlewares = [logger];

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persistor = persistStore(store);