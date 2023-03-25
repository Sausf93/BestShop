/// Remove current logged user in localstorage
localStorage.removeItem("userLogged");

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBYQ-aQ3MLCsKfGwXULnnOYMK90rQxk-IM",
    authDomain: "bestshop-c1579.firebaseapp.com",
    projectId: "bestshop-c1579",
    storageBucket: "bestshop-c1579.appspot.com",
    messagingSenderId: "1046183832127",
    appId: "1:1046183832127:web:f904f54ac93c4080cfa68a"
  };

/// Initialize firebase
firebase.initializeApp(firebaseConfig);

/// Logout from firebase 
firebase.auth().signOut().then(function () {
    // Sign-out successful.
    // console.log("Sign-out successful");

}).catch(function (error) {
    // console.log(error);

});

/**
 * Function that logs into Github
 */
function loginGithub() {
    var auth = firebase.auth();

    var provider = new firebase.auth.GithubAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {
        // User signed in!
        console.log(result);

        var username = result.additionalUserInfo.username;
        localStorage.setItem("userLogged", username);
        window.location.href = "search.html"

    }).catch(function (error) {
        // An error occurred
    });
}

/**
 * Function that logs into Twitter
 */
function loginTwitter() {
    var auth = firebase.auth();

    var provider = new firebase.auth.TwitterAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {

        console.log(result);

        var username = result.additionalUserInfo.username;
        localStorage.setItem("userLogged", username);
        window.location.href = "search.html"


    }).catch(function (error) {
        // An error occurred
        console.log(error);

    });
}

/**
 * Function that logs into Github
 */
function loginFacebook() {
    var auth = firebase.auth();

    var provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {
        // User signed in!
        console.log(result);

        var username = result.user.displayName;
        localStorage.setItem("userLogged", username);
        window.location.href = "search.html"

    }).catch(function (error) {
        // An error occurred
        console.log(error);

    });
}

/**
 * Function that logs into Google
 */
function loginGoogle() {
    var auth = firebase.auth();

    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(function (result) {
        // User signed in!
        // console.log(result);
        console.log(result);

        var username = result.user.displayName;
        localStorage.setItem("userLogged", username);
        window.location.href = "search.html"
    }).catch(function (error) {
        // An error occurred
        console.log(error);
    });
}