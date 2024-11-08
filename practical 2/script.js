document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let user = {
        name: name,
        email: email,
        password: password
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];  
    users.push(user);  
    localStorage.setItem('users', JSON.stringify(users));  
    document.getElementById('response').textContent = 'Registration Successful!';    
    window.location.href = 'http://127.0.0.1:5500/success.html';  
});
