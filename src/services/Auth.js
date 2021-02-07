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

export const getDonars = async () => {
  const fstore = await firestore().collection('Donars').get()
  .then(querySnapshot => {
    const arr = [];
    querySnapshot.forEach(documentSnapshot => {
       arr.push(documentSnapshot.data());
    });
    return arr;

  });
  return fstore;
};

export const setDonars = (uid, data) => {
 return firestore().collection('Donars').doc().set(data);
}

