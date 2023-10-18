export const renderError = () => {
    const section = document.createElement('section');
    let template = `
        <h1>  </h1>
        <button> Volver al login </button>
    `;
  
    section.append(template);
    return section;
  
  };