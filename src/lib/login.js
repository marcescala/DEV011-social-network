export const login = () => {
    const section = document.createElement('section');
    const template = `
        <img>
        <form>
            <input name="email" placeholder="Escribe tu correo"> </input>
            <input name="pass" placeholder="Esribe tu contraseña"></input>
            <button id="submit"> Ingresar </button>
        </form>
        <h3> Regístrate</h3>
        <button name="sign-in"> Ok </button>
        <span> Continua con </span>
        <img>
    `;
    section.innerHTML = template;
    
return section;
};