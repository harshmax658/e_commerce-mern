// import { takeLatest, put, all, call } from "redux-saga/effects";
// import {
//   auth,
//   googleProvider,
//   createUserProfileDocument,
//   getCurrentUser,
// } from "../../firebase/firebase";
// import {
//   GOOGLE_SIGN_IN_START,
//   EMAIL_SIGN_IN_START,
//   IS_USER_AUTHENTICATE,
//   SIGN_OUT_START,
//   SIGN_UP_START,
//   SIGN_UP_SUCCESS,
// } from "./action";
// import {
//   signInSuccess,
//   signInfailure,
//   signOutSuccess,
//   signOutFailure,
//   signUpSuccess,
//   signUpFailure,
// } from "./action";

// // function* getSnaphotFromUserAuth(userAuth, additionalData) {
// //   try {
// //     const userRef = yield call(
// //       createUserProfileDocument,
// //       userAuth,
// //       additionalData
// //     );
// //     const snapshot = yield userRef.get();
// //     yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
// //   } catch (error) {
// //     yield put(signInfailure(error));
// //   }
// // }

// // export function* signInWithGoogle() {
// //   try {
// //     const { user } = yield auth.signInWithPopup(googleProvider);
// //     yield getSnaphotFromUserAuth(user);
// //   } catch (error) {
// //     // console.log("error");
// //     yield put(signInfailure(error));
// //   }
// // }
// // function* signInWithEmail({ data: { email, password } }) {
// //   try {
// //     const { user } = yield auth.signInWithEmailAndPassword(email, password);
// //     yield getSnaphotFromUserAuth(user);
// //   } catch (error) {
// //     // console.log("error");
// //     yield put(signInfailure(error));
// //   }
// // }
// // function* isUserAuthenticated() {
// //   try {
// //     const userAuth = yield getCurrentUser();
// //     if (!userAuth) return;
// //     yield getSnaphotFromUserAuth(userAuth);
// //   } catch (error) {
// //     yield put(signInfailure(error));
// //   }
// // }
// export function* onEmailSignIn() {
//   yield takeLatest(EMAIL_SIGN_IN_START, signInWithEmail);
// }
// export function* onGoogleSignIn() {
//   yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
// }
// function* checkUserSession() {
//   yield takeLatest(IS_USER_AUTHENTICATE, isUserAuthenticated);
// }

// function* signOutStart() {
//   try {
//     yield auth.signOut();
//     yield put(signOutSuccess());
//   } catch (error) {
//     yield put(signOutFailure(error));
//   }
// }
// function* onSignOut() {
//   yield takeLatest(SIGN_OUT_START, signOutStart);
// }

// function* signUp({ data: { email, password, displayName } }) {
//   try {
//     const { user } = yield auth.createUserWithEmailAndPassword(email, password);
//     yield put(signUpSuccess({ user, additionData: { displayName } }));
//   } catch (error) {
//     yield put(signUpFailure(error));
//   }
// }
// function* onSignUpStart() {
//   yield takeLatest(SIGN_UP_START, signUp);
// }
// function* sigInAfterSignUp({ data: { user, additionData } }) {
//   yield getSnaphotFromUserAuth(user, additionData);
// }
// function* onSignupSuccess() {
//   yield takeLatest(SIGN_UP_SUCCESS, sigInAfterSignUp);
//   // console.log("onSignupSuccess  ");
// }

// export function* userSaga() {
//   yield all([
//     call(onGoogleSignIn),
//     call(onEmailSignIn),
//     call(checkUserSession),
//     call(onSignOut),
//     call(onSignUpStart),
//     call(onSignUpStart),
//     call(onSignupSuccess),
//   ]);
// }
