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
