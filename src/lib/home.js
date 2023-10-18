export const renderHome = (navigateTo) => {

    const section = document.createElement('section');

    let template = `

        <h1> Habitate </h1>
        <h2> ¿Qué quieres ver?</h2>
        <div class="buttons">
            <button name="recetas" > 
                <img src="" >
                <span> Recetas </span>
            </button>  
            <button name="remedios" > 
                <img src="" >
                <span> Remedios Caseros </span>
            </button>
            <button name="habitos" > 
                <img src="" >
                <span> Hábitos Saludables </span>
            </button>
            <button name="datos-curiosos" > 
                <img src="" >
                <span> Datos Curiosos </span>
            </button> 
        </div>
        <div class="footer">
            <img alt="home">
            <img alt="peril">

        </div>
    `;
    section.innerHTML = template;
    return section;
  };