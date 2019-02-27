"use strict";

const students = [
    "Adrien",
    "Anwar",
    "Arash",
    "Bethany",
    "Blossom",
    "Carlo",
    "Cerissa",
    "Cory",
    "Dwight",
    "Erik",
    "James",
    "Jeremy",
    "Josh",
    "Luis",
    "Marcos",
    "Megan",
    "Mike",
    "Mindy",
    "Patrick",
    "Sabita",
    "Tim",
    "Tony",
    "Travis"
];

const randomIndex = Math.floor(Math.random() * (students.length - 1));
document.querySelector('#student-name').innerText = students[randomIndex];
