"use strict";

const students = [
    "Mark Ahrens",
    "Brandi Clinard",
    "Alexandra Conteras",
    "Jacob Erickson",
    "Austin Ghigliotty",
    "Jose Gonzalez",
    "Peter Hollman",
    "Mario Johhnson",
    "Susan Lin",
    "Kyle Maulsby",
    "Vasiliy Melkozerov",
    "Alicia Monsibais",
    "Lam Nguyen",
    "Justin Ortega",
    "Victor Pena",
    "Aaron Sifuentes",
    "Nicholas Sosa",
    "Allison Stull",
    "Steven Turner"
];

const randomIndex = Math.floor(Math.random() * (students.length - 1));
document.querySelector('#student-name').innerText = students[randomIndex];
