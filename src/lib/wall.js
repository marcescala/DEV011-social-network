import {
  addPost, renderRealTime, deletePost, addLike, authUser, editPost, onAuthStateChanged, auth, uploadFile,
} from './index.js';

export const renderWall = (navigateTo) => {
  const section = document.createElement('section');
  const template = `
        <header class="wallbody">
          <img class="logo-wall" src="Images/logo_habitate_largo.png">
          <button id="prueba"> Prueba </button>
        </header>
        <section class="log-display">
          <body>
            <div class="wallSectionInput" >
            </div>
            <div class="wallSection" >
            </div>
          </body>
          <footer class="footer">
            <button id="go-home" class="button-home"  > 
              <img src="Images/home_habitate.png" class="image-home">
            </button> 
            <button id="go-profile" class="button-home"  > 
              <img src="Images/perfil_habitate.png" class="image-home">
            </button> 
          </footer>
        </section> 
      `;

  // Por ahora estoy creando aquí la sección de los post para poder empezar, posteriormente irá en una ventana pop up
  section.innerHTML = template;

  auth.onAuthStateChanged((user) => {
    console.log(user);
    const displaySection = section.querySelector('.log-display');
    if (user) {
      displaySection.style.display = 'block';
    } else {
      displaySection.style.display = 'none';
      const displayNoLog = document.createElement('div');
      displayNoLog.className = 'log-out-display';
      // displayNoLog.style.display = 'block';
      const messageNoLog = document.createElement('p');
      messageNoLog.innerText = 'Es necesario que inicies sesión para ver el contenido';
      const buttonGoLogin = document.createElement('button');
      buttonGoLogin.innerText = 'Inicia Sesión';
      buttonGoLogin.id = 'go-login';
      buttonGoLogin.className = 'button-second';
      displayNoLog.append(messageNoLog, buttonGoLogin);
      const header = section.querySelector('.wallbody');
      header.append(displayNoLog);
      buttonGoLogin.addEventListener('click', () => {
        navigateTo('/login');
      });
    }
  });

  const wallSectionInput = section.querySelector('.wallSectionInput');
  const wallSection = section.querySelector('.wallSection');
  const inputTitle = document.createElement('input');
  inputTitle.id = 'input-title';
  inputTitle.className = 'input-title';
  inputTitle.placeholder = 'Título de tu recomendación';
  const inputPost = document.createElement('input');
  inputPost.id = 'inPost';
  inputPost.className = 'inPost';
  inputPost.placeholder = 'Déjanos tu recomendación';
  const inputImage = document.createElement('label');
  inputImage.textContent = 'Agrega una imagen';
  inputImage.className = 'btn-img-post';
  inputImage.setAttribute('for', 'input-file');
  const inputFile = document.createElement('input');
  inputFile.type = 'file';
  inputFile.id = 'input-file';
  inputFile.className = 'input-file';
  inputFile.accept = 'image/.';
  inputFile.style.display = 'none';
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
  wallSectionInput.append(inputTitle, inputPost, inputFile);
  wallSection.append(inputImage, postType, buttonSendPost, postSection);

  buttonSendPost.addEventListener('click', () => {
    const title = wallSectionInput.querySelector('#input-title');
    const message = wallSectionInput.querySelector('#inPost');
    const postTypeSel = wallSection.querySelector('#select-type');
    const imgInput = wallSectionInput.querySelector('#input-file');
    console.log(imgInput);
    const imageName = imgInput.files[0];
    console.log(imageName);
    // Hasta aquí todo bien, toca probar uploadFile
    const image = uploadFile(imageName);
    console.log(image);
    if (message.value !== '') {
      const user = authUser();
      const userID = user.uid;
      const userEmail = user.email;
      addPost(title.value, message.value, postTypeSel.value, image, userID, userEmail);
      message.value = '';
    } else {
      alert('El mensaje no puede estar vacío');
    }
  });

  renderRealTime((querySnapshot) => {
    postSection.textContent = '';
    querySnapshot.forEach((element) => {
      const docID = element.id;
      /* console.log(doc.id);
      console.log(doc.data()); */
      const post = document.createElement('div');
      post.className = 'post-style';
      post.id = 'post';
      const userEmail = document.createElement('p');
      userEmail.className = 'user-email';
      userEmail.innerText = element.data().email;
      const messageContainer = document.createElement('div');
      messageContainer.className = 'messageContainer';
      const postTitle = document.createElement('p');
      postTitle.innerHTML = element.data().title;
      const postMessage = document.createElement('p');
      postMessage.innerHTML = element.data().message;
      const imgPost = document.createElement('img');
      imgPost.src = element.data().image;
      imgPost.className = 'img-post';
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
      apple.style.opacity = 0.5;
      const counter = document.createElement('span');
      counter.innerText = element.data().likes.length;
      btnLike.append(apple);
      messageContainer.append(postTitle, postMessage, imgPost);
      post.append(userEmail, messageContainer, btnEdit, btnDelete, btnLike, counter);
      postSection.append(post);
      btnDelete.addEventListener('click', () => {
        const userID = authUser().uid;
        const postUser = element.data().user;
        console.log(userID, postUser);
        if (postUser === userID) {
          const confirmDelete = confirm('¿Seguro que deseas borrar este post?');
          if (confirmDelete) {
            deletePost(docID);
          }
        } else {
          alert('Solo el autor original puede eliminar el post');
        }
      });
      btnLike.addEventListener('click', () => {
        const user = authUser();
        addLike(docID, user.uid, apple);
        apple.style.opacity = 1;
      });
      btnEdit.addEventListener('click', () => {
        const userID = authUser().uid;
        const postUser = element.data().user;
        if (postUser === userID) {
          const createInput = () => {
            const inputEdit = document.createElement('input');
            inputEdit.type = 'text';
            inputEdit.className = 'input-edit';
            inputEdit.id = 'input-edit';
            inputEdit.value = element.data().message;
            messageContainer.insertBefore(inputEdit, postMessage);
            messageContainer.removeChild(postMessage);
          };
          const buttonEditPost = () => {
            const inputEdit = wallSection.querySelector('#input-edit');
            editPost(docID, inputEdit.value);
            postMessage.innerHTML = element.data().message;
            messageContainer.insertBefore(postMessage, inputEdit);
            messageContainer.removeChild(inputEdit);
            btnEdit.textContent = 'Editar';
          };
          if (btnEdit.textContent === 'Editar') {
            createInput();
            btnEdit.textContent = 'Guardar';
            btnEdit.removeEventListener('click', buttonEditPost);
            btnEdit.addEventListener('click', createInput);
          } else {
            buttonEditPost();
          }
        } else {
          alert('Solo el autor original puede editar el post');
        }
      });
    });
  });

  // Agrega el evento para direccionar al home de nuevo
  const buttonHome = section.querySelector('#go-home');
  buttonHome.addEventListener('click', () => {
    navigateTo('/home');
  });

  // Prueba
  const btnPrueba = section.querySelector('#prueba');
  btnPrueba.addEventListener('click', () => {
    const url = uploadFile();

  });
  return section;
};
