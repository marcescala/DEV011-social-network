import {
  addPost, renderRealTime, auth, db, doc, deletePost, addLike, removeLike,
} from './index.js';

export const renderWall = (navigateTo) => {
  const section = document.createElement('section');
  const template = `
          <img class="logo" src="Images/logo-habitate.png">
          <section class="wallSection" >
          </section>
          <div class="footer">
            <button id="go-home" class="button-home"  > 
                <img src="Images/home_habitate.png" class="image-home">
            </button> 
            <button id="go-profile" class="button-home"  > 
                <img src="Images/perfil_habitate.png" class="image-home">
            </button> 
        </div>
      `;

  // Por ahora estoy creando aquí la sección de los post para poder empezar, posteriormente irá en una ventana pop up
  section.innerHTML = template;
  const wallSection = section.querySelector('.wallSection');
  const inputPost = document.createElement('input');
  inputPost.id = 'inPost';
  const postType = document.createElement('select');
  postType.id = 'select-type';
  const option1 = document.createElement('option');
  option1.value = 'receta';
  option1.text = 'receta';
  const option2 = document.createElement('option');
  option2.value = 'remedio';
  option2.text = 'remedio';
  const option3 = document.createElement('option');
  option3.value = 'habito';
  option3.text = 'hábito';
  postType.append(option1, option2, option3);
  const buttonSendPost = document.createElement('button');
  buttonSendPost.id = 'button-sendPost';
  buttonSendPost.textContent = 'Publicar';
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  wallSection.append(inputPost, postType, buttonSendPost, postSection);

  buttonSendPost.addEventListener('click', () => {
    const message = wallSection.querySelector('#inPost');
    const postTypeSel = wallSection.querySelector('#select-type');
    console.log('funciona el boton', message, postTypeSel);
    // primero vamos a autenticar que el usuario está loggeado
    auth.onAuthStateChanged((user) => {
      if (user) {
        // El usuario está autenticado, puedes acceder a sus datos
        const userID = user.uid;
        addPost(message.value, postTypeSel.value, userID);
        message.value = '';
      }
      // console.log('No hay usuario autenticado.');
    });
  });

  renderRealTime((querySnapshot) => {
    postSection.textContent = '';
    querySnapshot.forEach((element) => {
      const docID = element.id;
      /* console.log(doc.id);
      console.log(doc.data()); */
      const post = document.createElement('div');
      post.className = 'post-style';
      const postMessage = document.createElement('p');
      postMessage.innerHTML = element.data().message;
      const btnEdit = document.createElement('button');
      btnEdit.id = 'button-edit';
      btnEdit.className = 'button-edit';
      btnEdit.innerText = 'Editar';
      const btnDelete = document.createElement('button');
      btnDelete.id = 'button-delete';
      btnDelete.className = 'button-delete';
      btnDelete.innerText = 'Eliminar';
      const btnLike = document.createElement('button');
      btnLike.id = 'button-like';
      btnLike.className = 'button-like';
      const apple = document.createElement('img');
      apple.src = 'Images/manzana_like.png';
      apple.className = 'img-like';
      btnLike.append(apple);
      post.append(postMessage, btnEdit, btnDelete, btnLike);
      postSection.append(post);
      btnDelete.addEventListener('click', () => {
        deletePost(docID);
      });
      btnLike.addEventListener('click', () => {
        addLike(docID);
      });
    });
  });

  // Agrega el evento para direccionar al home de nuevo
  const buttonHome = section.querySelector('#go-home');
  buttonHome.addEventListener('click', () => {
    navigateTo('/home');
  });
  return section;
};
