const registerForm = document.getElementsByClassName('register-container')[0]
const loginForm = document.getElementsByClassName('login-container')[0]
const loginBtn = document.getElementById('loginBtn')
const registerBtn = document.getElementById('registerBtn')
const title = document.getElementById('title')
const username = document.getElementById('username')
const formLink = document.getElementsByClassName('form-link')[0]

// ----------- First Method ----------- 
// loginBtn.addEventListener('click', () => {
//     registerForm.classList.add('hidden')
//     loginForm.classList.remove('hidden')
// })

// registerBtn.addEventListener('click', () => {
//     loginForm.classList.add('hidden')
//     registerForm.classList.remove('hidden')
// })

// ----------- Second Method -----------

// loginBtn.addEventListener('click', () => {
//     title.textContent = "Login"
//     username.style.display = 'none'
//     formLink.innerHTML = `<button type="button" class="btn-outline" id="registerBtn">Don't have an account? Sign Up</button>`

// })

// formLink.addEventListener('click', (e) => {
//     if (e.target.id === 'registerBtn') {
//         title.textContent = "Sign"
//         username.style.display = 'block'
//         formLink.innerHTML = `<p class="form-link" id="loginBtn">Already have an account? Login</p>`
//     }
// })
