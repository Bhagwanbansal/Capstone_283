
  // // Your web app's Firebase configuration
  // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBCn6UbGZ-DiSD2QKJKjpMLvCF8qN3pt2c",
  //   authDomain: "pneumoniadetection-176c1.firebaseapp.com",
  //   projectId: "pneumoniadetection-176c1",
  //   storageBucket: "pneumoniadetection-176c1.appspot.com",
  //   messagingSenderId: "299787721217",
  //   appId: "1:299787721217:web:96de4f1a45f5221ef53e00"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

  // const auth =  firebase.auth();

  // //signup function
  // function signUp(){
  //   var email = document.getElementById("email");
  //   var password = document.getElementById("password");

  //   const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
  //   //
  //   promise.catch(e=>alert(e.message));
  //   // alert("SignUp Successfully");
  // }

  // //signIN function
  // function  signIn(){
  //   var email = document.getElementById("email");
  //   var password  = document.getElementById("password");
  //   const promise = auth.signInWithEmailAndPassword(email.value,password.value);
  //   promise.catch(e=>alert(e.message));
    
  // }


  // // //signOut

  // // function signOut(){
  // //   auth.signOut();
  // //   alert("SignOut Successfully from System");
  // // }

  // //active user to homepage
  // firebase.auth().onAuthStateChanged((user)=>{
  //   if(user){
  //     var email = user.email;
  //     alert("Active user "+email);

  //   }else{
  //     alert("No Active user Found")
  //   }
  // })