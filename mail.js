const firebaseConfig = {
  //   copy your firebase config informations
    apiKey: "AIzaSyAcA0fS9w2gzM9C_2tLkGN0XZygAXrvTms",
    authDomain: "my-web-b4dd9.firebaseapp.com",
    databaseURL: "https://my-web-b4dd9-default-rtdb.firebaseio.com",
    projectId: "my-web-b4dd9",
    storageBucket: "my-web-b4dd9.appspot.com",
    messagingSenderId: "706209094825",
    appId: "1:706209094825:web:554c9f3e8f53a8ebcf1db8"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
