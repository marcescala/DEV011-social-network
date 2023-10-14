// aqui exportaras las funciones que necesites

export const renderWelcome = () => {
  const section = document.createElement('section');
  let template = `
      <img>
      <h1> Bienvenida </h1>
      <button> Seguir </button>
  `;

  section.append(template);
  return section;

};

//Página de Bienvenida
function home(navigateTo) {
  const section = document.createElement('section');
  const title = document.createElement('h2');
  const button = document.createElement('button');

  button.textContent = 'login';
  title.textContent = '';

  section.append(title, button);
  return section;
}

export default home;
