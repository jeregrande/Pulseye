// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyDvgR8evc6xOcAp-1BvHvIrpPu5nlr-4pA',
    authDomain: 'pulseye-ec283.firebaseapp.com',
    projectId: 'pulseye-ec283'
});

//Firestore reference
var db = firebase.firestore();

//Home page Firestore document reference
const docRef = db.collection("users").doc("GeFF9VwzAgYhYsXZhu05");

const emailField = document.querySelector("#profileInputEmail");
const passwordField1 = document.querySelector("#profileInputPasswordFirst");
const passwordField2 = document.querySelector("#profileInputPasswordConfirm");
const emailButton = document.querySelector("#profileEmailButton");
const passwordButton = document.querySelector("#profilePasswordButton");

emailButton.addEventListener("click", function() {
    const emailToSave = emailField.value;
    console.log("Email to save: " + emailToSave);

    if (emailToSave.includes("@")) {
        docRef.update({
            email: emailToSave

        }).then(function() {
            console.log("Email updated!");
            alert("Email updated to: " + emailToSave);
        }).catch(function(error) {
            console.log("Got an error: ", error);
        });
    } else {
        console.log("Email rejected");
        alert("Email must include an '@'");
    }

})

passwordButton.addEventListener("click", function() {
    const passwordToSave1 = passwordField1.value;
    const passwordToSave2 = passwordField2.value;
    console.log("Submitted password 1: " + passwordToSave1);
    console.log("Submitted password 2: " + passwordToSave2);

    if (passwordToSave1 == passwordToSave2) {
        docRef.update({
            password: passwordToSave2

        }).then(function() {
            console.log("Password updated!");
            alert("Password updated to: " + passwordToSave2);
        }).catch(function(error) {
            console.log("Got an error: ", error);
        });
    } else {
        console.log("Passwords rejected");
        alert("Passwords do not match");
    }

})