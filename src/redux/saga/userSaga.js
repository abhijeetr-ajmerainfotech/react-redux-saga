import { call, takeEvery, put } from "redux-saga/effects";
import {
  GET_USERS_FAILED,
  GET_USERS_REQUESTED,
  GET_USERS_SUCCESS,
  // REMOVE_USERS_FAILED,
  // REMOVE_USERS_REQUESTED,
  // REMOVE_USERS_SUCCESS,
} from "../types";

async function getApi() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .catch((err) => {
      throw err;
    });
}

// function* removedData(item) {
//   try {
//     // const data = yield call(item.data);
//     yield put({ type: REMOVE_USERS_SUCCESS,users: })
//   } catch (err) {
//     yield put({ type: REMOVE_USERS_FAILED, message: err.message })
//     console.log(err);
//   }
// }


function* fetchUsers() {
  try {
    const users = yield call(getApi);
    console.log('users data', users);
    yield put({ type: GET_USERS_SUCCESS, users: users });
  } catch (err) {
    yield put({ type: GET_USERS_FAILED, message: err.message });
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_REQUESTED, fetchUsers);
  // yield takeLatest(REMOVE_USERS_REQUESTED, removedData)
}

export default userSaga;
