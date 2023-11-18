document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signupForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Create FormData object from the form
            var formData = new FormData(form);

            // Send the form data to the server using Fetch API
            fetch('/submit', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                // Handle response here
                console.log(data);
                alert('Signed up successfully!');

                // Reset form and hide modal (if using Bootstrap)
                form.reset();
                $('#signupModal').modal('hide');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while signing up.');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var formData = new FormData(loginForm);

            fetch('/login', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                alert(data);
                loginForm.reset();
                $('#loginModal').modal('hide');
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Login failed.');
            });
        });
    }
});
