"use strict";

// populate with the current cohort
const students = [];

const randomIndex = Math.floor(Math.random() * (students.length - 1));
document.querySelector('#student-name').innerText = students[randomIndex];
