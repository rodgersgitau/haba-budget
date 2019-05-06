import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
	apiKey: process.env.PREACT_APP_apiKey,
	authDomain: process.env.PREACT_APP_authDomain,
	databaseURL: process.env.PREACT_APP_databaseURL,
	projectId: process.env.PREACT_APP_projectId,
	storageBucket: process.env.PREACT_APP_storageBucket,
	messagingSenderId: process.env.PREACT_APP_messagingSenderId,
	appId: process.env.PREACT_APP_appId
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.firestore();
export const auth = firebase.auth();