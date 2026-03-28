const btnLogin = document.getElementById('btn-login');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

btnLogin.addEventListener('click', function() {
  let isValid = true;


  if (!emailInput.value.includes('@')) {
    emailError.textContent = 'Email должен содержать @';
    emailInput.parentElement.classList.add('has-error');
    isValid = false;
  } else {
    emailError.textContent = '';
    emailInput.parentElement.classList.remove('has-error');
  }

  
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Пароль минимум 6 символов';
    passwordInput.parentElement.classList.add('has-error');
    isValid = false;
  } else {
    passwordError.textContent = '';
    passwordInput.parentElement.classList.remove('has-error');
  }

 
  if (isValid) {
    btnLogin.textContent = 'Загрузка...';
    btnLogin.classList.add('loading');
    setTimeout(function() {
      btnLogin.textContent = 'Войти';
      btnLogin.classList.remove('loading');
    }, 2000);
  }
});