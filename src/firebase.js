import Firebase from 'firebase/app';
import  'firebase/database';
const app = Firebase.initializeApp({
	//your firebase api
});

export const db = app.database();
export const ref= db.ref('Admin');
export const usersref= db.ref('Users');
export const contactsref= db.ref('Admin/Contacts');
export const dataref= db.ref("Admin/Data Collection/");
export const pgref= db.ref("Admin/Data Collection/Paying Guest/Nagaon/Single");
