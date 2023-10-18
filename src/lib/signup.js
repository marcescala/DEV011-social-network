export const renderSignup = () => {
    const section = document.createElement('section');
    const template = `
        <h1> Regístrate </h1>
        <form>
            <input name="email"> Escribe tu correo</input>
            <input name="pass">Esribe tu contraseña</input>
            <button id="submit-sign-in"> Registrarse </button>
        </form>
        <h3> Ingresa con </h3>
        <button id="sign-up" onclick="guardar()"  > 
        <img src="" >
        Continuar con Google </button>
        
    `;
section.append(template);
return section;
};