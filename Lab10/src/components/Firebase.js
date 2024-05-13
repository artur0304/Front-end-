import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
    apiKey: "AIzaSyBQCGbghH3vcSmIdw904zMvo2Hv1Gm_bV4",
    authDomain: "labb10.firebaseapp.com",
    projectId: "labb10",
    storageBucket: "labb10.appspot.com",
    messagingSenderId: "1063006060652",
    appId: "1:1063006060652:web:50e5f7ef64c2a8d6239849",
    measurementId: "G-ENMMZCSP2F"
});

const firestore = firebase.firestore();

export const addExpense = async (expenseData) => {
    try {
        await firestore.collection("expenses").add(expenseData);
    } catch (error) {
        console.error("Error adding expense: ", error);
    }
};

export const getExpenses = async () => {
    try {
        const snapshot = await firestore.collection("expenses").get();
        const expenses = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return expenses;
    } catch (error) {
        console.error("Error getting expenses: ", error);
        return [];
    }
};

export const updateExpense = async (expenseId, expenseData) => {
    try {
        await firestore
            .collection("expenses")
            .doc(expenseId)
            .update(expenseData);
    } catch (error) {
        console.error("Error updating expense: ", error);
    }
};

export const deleteExpense = async (expenseId) => {
    try {
        await firestore.collection("expenses").doc(expenseId).delete();
    } catch (error) {
        console.error("Error deleting expense: ", error);
    }
};
