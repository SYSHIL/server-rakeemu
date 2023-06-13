const express = require('express');
const expressapp = express();
const port = process.env.PORT || 3000;
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, updateDoc, setDoc } = require('firebase/firestore');
const bodyParser = require('body-parser');
expressapp.use(bodyParser.json());

// Replace with your Firebase project credentials
const firebaseConfig = {
  apiKey: "AIzaSyCNzRdlcfQeoN8a7L0jA04zhDamdpwyyJI",
  authDomain: "learnfirebase-f2755.firebaseapp.com",
  databaseURL: "https://learnfirebase-f2755-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "learnfirebase-f2755",
  storageBucket: "learnfirebase-f2755.appspot.com",
  messagingSenderId: "994018527725",
  appId: "1:994018527725:web:d6978ce0e350bd778effe4",
  measurementId: "G-WBPJCQ3BK5"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Listen for POST requests containing JSON data


expressapp.get('/',(req,res)=>{
  res.send("welcome")
})

expressapp.post('/updateSmoke', async (req, res) => { 
  const { id, smoke } = req.body;
  await setDoc(doc(db,'smokeSensors',id.toString()),{
    smokeValue : smoke
  });
  res.send("success")
});


// another function to handle post request for temperature



// antoher function to handle post for vcb tripping


// Start server
expressapp.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
