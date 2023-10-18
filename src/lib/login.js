export const renderLogin = (navigateTo) => {
    const section = document.createElement('section');
    const template = `
        <img>
        <form>
            <input name="email" placeholder="Escribe tu correo"> </input>
            <input name="pass" placeholder="Esribe tu contraseña"></input>
            <button id="submit" class="button-index"> Inicia sesión </button>
        </form>
        <button id="go-google" class="button-second"> Ingresar con Google </button>
        <div>
            <span> ¿No tienes cuenta? </span>
            <button id="go-signup" class="button-third"> Regístrate </button>
        </div>
    `;
section.innerHTML= template;
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

