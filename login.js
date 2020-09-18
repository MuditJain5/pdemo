function login(){

    document.getElementById("login-form").classList.add("form-display");
    document.getElementById("login-btn").classList.add("btn-dark");
    document.getElementById("login-btn").classList.remove("btn-light");
    document.getElementById("login-form").classList.remove("form-hide");
    document.getElementById("signup-form").classList.add("form-hide");
    document.getElementById("signup-form").classList.remove("form-display");
    document.getElementById("signup-btn").classList.remove("btn-dark");
    document.getElementById("signup-btn").classList.add("btn-light");

}

function register(){
    
    document.getElementById("login-btn").classList.remove("btn-dark");
    document.getElementById("login-btn").classList.add("btn-light");
    document.getElementById("login-form").classList.remove("form-display");
    document.getElementById("login-form").classList.add("form-hide");
    document.getElementById("signup-form").classList.remove("form-hide");
    document.getElementById("signup-form").classList.add("form-display");
    document.getElementById("signup-btn").classList.add("btn-dark");
    document.getElementById("signup-btn").classList.remove("btn-light");

}