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

describe('button Edit', () => {
  test('después de llamar boton editar debe actualizarse el mensaje', async () => {
    const spyEditPost = jest.spyOn(index, 'editPost').mockImplementation(() => Promise.resolve({ message: 'success' }));
    const DOM = document.createElement('section');
    DOM.append(renderWall());
    const btnEdit = DOM.querySelector('#button-edit');

    const createInput = jest.fn();

    // Simula la llamada al botón editar
    btnEdit.click();

    // Espera a que se resuelva la promesa (simulación de la función editPost)
    await Promise.resolve();

    // Asegúrate de que la función createInput haya sido llamada con los argumentos correctos
    expect(createInput).toHaveBeenCalledWith(1);

    // Restaura la implementación original de editPost
    spyEditPost.mockRestore();
  });
});

test('have a button ', () => {
  const DOM = document.createElement('section');
  DOM.append(renderWall());
  const haveAButton = DOM.querySelector('#button-edit');
  expect(haveAButton).not.toBe(undefined);
});

/* describe('button Edit', (done) => {
  test('despues de llamar boton editar debe actualizarse el mensaje', () => {
    jest.spyOn(index, 'editPost').mockImplementation(() => Promise.resolve({ message: 'success' }));
    const DOM = document.createElement('section');
    DOM.append(renderWall());
    const btnEdit = DOM.querySelector('#button-edit');

    const createInput = jest.fn();

    btnEdit.click();
    setTimeout(() => {
      expect(createInput).toHaveBeenLastCalledWith(1);
      done();
    });
  });
}); */
/* describe('addLike', async () => {
  test('agrega un like correctamente', async () => {
    const docRefMock = doc();
    const getDocMock = jest.fn();
    const updateDocMock = jest.fn();
    const DOM = document.createElement('section');
    DOM.append(wall(mock));

    getDocMock.mockResolvedValue({
      exists: jest.fn().mockReturnValue(true),
      data: jest.fn().mockReturnValue({ likes: ['userID1', 'userID2'] }),
    });

    doc.mockReturnValue(docRefMock);
    getDoc.mockImplementation(getDocMock);
    updateDoc.mockImplementation(updateDocMock);

    // Ejecuta tu función con valores de prueba
    await addLike('id', 'userID');

    // Verifica que las funciones se hayan llamado con los argumentos correctos
    expect(doc).toHaveBeenCalledWith(docRefMock, 'id', 'userID');
    expect(getDocMock).toHaveBeenCalledWith(docRefMock);
    expect(updateDocMock).toHaveBeenCalledWith(docRefMock, {
      likes: arrayUnion('userID3'),
    });
  });
}); */
