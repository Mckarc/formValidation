const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');

togglePassword.addEventListener('click', function(e){
    const type =  password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('bi-eye');
})

toggleConfirmPassword.addEventListener('click', function(e){
    const confirmType = confirmPassword.getAttribute('type') === 'password' ? 'text' : 'password';
    confirmPassword.setAttribute('type', confirmType);
    this.classList.toggle('bi-eye');
});