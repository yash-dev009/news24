import { useRouter } from 'next/router'
import React from 'react'
import { getAuth, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../../firebase'

function Index() {

    const router = useRouter()
const auth = router.query.apiKey
if(auth){
    localStorage.setItem("token",auth)
    confirm()
//     setTimeout(() => {
// router.push("/")
//     },5000)

}

function confirm() {
// Confirm the link is a sign-in with email link.

if (isSignInWithEmailLink(auth, window.location.href)) {

  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  let email = window.localStorage.getItem('emailForSignIn');
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  
  // The client SDK will parse the code from the link for you.
  signInWithEmailLink(auth, email, window.location.href)
    .then((result) => {
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      console.log(result,"gotResult");
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    })
    .catch((error) => {
//    alert("jgk")
console.log(error,"error"); 

      // Some error occurred, you can inspect the code: error.code
      // Common errors could be invalid email and invalid or expired OTPs.
    });
}
}

  return (
    <div>
        Please don't refresh
      Redirecting you to the main page
    </div>
  )
}

export default Index
