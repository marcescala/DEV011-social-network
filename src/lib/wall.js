export const renderWall = (navigateTo) => {
  const section = document.createElement('section');
  const template = `
          <img class="logo" src="Images/logo-habitate.png">
          <h1 class="welcome"> Aquí van los post </h1>
          <div class="footer">
            <button id="go-home" class="button-home" name="datos-curiosos" > 
                <img src="Images/home_habitate.png" class="image-home">
            </button> 
            <button id="go-profile" class="button-home" name="datos-curiosos" > 
                <img src="Images/perfil_habitate.png" class="image-home">
            </button> 
        </div>
      `;

  section.innerHTML = template;

  const buttonHome = section.querySelector('#go-home');
  buttonHome.addEventListener('click', () => {
    navigateTo('/home');
  });
  return section;
};
