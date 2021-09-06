const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function handleSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

loginForm.addEventListener("submit", handleSubmit);

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    greeting.classList.add(HIDDEN_CLASS);
    loginForm.addEventListener("submit", handleSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASS);
    paintGreeting(savedName);
}



