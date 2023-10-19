export const renderHome = (navigateTo) => {

    const section = document.createElement('section');

    let template = `
    <img class="logo" src="Images/logo-habitate.png">
        <h2 class="title-home"> ¿Qué quieres ver?</h2>
        <div class="buttons">
           <div class="up">
            <button class="button-recipes" name="recetas" > 
                <img src="" >
                <span> Recetas </span>
            </button>  
            <button class="button-remedies" name="remedios" > 
                <img src="" >
                <span> Remedios Caseros </span>
            </button>
           </div>
           <div class="down">
            <button class="button-habits" name="habitos" > 
                <img src="" >
                <span> Hábitos Saludables </span>
            </button>
            <button class="button-curiosities" name="datos-curiosos" > 
                <img src="" >
                <span> Datos Curiosos </span>
            </button> 
           </div>
        </div>
        <div class="footer">
            <img class="image-home" src="Images/image-home.png">
            <img class="image-perfil" src="Images/image-perfil.png">

        </div>
    `;
    section.innerHTML = template;
    return section;
};