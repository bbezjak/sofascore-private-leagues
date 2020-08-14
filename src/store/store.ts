import { createStore, applyMiddleware} from "redux"
import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import { RootReducer } from "./rootReducer"

const persistConfig = { 
    key: "leagues",
    storage
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(persistedReducer, applyMiddleware(logger))

export const persistor = persistStore(store)