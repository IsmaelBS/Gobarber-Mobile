import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import persistReducers from './persistReducers';

import rootSaga from './modules/rootSagas';
import rootReducers from './modules/rootReducer';

const sagaMonitor =
  __DEV__ === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducers(rootReducers), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
