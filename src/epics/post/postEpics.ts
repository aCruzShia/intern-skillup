import { ActionsObservable, ofType } from 'redux-observable'
import { AnyAction } from 'redux'
import { of } from 'rxjs'
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { map, exhaustMap, catchError, tap } from 'rxjs/operators'
import responseUtil from '../../utils/responseUtil'
import {
  POST_ACTIONS,
  getPostListSuccess,
  getPostListFailed,
  deletePostSuccess,
  deletePostFailed,
} from '../../reducers/post/postAction'

export const getPostListEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(POST_ACTIONS.GET_POST_LIST),
    exhaustMap(() =>
      ajax.get('/v1/posts').pipe(
        map((res: AjaxResponse) => getPostListSuccess(res.response)),
        tap(() => responseUtil.success(POST_ACTIONS.GET_POST_LIST_FAILED)),
        catchError(() => of(getPostListFailed())),
      ),
    ),
  )

export const deletPostEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(POST_ACTIONS.DELETE_POST),
    exhaustMap(action =>
      ajax.delete(`/v1/posts/${action.payload.join(',')}`).pipe(
        map(() => deletePostSuccess(action.payload)),
        tap(() => responseUtil.success(POST_ACTIONS.DELETE_POST_FAILED)),
        catchError(err => of(deletePostFailed())),
      ),
    ),
  )

export default [getPostListEpic, deletPostEpic]
