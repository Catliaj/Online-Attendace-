function authenticate(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password are correct
    if (username === 'ict-sevilla 2022-2023' && password === '2022-2023') {
      // Redirect the user to the website
      window.location.href = 'https://github.com/Catliaj/Online-Attendace-/blob/4dd123700590407d2d0452954c133da7afbda5db/home.html';
    } else {
      // Display an error message
      alert('Invalid username or password');
    }
  
    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }
