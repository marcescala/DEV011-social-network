/**
 * @jest-environment jsdom
 */
import { renderSignup } from '../src/lib/signup.js';
import * as auth from '../src/lib/index.js';

describe('renderSignup', () => {
  test(' es una función', () => {
    expect(typeof renderSignup).toBe('function');
  });
});
test('have a button', () => {
  const DOM = document.createElement('section');
  DOM.append(renderSignup());
  const haveAButton = DOM.querySelector('#go-login');
  expect(haveAButton).not.toBe(undefined);
});
test('después de dar click botón Go login llamar función NavigateTo', () => {
  const DOM = document.createElement('section');
  const navigateTo = jest.fn();
  DOM.append(renderSignup(navigateTo));
  const buttonGo = DOM.querySelector('#go-login');
  buttonGo.click();
  expect(navigateTo).toHaveBeenCalledTimes(1);
});
test('snapshot of signup', () => {
  const DOM = document.createElement('section');
  DOM.append(renderSignup());
  expect(DOM).toMatchSnapshot();
});
test('después de dar click botón Go Signup llamar función NavigateTo', () => {
  const DOM = document.createElement('section');
  const navigateTo = jest.fn();
  DOM.append(renderSignup(navigateTo));
  const buttonGo = DOM.querySelector('#go-login');
  buttonGo.click();
  expect(navigateTo).toHaveBeenLastCalledWith('/login');
});
describe('Botón Iniciar Sesión', () => {
  test('Test para el botón de inicio de sesión', () => {
    jest.spyOn(auth, 'submitNewUserInfo').mockImplementation(() => Promise.resolve({ message: 'success', email: 'les5@ejemplo.com' }));
    const DOM = document.createElement('section');
    DOM.append(renderSignup());
    const email = DOM.querySelector('#email');
    const password = DOM.querySelector('#pass');
    email.value = 'les5@ejemplo.com';
    password.value = '123456';
    const buttonSignup = DOM.querySelector('#submit-sign-in');
    buttonSignup.click();
    expect(auth.submitNewUserInfo).toHaveBeenCalledTimes(1);
    expect(auth.submitNewUserInfo).toHaveBeenLastCalledWith('les5@ejemplo.com', '123456');
  });
});
