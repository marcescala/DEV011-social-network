/** 
 * @jest-environment jsdom
 */

import signup from '../../lib/signup.js';

describe('signup', () => {
    test('is a function', () => {
        expect(typeof signup).toBe('function');
    })
    test('have a button', () => {
        const DOM = document.createElement('section');
        DOM.append(signup());
        const haveAButton = DOM.querySelector('return');
        expect(haveAButton).toBe(button)
    })
})
    