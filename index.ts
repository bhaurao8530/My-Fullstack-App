import * as functions from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp();

const db = admin.firestore();

// Define a custom User interface
interface CustomUser {
    id: string; // Include the id property
    // Define other properties according to your Firestore document structure
    name?: string;  // Example property
    email?: string; // Example property
    // Add more properties as needed
}

export const getUsers = functions.onRequest(async (req, res) => {
  try {
    const usersSnapshot = await db.collection('users').get();
    const users: CustomUser[] = []; // Use the custom interface
    usersSnapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() } as CustomUser); // Use the custom type assertion
    }); 
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});
