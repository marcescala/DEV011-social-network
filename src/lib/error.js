export const renderError = () => {
    const section = document.createElement('section');
    let template = `
        <h1> Está página no existe </h1>
        <button> Regresar al inicio </button>
    `;
  
    section.innerHTML = template;
    return section;
  
  };