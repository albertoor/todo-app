import { auth, db } from '../db/firebase';

// this function register a new user
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;

    const userAdded = await db.collection('users').doc().set({
      uid: user.uid,
      name: name,
      authProvider: 'local',
      email: user.email,
    });
    console.log(userAdded);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

// this function making log out
const logOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    alert(err);
  }
};

// Authenticate with email and password
const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await auth.signInWithEmailAndPassword(email, password);
    console.log(res.credential.user);
  } catch (err) {
    console.log(err);
    alert(err.message);
  }
};

export { registerWithEmailAndPassword, logOut, loginWithEmailAndPassword };
