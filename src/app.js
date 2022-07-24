import { signIn } from "./auth/signIn";
import { signUp } from "./auth/signUp";
import { Form } from "./components/form";
import {render} from './todo/index'

import { sendPasswordResetEmail } from "./auth/sendPasswordResetEmail";

import { makeAuthorizedRequest } from "./auth/makeAuthorizedRequest";
import { checkIfUserIsLoggedIn } from "./auth/checkIfUserIsLoggedIn";
//sigIn
const renderFormSignIn = () => {
  const form = new Form("Sign In", "sign-in", "resultSignIn");
  document.querySelector("#root").appendChild(form.render());
  eventSubmit();
};

const formLogin = (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  signIn(email, password).then((res) => {
    if (res.error) {
      document.querySelector(".resultSignIn").innerHTML = res.error.message;
    } else {
      document.querySelector(
        ".resultSignIn"
      ).innerHTML = `LOGGED IN : ${res.email.split("@")[0].toUpperCase()}`;
      localStorage.setItem("token", res.idToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      clearForm(e.target);
      document.querySelector('.info').innerHTML="User is logged in"
    }
  });
};

const eventSubmit = () => {
  document.querySelector("#sign-in").addEventListener("submit", formLogin);
};

//signUp
const renderFormSignUp = () => {
  const form = new Form("Sign Up", "sign-up", "resultSignUp");
  document.querySelector("#root").appendChild(form.render());
  eventSave();
};

const formSignUp = (e) => {
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;
  signUp(email, password).then((res) => {
    if (res.error) {
      document.querySelector(".resultSignUp").innerHTML = res.error.message;
    } else {
      document.querySelector(
        ".resultSignUp"
      ).innerHTML = `SIGNED UP : ${res.email.split("@")[0].toUpperCase()};`;
      clearForm(e.target);
    }
  });
};

const eventSave = () => {
  document.querySelector("#sign-up").addEventListener("submit", formSignUp);
};
//clear Form
const clearForm = (form) => {
  form.reset();
};
//logout
const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  document.querySelector("#root").innerHTML = "";
  document.querySelector("#root").classList.remove("todo");
  initializeApp();
  document.querySelector(".resultSignIn").innerHTML = `LOGGED OUT`;
  document.querySelector(".resultSignUp").innerHTML = `SIGNED UP`;
  document.querySelector('.info').innerHTML="User is not logged in"
};

const eventLogout = () => {
  document.querySelector("#btnLogout").addEventListener("click", logout);
};

//reset password
const resetPassword = () => {
  const email = prompt("Enter your email");
  sendPasswordResetEmail(email).then((res) => {
    if (res.error) {
      document.querySelector(".resultSignIn").innerHTML = res.error.message;
    } else {
      document.querySelector(".resultSignIn").innerHTML = `Email sent`;
    }
  });
};

const eventResetPassword = () => {
  document
    .querySelector("#btnResetPassword")
    .addEventListener("click", resetPassword);
};


//make Authorized Request
const AuthorizedRequest = () => {
  const token = localStorage.getItem('token');
  if(token){
   
    const url = `https://ajarek-my-database-default-rtdb.europe-west1.firebasedatabase.app/todo/.json`;
    makeAuthorizedRequest("GET", url).then((res) => {
      if (res.error) {
        document.querySelector("#root").innerHTML = res.error.message;
      } else {
        document.querySelector("#root").innerHTML = "";
        document.querySelector("#root").classList.add("todo");
        render()
        
      }
    });
  } else {
    alert("You need to sign in first");
  }
};

const eventAuthorizedRequest = () => {
  document
    .querySelector("#btnAuthorizedRequest")
    .addEventListener("click", AuthorizedRequest);
};
//initiation
const initializeApp = () => {
  renderFormSignIn();
  renderFormSignUp();
  
  eventLogout();
  eventResetPassword();
  
  eventAuthorizedRequest();
  if (checkIfUserIsLoggedIn()) {
    document.querySelector('.info').innerHTML="User is logged in"}
    else {
      document.querySelector('.info').innerHTML="User is not logged in"
    }
};

initializeApp();
