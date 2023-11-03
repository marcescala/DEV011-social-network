import {
  addPost, renderRealTime, deletePost, addLike, authUser, editPost,
} from './index.js';

export const renderWall = (navigateTo) => {
  const section = document.createElement('section');
  const template = `
        <body class="wallbody">
          <img class="logo-wall" src="Images/logo_habitate_largo.png">
          <section class="wallSectionInput" >
          </section>
          <section class="wallSection" >
          </section>
        </body>
        <footer class="footer">
            <button id="go-home" class="button-home"  > 
                <img src="Images/home_habitate.png" class="image-home">
            </button> 
            <button id="go-profile" class="button-home"  > 
                <img src="Images/perfil_habitate.png" class="image-home">
            </button> 
        </footer>
      `;

  // Por ahora estoy creando aquí la sección de los post para poder empezar, posteriormente irá en una ventana pop up
  section.innerHTML = template;
  const wallSectionInput = section.querySelector('.wallSectionInput');
  const wallSection = section.querySelector('.wallSection');
  const inputPost = document.createElement('input');
  inputPost.id = 'inPost';
  inputPost.className = 'inPost';
  inputPost.placeholder = 'Déjanos tu recomendación';
  const postType = document.createElement('select');
  postType.id = 'select-type';
  postType.className = 'select-type';
  const option1 = document.createElement('option');
  option1.value = 'receta';
  option1.text = 'Receta';
  const option2 = document.createElement('option');
  option2.value = 'remedio';
  option2.text = 'Remedio';
  const option3 = document.createElement('option');
  option3.value = 'habito';
  option3.text = 'Hábito';
  postType.append(option1, option2, option3);
  const buttonSendPost = document.createElement('button');
  buttonSendPost.id = 'button-sendPost';
  buttonSendPost.className = 'button-sendPost';
  buttonSendPost.textContent = 'Publicar';
  const postSection = document.createElement('article');
  postSection.className = 'post-section';
  wallSectionInput.append(inputPost);
  wallSection.append(postType, buttonSendPost, postSection);

  const originalEventListener = () => {
    const message = wallSectionInput.querySelector('#inPost');
    const postTypeSel = wallSection.querySelector('#select-type');
    console.log('funciona el boton', message, postTypeSel);
    const user = authUser();
    const userID = user.uid;
    addPost(message.value, postTypeSel.value, userID);
    message.value = '';
  };
  buttonSendPost.addEventListener('click', originalEventListener);

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
      const counter = document.createElement('span');
      counter.innerText = element.data().likes.length;
      btnLike.append(apple);
      post.append(postMessage, btnEdit, btnDelete, btnLike, counter);
      postSection.append(post);
      btnDelete.addEventListener('click', () => {
        deletePost(docID);
      });
      btnLike.addEventListener('click', () => {
        const user = authUser();
        addLike(docID, user.uid);
      });
      btnEdit.addEventListener('click', () => {
        wallSectionInput.querySelector('#inPost').value = element.data().message;
        buttonSendPost.textContent = 'Guardar';
        buttonSendPost.removeEventListener('click', originalEventListener);
        const buttonEditPost = () => {
          const message = wallSectionInput.querySelector('#inPost');
          const postTypeSel = wallSection.querySelector('#select-type');
          editPost(docID, message.value, postTypeSel.value);
          message.value = '';
          buttonSendPost.removeEventListener('click', buttonEditPost);
          buttonSendPost.addEventListener('click', originalEventListener);
          buttonSendPost.textContent = 'Publicar';
        };
        buttonSendPost.addEventListener('click', buttonEditPost);
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
