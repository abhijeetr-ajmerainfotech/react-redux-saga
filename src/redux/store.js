import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/index";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   compose(applyMiddleware(sagaMiddleware), composeWithDevTools())
// );

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
  devTools: composeWithDevTools,
})

sagaMiddleware.run(rootSaga);

export default store;
