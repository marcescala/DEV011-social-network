/**
 * @jest-environment jsdom
 */
import { renderSignup } from '../src/lib/signup.js';
import * as index from '../src/lib/index.js';
import { renderWall } from '../src/lib/wall.js';

// jest.mock('../src/lib/index.js', () => (
//   {
//     submitNewUserInfo: jest.fn(() => Promise.resolve()),
//   }
// ));

describe('renderSignup', () => {
  test(' es una función', () => {
    expect(typeof renderSignup).toBe('function');
  });
});
test('have a button login', () => {
  const DOM = document.createElement('section');
  DOM.append(renderSignup());
  const haveAButton = DOM.querySelector('#go-login');
  expect(haveAButton).not.toBe(undefined);
});
test('have a button submit-sign-in', () => {
  const DOM = document.createElement('section');
  DOM.append(renderSignup());
  const haveAButtonSignIn = DOM.querySelector('#submit-sign-in');
  expect(haveAButtonSignIn).not.toBe(undefined);
});
test('después de dar click botón Go login llamar función NavigateTo', () => {
  const DOM = document.createElement('section');
  const navigateTo = jest.fn();
  DOM.append(renderSignup(navigateTo));
  const buttonGo = DOM.querySelector('#go-login');
  buttonGo.click();
  expect(navigateTo).toHaveBeenCalledTimes(1);
});
describe('button Go', (done) => {
  test('despues de llamar boton sigunp debe ejecutarse la función submitNewUserInfo', () => {
    jest.spyOn(index, 'submitNewUserInfo').mockImplementation(() => Promise.resolve({}));
    const DOM = document.createElement('section');
    DOM.append(renderSignup());
    const buttonSignIn = DOM.querySelector('#submit-sign-in');

    const navigateTo = jest.fn();

    DOM.append(renderSignup(navigateTo));
    const email = DOM.querySelector('#email');
    const password = DOM.querySelector('#pass');
    email.value = 'prueba@prueba.co';
    password.value = '123456';

    buttonSignIn.click();
    setTimeout(() => {
      expect(navigateTo).toHaveBeenLastCalledWith('/home');
      done();
    });
  });
});

/* describe('renderWall', () => {
  test('verifica que se agregue un post', async () => {
    const mock = jest.fn();
    const DOM = document.createElement('section');
    DOM.append(renderWall(mock));

    //tenemos que simular un archivo

    // toca traer todos los elementos del post: title, message, postType, image, userID, userEmail
    const title = DOM.querySelector('#input-title');
    const message = DOM.querySelector('#inPost');
    const postType = DOM.querySelector('#select-type');
    const image = DOM.querySelector('#input-file');

    title.value = 'Titulo';
    message.value = 'Este es el mensaje';
    postType.value = 'receta';
    // se pretende que se elige el archivo
    const userID = 'iMoLjxbUuKWTnvhHjBN2aKLOnUG3';
    const userEmail = 'les@ejemplo.com';

    const btnSendPost = DOM.querySelector('#button-sendPost');
    btnSendPost.click();
    const post = await index.addPost(title.value, message.value, postType.value, image.files[0], userID, userEmail);
    expect(post).toBe(true);
  });
}); */

