// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyDvgR8evc6xOcAp-1BvHvIrpPu5nlr-4pA',
    authDomain: 'pulseye-ec283.firebaseapp.com',
    projectId: 'pulseye-ec283'
});

//Firestore reference
var db = firebase.firestore();

//Home page Firestore document reference
const docRef = db.collection("sensorNetwork");

const editNetID = document.querySelector("#editNetworkID");
const editNetZIP = document.querySelector("#editNetworkZIP");
const editNetName = document.querySelector("#editNetworkDisplayName");
const editNetButton = document.querySelector("#editNetworkButton");

editNetButton.addEventListener("click", function() {
    const idToUpdate = editNetID.value;
    const zipToSave = editNetZIP.value;
    const nameToSave = editNetName.value;

    console.log("ID of network to edit: " + idToUpdate);
    console.log("Network ZIP to update with: " + zipToSave);
    console.log("Network Name to update with: " + nameToSave);

    db.collection("sensorNetwork").doc(idToUpdate).update({
            sensorNetName: nameToSave,
            zip: zipToSave
        })
        .then(function() {
            console.log("Document successfully written!");
            alert(idToUpdate + " network updated");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
})