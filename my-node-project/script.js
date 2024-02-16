const registerForm = document.querySelector('.sign-up form');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(registerForm);
    const userData = {
        name: formData.get('Name'),
        email: formData.get('Email'),
        password: formData.get('Password')
    };

    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (response.ok) {
            const message = await response.text();
            console.log(message);
            // Handle successful signup here (e.g., redirect to a success page)
        } else {
            console.error('Signup failed:', response.statusText);
            // Handle failed signup here (e.g., display error message to the user)
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle unexpected errors here
    }
});

// Add the following code:

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
