// Select all IDs from the from
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');
const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector('#signUp');

// Prevent the form from submitting
form.addEventListener('submit', function(event) {
    event.preventDefault();
})

// develop utility functions
// field is required
const isRequired = value => value === '' ? false : true;
// length of a field is between min and max
const isBetween = (length, min, max) => length < min || length > max ? false : true;
// email is valid 
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
// password is strong
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


// Functions that show the error/ success message
const showError = (input, message) => {
    //get the form-field element 
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};
const showSuccess = (input) => {
    // get the form field element
    const formField = input.parentElement;
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
};

// Input field validating function

// Validate the username field
const checkUsername = () => {
    let valid = false;
    const min = 3;
    const max = 25;
    const usernameEl = username.value.trim();

    if (!isRequired(usernameEl)){
        showError(username, 'Username cannot be blank');
    }else if (!isBetween(usernameEl.length, min, max)){
        showError(username, `Username must be between ${min} and ${max}`)
    }else {
        showSuccess(username);
        valid = true;
    }
    return valid;
}



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

// function isRequired(value){
//     return value ===''?false:true;
// }

// console.log(isRequired('dadfsfg'))