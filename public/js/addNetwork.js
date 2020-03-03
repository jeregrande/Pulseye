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

const newNetID = document.querySelector("#newNetworkID");
const newNetZIP = document.querySelector("#newNetworkZIP");
const newNetName = document.querySelector("#newNetworkDisplayName");
const newNetButton = document.querySelector("#newNetworkButton");

newNetworkButton.addEventListener("click", function() {
    const idToSave = newNetID.value;
    const zipToSave = newNetZIP.value;
    const nameToSave = newNetName.value;

    console.log("Network ID to save: " + idToSave);
    console.log("Network ZIP to save: " + zipToSave);
    console.log("Network Name to save: " + nameToSave);

    db.collection("sensorNetwork").doc(idToSave).set({
            activeStakes: 0,
            networkRecords: [],
            sensorNetName: nameToSave,
            zip: zipToSave
        })
        .then(function() {
            console.log("Document successfully written!");
            alert(nameToSave + " network registered");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
})
