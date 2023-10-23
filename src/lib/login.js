import { callLoginGoogle, submitUserInfo }  from './index';

export const renderLogin = (navigateTo) => {
    const section = document.createElement('section');
    const template = `
        <img class="logo" src="Images/logo-habitate.png">
        <h1 class="login"> Ingresa </h1>
        <form class="containers-button">
            <input id="email" class="input-email" placeholder="Escribe tu correo"> </input>
            <input id="pass" class="input-pass" placeholder="Esribe tu contraseña"></input>
            <button id="submit" class="button-indextwo"> Inicia sesión </button>
        </form>
        <button id="go-google" class="button-second"> Ingresar con Google </button>
        <div>
            <span class="span-login"> ¿No tienes cuenta? </span>
            <button id="go-signup" class="button-third"> Regístrate </button>   
        </div>
    `;
    section.innerHTML= template;

    const email = section.querySelector('#email');
    const password = section.querySelector('#pass');
    const buttonSubmit = section.querySelector('#submit');
    console.log(buttonSubmit);
    buttonSubmit.addEventListener('click', (event) => {
        console.log(buttonSubmit)
        event.preventDefault()
        submitUserInfo (email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
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

    const buttonSubmitGoogle = section.querySelector('#go-google');
    console.log(buttonSubmitGoogle);
    buttonSubmitGoogle.addEventListener('click', () => {
        callLoginGoogle();
    });

    const buttonGoSignup = section.querySelector('#go-signup');
    buttonGoSignup.addEventListener('click', () => {
        navigateTo('/signup');
    });
    return section;
};