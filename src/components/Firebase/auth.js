import { useEffect, useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import 'firebase/compat/auth'
import { setUserCookie } from '../../../firebase/userCookies'
import { mapUserData } from '../../../firebase/mapUserData'
import initFirebase from '../../../firebase/initfirebase'
import firebase from "@firebase/app-compat";
initFirebase()
const firebaseAuthConfig = {
    // signInFlow: 'popup',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
        // add additional auth flows below
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/home',
    credentialHelper: 'none',
    callbacks: {
        signInSuccess: async (authResult, redirectUrl) => {
            const userData = mapUserData(authResult)
            setUserCookie(userData)


            return true;
        },
    },
}

const FirebaseAuth = () => {
    // Do not SSR FirebaseUI, because it is not supported.
    // https://github.com/firebase/firebaseui-web/issues/213
    const [renderAuth, setRenderAuth] = useState(false)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setRenderAuth(true)
        }
    }, []);
    
    return (
        <div>
            {renderAuth ? (
                <section className='p-2 flex flex-col items-center justify-center'>
                    <h1 className='text-center'>
                        Sign In/Sign Out
                    </h1>
                    <StyledFirebaseAuth
                    uiConfig={firebaseAuthConfig}
                    firebaseAuth={firebase.auth()}
                />
                <p className='m-5 w-3/5 text-center'>New account will be created automatically if it doesn't already exists! </p>
                </section>

            ) : null}
        </div>
    )
}

export default FirebaseAuth

