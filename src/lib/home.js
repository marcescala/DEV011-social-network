
export const home = (navigateTo) => {
    const section = document.createElement('section');
    let template = `
        <img>
        <h1> Bienvenida </h1>
        <button> Seguir </button>
    `;
    section.innerHTML = template; 

  const buttonLog = section.querySelector('button'); 
  buttonLog.addEventListener('click', () => {
    navigateTo('/login');
  });
  
   
    return section;
  
  };
  