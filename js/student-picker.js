"use strict";

const students = [
    "Alex",
    "Brance",
    "Sebastian",
    "Kevin",
    "Mitchell",
    "Eddy",
    "Izzy",
    "Yael",
    "John",
    "Broderick",
    "Louis",
    "Lance",
    "Matt G",
    "Annette",
    "Beverly",
    "Jason",
    "Dani",
    "Jonathan",
    "Matt L",
    "Michael",
    "Bridgett",
    "Mark M",
    "Kyndall",
    "Ryan",
    "Mark S",
    "Laura"
];

const randomIndex = Math.floor(Math.random() * (students.length - 1));
document.querySelector('#student-name').innerText = students[randomIndex];
