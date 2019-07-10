"use strict";

const students = [
    "John De Leon",
    "Nadia",
    "Matthew Alaniz",
    "Nicholas",
    "Carson",
    "Derek",
    "Edwin",
    "John Rangel",
    "Jason",
    "Alexandra",
    "Nikho",
    "Matt Butler",
    "Josh",
    "Mykal",
    "Samuel",
    "Ricky",
    "Nathaniel",
    "Johnny",
    "Elle",
    "Ali",
    "Harley"
];

const randomIndex = Math.floor(Math.random() * (students.length - 1));
document.querySelector('#student-name').innerText = students[randomIndex];
