// import { takeEvery, call, put, delay, take } from "redux-saga/effects";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { FETCH_COLLECTION_START } from "./action";
import { fetchCollectionSucess, fetchCollectionFailure } from "./action";

export function* updateCollectionInStore() {
  try {
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}
export function* fetchCollectionStartAsync() {
  yield takeLatest(FETCH_COLLECTION_START, updateCollectionInStore);
}

export function* shopSaga() {
  yield all([call(fetchCollectionStartAsync)]);
}
