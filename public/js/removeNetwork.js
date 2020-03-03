// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    projectId: ''
});

//Firestore reference
var db = firebase.firestore();

//Home page Firestore document reference
const docRef = db.collection("sensorNetwork");

const deleteNetID = document.querySelector("#deleteNetworkID");
const deleteNetButton = document.querySelector("#deleteNetworkButton");

deleteNetButton.addEventListener("click", function() {
    const idToDelete = deleteNetID.value;
    console.log("ID of network to edit: " + idToDelete);

    db.collection("sensorNetwork").doc(idToDelete).delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
})
