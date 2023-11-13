/**
 * @jest-environment jsdom
 */

// import { signOut } from 'firebase/auth';
import { renderSignup } from '../src/lib/signup.js';
import { renderWall } from '../src/lib/wall.js';
// import { addLike } from '../src/lib/index.js';
import * as index from '../src/lib/index.js';

// jest.mock('../src/lib/index.js', () => (
//   {
//     submitNewUserInfo: jest.fn(() => Promise.resolve()),
//   }
// ));

// jest.mock('../src/lib/index.js', () => (
//   {
//     addPost: jest.fn(() => Promise.resolve()),
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

    buttonSignIn.click();
    setTimeout(() => {
      expect(navigateTo).toHaveBeenLastCalledWith('/home');

      done();
    });
  });

  test('llama el correo y la contraseña', () => {
    jest.spyOn(index, 'submitNewUserInfo').mockImplementation(() => Promise.resolve('prueba@prueba.co'));
    const DOM = document.createElement('section');

    const navigateTo = jest.fn();

    DOM.append(renderSignup(navigateTo));
    const email = DOM.querySelector('#email');
    const password = DOM.querySelector('#pass');
    email.value = 'prueba@prueba.co';
    password.value = '123456';
    index.submitNewUserInfo(email.value, password.value);
    expect(index.submitNewUserInfo).toHaveBeenCalledWith('prueba@prueba.co', '123456');
  });
});

// describe('addPost', () => {
//   jest.spyOn(index, 'addPost').mockImplementation(() => Promise.resolve());
//   test('debería agregar un nuevo post', async () => {
//     const expectedPost = {
//       title: 'Título del post',
//       message: 'Mensaje del post',
//       postType: 'receta',
//       userID: '123456789',
//       userEmail: 'usuario@example.com',
//     };

//     const result = await addPost(expectedPost.title, expectedPost.message, expectedPost.postType, expectedPost.userID, expectedPost.userEmail);

//     expect(result).toEqual(expectedPost);
//   });
// });

describe('button-sendPost', () => {
  test('es un boton', () => {
    const DOM = document.createElement('section');
    DOM.append(renderWall());
    const haveAButton = DOM.querySelector('#button-sendPost');
    expect(haveAButton).not.toBe(undefined);
  });
});
