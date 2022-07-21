import * as Cyberbugs from './Cyberbugs/UserCyberbugsSaga';

import * as ProjectCategorySaga from './Cyberbugs/ProjectCategorySaga';
import * as ProjectSaga from './Cyberbugs/ProjectSaga';
import * as TaskTypeSaga from './Cyberbugs/TaskTypeSaga';
import * as PrioritySaga from './Cyberbugs/PrioritySaga';
import * as TaskSaga from './Cyberbugs/TaskSaga';
import * as StatusSaga from './Cyberbugs/StatusSaga'
import { all } from "redux-saga/effects";
export function * rootSaga (){
    console.log("root Saga")
    yield all([
        Cyberbugs.theoDoiSignin(),
        Cyberbugs.theoDoiGetUser(),
        Cyberbugs.theoDoiRemoveUserProject(),
        Cyberbugs.theoDoiAddUserProject(),
        Cyberbugs.theoDoiGetUserByProjectIdSaga(),
        
        ProjectCategorySaga.theoDoigetAllProjectCategory(),

        ProjectSaga.theoDoiCreateProjectSaga(),
        ProjectSaga.theoDoiGetListProjectSaga(),
        ProjectSaga.theoDoiUpdateProjectSaga(),
        ProjectSaga.theoDoiDeleteProject(),
        ProjectSaga.theoDoiGetProjectDetail(),
        ProjectSaga.theoDoiGetAllProjectSaga(),

        StatusSaga.theoDoiGetAllStatusSaga(),


        TaskTypeSaga.theoDoiGetAllTaskTypeSaga(),


        PrioritySaga.theoDoiGetAllPriority(),
    
        TaskSaga.theoDoiCreateTaskSaga(),
        TaskSaga.theoDoiGetTaskDetailSaga(),
        TaskSaga.theoDoiUpdateTaskStatusSaga(),
        TaskSaga.theoDoiHandleChangePostApi(),
        TaskSaga.theoDoiUdpateTask()
    ])
}