import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test-sass",
  templateUrl: "./test-sass.component.html",
  styleUrls: ["./test-sass.component.scss"]
})
export class TestSassComponent implements OnInit {
  hero = "Winsdstorm";
  constructor() {}

  ngOnInit() {}
}

document.addEventListener("DOMContentLoaded", contentLoaded);

window.onload = fadePage;

function contentLoaded() {
  addListeners();
  console.log("ready");
}

function fadePage() {
  let body = document.querySelector("app-test-sass body");
  body.classList.remove("fade");
  console.log("remove fade");
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
