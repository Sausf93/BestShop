/// Remove current logged user in localstorage
localStorage.removeItem("userLogged");

/// Firebase config
var config = {
    apiKey: "AIzaSyA0mPQ3_Qu089iBajy7SiZQZbGgfwfpGXc",
    authDomain: "bestshopping-ba53a.firebaseapp.com",
    databaseURL: "https://bestshopping-ba53a.firebaseio.com",
    projectId: "bestshopping-ba53a",
    storageBucket: "bestshopping-ba53a.appspot.com",
    messagingSenderId: "764486840870"
};

/// Initialize firebase
firebase.initializeApp(config);

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