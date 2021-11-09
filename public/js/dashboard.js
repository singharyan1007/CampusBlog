// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
let login = document.querySelector('.login');
const setupLoginButton = () => {
    ui.start('#loginUI', {
        callbacks: {
            
        },
        signInFlow: 'popup',
        signInOptions:[firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}