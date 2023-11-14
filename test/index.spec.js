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

describe('renderWall', () => {
  test('have a button ', () => {
    const DOM = document.createElement('section');
    DOM.append(renderWall());
    const haveAButton = DOM.querySelector('#button-edit');
    expect(haveAButton).not.toBe(undefined);
  });
  /* test('después de llamar boton editar debe actualizarse el mensaje', async () => {
    const spyEditPost = jest.spyOn(index, 'editPost').mockImplementation(() => Promise.resolve({ message: 'success' }));

    const DOM = document.createElement('section');

    const navigateTo = jest.fn();

    // Restaura la implementación original de editPost
    spyEditPost.mockRestore();
  }); */
});

/* describe('button Edit', (done) => {
  test('despues de llamar boton editar debe actualizarse el mensaje', () => {
    jest.spyOn(index, 'editPost').mockImplementation(() => Promise.resolve({ message: 'success' }));
    const DOM = document.createElement('section');
    DOM.append(renderWall());
    const haveAButton = DOM.querySelector('#button-sendPost');
    expect(haveAButton).not.toBe(undefined);
  });
});
