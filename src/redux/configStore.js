import {applyMiddleware, combineReducers, createStore } from "redux";
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { HistoryReducer } from './reducers/HistoryReducer';
import { UserLoginCyberBugsReducer } from './reducers/UserCyberBugsReducer';
import { ProjectCategoryReducer } from './reducers/ProjectCategoryReducer';
import { ProjectCyberBugsReducer } from './reducers/ProjectCyberBugsReducer';
import { drawerReducer } from './reducers/DrawerCyberbugs';
import { ProjectReducer } from './reducers/ProjectReducer';
import { TaskTypeReducer } from './reducers/TaskTypeReducer';
import { PriorityReducer } from './reducers/PriorityReducer';
import { StatusReducer } from './reducers/StatusReducer';
import {TaskReducer} from './reducers/TaskReducer';
import LoadingReducer from './reducers/LoadingReducer';

const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
    // declare reducer
    LoadingReducer,
    HistoryReducer,
    UserLoginCyberBugsReducer,
    ProjectCategoryReducer,
    ProjectCyberBugsReducer,
    drawerReducer,
    ProjectReducer,
    TaskTypeReducer,
    PriorityReducer,
    StatusReducer,
    TaskReducer
})

const store = createStore(rootReducer, applyMiddleware( middleWareSaga));
// call saga
middleWareSaga.run(rootSaga)
export default store;