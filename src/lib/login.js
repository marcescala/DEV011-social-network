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
    section.innerHTML = template;
    const buttonSubmit = section.querySelector('#submit');
    buttonSubmit.addEventListener('click', () => {
        navigateTo('/home');
    });
    const buttonGoSignup = section.querySelector('#go-signup');
    buttonGoSignup.addEventListener('click', () => {
        navigateTo('/signup');
    });

    return section;
};