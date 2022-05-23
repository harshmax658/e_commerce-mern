import { all, call } from "redux-saga/effects";
import { shopSaga } from "./shop/shopSagas";
import { userSaga } from "./user/userSaga";

export default function* rootSaga() {
  yield all([call(shopSaga), call(userSaga)]);
}

// export all the data and queen and
