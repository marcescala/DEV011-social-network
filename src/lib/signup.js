import {callLoginGoogle, submitNewUserInfo}  from './firebase.js';

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
const buttonGoSignup = section.querySelector('#go-login');
buttonGoSignup.addEventListener('click', () => {
    navigateTo('/login');
});
return section;

};
