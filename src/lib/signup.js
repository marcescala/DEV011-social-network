export const renderSignup = (navigateTo) => {
    const section = document.createElement('section');
    const template = `
        <h3> Regístrate </h3>
        <form>
            <input name="email" placeholder="Escribe tu correo"></input>
            <input name="pass" placeholder="Esribe tu contraseña"></input>
            <button id="submit-sign-in" class="button-index"> Regístrarse </button>
        </form>
        <button id="sign-in" class="button-second"> Registrate con Google </button>
        <div>
            <span> ¿Ya tienes cuenta? </span>
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