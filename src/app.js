import { submitCarForm, refreshCars } from './cars';
console.log("You're awesome!");

refreshCars();

// 1. Add an event listener on the form
const form = document.querySelector('#new-car');
form.addEventListener('submit', submitCarForm);
