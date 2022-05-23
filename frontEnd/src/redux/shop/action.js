// import {
//   firestore,
//   convertCollectionSnapShotsToMap,
// } from "../../firebase/firebase";

export const FETCH_COLLECTION_START = "FETCH_COLLECTION_START";
export const FETCH_COLLECTION_SUCCESS = "FETCH_COLLECTION_SUCCESS";
export const FETCH_COLLECTION_FAILURE = "FETCH_COLLECTION_FAILURE";

// export const fetchCollectionData = () => {
//   return (dispatch) => {
//     const collectionRef = firestore.collection("collection");

//     collectionRef.onSnapshot(async (snapshot) => {
//       const collectionMap = convertCollectionSnapShotsToMap(snapshot);
//       dispatch(updateCollectionFromStore(collectionMap));
//     });
//   };
// };
export const fetchCollectionSucess = (data) => {
  return {
    type: FETCH_COLLECTION_SUCCESS,
    data,
  };
};
export const fetchCollectionFailure = (data) => {
  console.log("Aya aa");
  return {
    type: FETCH_COLLECTION_FAILURE,
    data,
  };
};
export const fetchCollectionStart = () => {
  return {
    type: FETCH_COLLECTION_START,
  };
};
