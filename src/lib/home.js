export const renderHome = (navigateTo) => {
  const section = document.createElement('section');

  const template = `
    <button id="log-out" class="log-out"> Cerrar Sesión </button>
    <img class="logo" src="Images/logo_habitate_largo.png">
        <h2 class="title-home"> ¿Qué quieres ver?</h2>
        <div class="buttons">
           <div class="up">
            <button id="button-recipes" class="button-recipes" name="recetas" > 
                <img src="Images/recetas_habitate.png" class="home-images">
                <span> Recetas </span>
            </button>  
            <button id="button-remedies" class="button-remedies" name="remedios" > 
                <img src="Images/remedios_habitate.png" class="home-images">
                <span> Remedios Caseros </span>
            </button>
           </div>
           <div class="down">
            <button id="button-habits" class="button-habits" name="habitos" > 
                <img src="Images/habitos_habitate.png" class="home-images">
                <span> Hábitos Saludables </span>
            </button>
            <button id="button-curiosities" class="button-curiosities" name="datos-curiosos" > 
                <img src="Images/curiosos_habitate.png" class="home-images">
                <span> Datos Curiosos </span>
            </button> 
           </div>
        </div>
        <div class="footer">
            <img class="image-home" src="Images/home_habitate.png">
            <img class="image-perfil" src="Images/perfil_habitate.png">
        </div>
    `;
  section.innerHTML = template;

  const buttonLogOut = section.querySelector('#log-out');
  buttonLogOut.addEventListener('click', () => {
    navigateTo('/');
  });
  const buttonGoWallRecipes = section.querySelector('#button-recipes');
  buttonGoWallRecipes.addEventListener('click', () => {
    navigateTo('/wall');
  });
  const buttonGoWallRemedies = section.querySelector('#button-remedies');
  buttonGoWallRemedies.addEventListener('click', () => {
    navigateTo('/wall');
  });
  const buttonGoWallHabits = section.querySelector('#button-habits');
  buttonGoWallHabits.addEventListener('click', () => {
    navigateTo('/wall');
  });
  const buttonGoWallCuriosities = section.querySelector('#button-curiosities');
  buttonGoWallCuriosities.addEventListener('click', () => {
    navigateTo('/wall');
  });
  return section;
};
