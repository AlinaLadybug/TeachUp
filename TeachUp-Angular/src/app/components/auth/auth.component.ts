import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
document.addEventListener("DOMContentLoaded", contentLoaded);

window.onload = fadePage;

function contentLoaded() {
  addListeners();
}

function fadePage() {
  let body = document.querySelector("app-auth div.fade");
  body.classList.remove("fade");
}

function addListeners() {
  let signIn = document.querySelector("a.sign-in-link");
  signIn.addEventListener("click", switchSignIn);
  let signUp = document.querySelector("a.sign-up-link");
  signUp.addEventListener("click", switchSignUp);
}

function switchSignIn() {
  let signUpForm = document.querySelector(".sign-up-form");
  signUpForm.classList.remove("active");
  let signInForm = document.querySelector(".sign-in-form");
  signInForm.classList.add("active");
}

function switchSignUp() {
  let signInForm = document.querySelector(".sign-in-form");
  signInForm.classList.remove("active");
  let signUpForm = document.querySelector(".sign-up-form");
  signUpForm.classList.add("active");
}
