

    document.getElementById('myForm').addEventListener
    ('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Fetching form inputs
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');
    
    // Fetching error spans
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
  
    // Resetting previous errors
    usernameError.textContent = '';
    passwordError.textContent = '';
  
    // Validation
    var isValid = true;
  
    if (usernameInput.value.trim() === '') {
      usernameError.textContent = 'Username is required';
      isValid = false;
    }
  
    if (passwordInput.value.trim() === '') {
      passwordError.textContent = 'Password is required';
      isValid = false;
    }
  
    if (isValid) {
      // If all inputs are valid, you can submit the form here
      alert('Form submitted successfully!');
    }
  });
  