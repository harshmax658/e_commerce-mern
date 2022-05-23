import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./rootReducer";

const sagaMiddleware = createSagaMiddleware();

// import thunk from "redux-thunk";

const store = createStore(rootReducer);

const persistor = persistStore(store);

export { store, persistor };
