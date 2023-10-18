export const renderWelcome = (navigateTo) => {
  const section = document.createElement('section');
  let template = `
      <img>
      <h1 class='welcome'> Bienvenida </h1>
      <button id='go-login' class='button-index'> Continuar </button>
  `;

  section.innerHTML = template;
  
  const buttonGoLogin = section.querySelector('#go-login');
  console.log(buttonGoLogin);
  buttonGoLogin.addEventListener('click', () => {
      navigateTo('/login');
  });
  return section;
};