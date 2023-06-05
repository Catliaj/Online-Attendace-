function authenticate(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the username and password from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Check if the username and password are correct
    if (username === 'ict-sevilla 2022-2023' && password === '2022-2023') {
      // Redirect the user to the website
      window.location.href = 'C:\Users\Welcome2022\Desktop\2 weeks coding\Home\home.html';
    } else {
      // Display an error message
      alert('Invalid username or password');
    }
  
    // Clear the form fields
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  }