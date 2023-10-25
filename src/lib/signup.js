import { callLoginGoogle, submitNewUserInfo }  from './index';


export const renderSignup = (navigateTo) => {
    const section = document.createElement('section');
    const template = `
        <img class="logo" src="Images/logo-habitate.png">
        <h1 class="signup"> Registrate </h1>
        <form class="containers-button">
             <input id="email" class="input-email" placeholder="Escribe tu correo"> </input>
             <input id="pass" class="input-pass" placeholder="Esribe tu contraseña"></input>
            <button id="submit-sign-in" class="button-indextwo"> Regístrarse </button>
        </form>
        <button id="go-google-s" class="button-second"> Registrate con Google </button>
        <div>
            <span class="span-login"> ¿Ya tienes cuenta? </span>
            <button id="go-login" class="button-third"> Inicia Sesión </button>
        </div>
    `;
    section.innerHTML = template;

    const email = section.querySelector('#email');
    const password = section.querySelector('#pass');
    const buttonSignup = section.querySelector('#submit-sign-in');
    buttonSignup.addEventListener('click', (event) => {
        event.preventDefault()
        submitNewUserInfo(email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log({user});
            navigateTo('/home')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error: ', error.message);
            alert("no se pudo ingresar")
            // ..
          });
    });
    const buttonGoSignup = section.querySelector('#go-login');
    buttonGoSignup.addEventListener('click', () => {
        navigateTo('/login');
    });
    const buttonGoogleS = section.querySelector('#go-google-s');
    buttonGoogleS.addEventListener('click', () => {
        callLoginGoogle()
        .then((result) => {
            navigateTo('/home')
            const user = result.user;
            console.log(user)
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            // ...
          })
    });
   
    return section;
};