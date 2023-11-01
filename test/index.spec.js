/**
 * @jest-environment jsdom
 */
import { renderSignup } from '../src/lib/signup.js';

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
