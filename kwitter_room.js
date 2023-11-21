const firebaseConfig = {
    apiKey: "AIzaSyDwSCAr_nnfEWDPjMKGicGoSXtVFL3T-A0",
    authDomain: "projeto-95-967f4.firebaseapp.com",
    databaseURL: "https://projeto-95-967f4-default-rtdb.firebaseio.com",
    projectId: "projeto-95-967f4",
    storageBucket: "projeto-95-967f4.appspot.com",
    messagingSenderId: "97515558393",
    appId: "1:97515558393:web:652be3d5a171a97978d928",
    measurementId: "G-08ZTECQHEK"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey =
childSnapshot.key;
roomNames = childKey;
//Início do código

//Fim do código
});});}
getData();