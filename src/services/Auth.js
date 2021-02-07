import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// *** Auth API ***
export const createUserWithEmailAndPassword = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

export const signInWithEmailAndPassword = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const createUser = (uid, data) => {
  return firestore().collection('Users').doc(uid).set(data);
}
  

export const getUser = async (uid) =>
  firestore().collection('Users').doc(uid).get();

export const logOut = () => auth().signOut();

export const getDonars = () => firestore().collection('Donars').get();

export const setDonars = (uid, data) => {
 return firestore().collection('Donars').doc().set(data);
}

