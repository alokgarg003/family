function submitForm() {
  const username = document.getElementById('username').value;
  const familyName = document.getElementById('familyName').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;

  // Here you can perform further processing like sending data to the server
  // For example, you can use fetch API to send data to a backend endpoint

  // Example:
  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      familyName,
      password,
      email,
      dob,
      address,
      gender,
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Handle response from the server
    console.log(data);
    // Optionally, you can redirect the user to another page or show a success message
  })
  .catch(error => {
    console.error('Error:', error);
    // Handle error
  });
}
