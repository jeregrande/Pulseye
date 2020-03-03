// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    projectId: ''
});

//Firestore reference
var db = firebase.firestore();

/////////////////////////////////////////
/*----------Home Page Routing----------*/
/////////////////////////////////////////

//Home page Firestore document reference
const docRef = db.collection("readings").doc("Backyard Network");

const network1Title = document.querySelector("#networkID1");
const currentTemperature = document.querySelector("#currentTemp1");
const highTemperature = document.querySelector("#highTemp1");
const lowTemperature = document.querySelector("#lowTemp1");

//Create numerical sort function
function sortNumber(a, b) {
    return a - b;
}

updateTemperature = function() {
    docRef.onSnapshot(function(doc) {
        if (doc && doc.exists) {
            const myData = doc.data();

            //Update the network 1 header
            networkID1.innerText = "Backyard Network";

            //Capture the temperature array and create a sorted version
            const temperatureArray = myData.temperature;
            const sortedTemperatures = temperatureArray.sort(sortNumber);
            console.log("temperatureArray: " + temperatureArray);

            //Capture the current (latest) temperature
            const currentTemp = myData.temperature[temperatureArray.length - 1];
            console.log("currentTemp: " + currentTemp);

            //Capture the lowest temperature of the array
            const lowestTemp = sortedTemperatures[0];
            console.log("lowestTemp: " + lowestTemp);

            //Capture the highest temperature of the array
            const highestTemp = sortedTemperatures[sortedTemperatures.length - 1];
            console.log("highestTemp: " + highestTemp);

            //Update the HTML
            currentTemperature.innerText = currentTemp + "°";
            highTemperature.innerText = highestTemp + "°";
            lowTemperature.innerText = lowestTemp + "°";
        }
    });
}

//Run the update function
updateTemperature();
