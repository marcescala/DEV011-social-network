
export const login = () => {
    const section = document.createElement('section');
    const logo = document.createElement('img')
    const title = document.createElement('title');
    const buttonReturn = document.createElement('button');
    const form = document.createElement('form');
    const inputEmail = document.createElement('input');
    const inputPass = document.createElement('input');
    const buttonLogin = document.createElement('button');
    const logoGoogle = document.createElement('img')
  
    inputEmail.placeholder = 'Write email';
    inputPass.placeholder = 'pass';
  
    title.textContent = 'Login';
    buttonLogin.textContent = '';
  
    buttonReturn.textContent = 'Return to home';
  
    form.append(inputEmail, inputPass, buttonLogin);
    section.append(logo, title, form, buttonReturn);
  
    return section;
  }
  
  