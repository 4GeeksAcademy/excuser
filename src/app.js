/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird", "Santa Claus"];
  let action = ["ate", "peed", "crushed", "broke", "shat on"];
  let what = ["my homework", "the keys", "the car", "the bed"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "while I was on the toilet"
  ];

  let word1 = who[Math.floor(Math.random() * 5)];
  let word2 = action[Math.floor(Math.random() * 5)];
  let word3 = what[Math.floor(Math.random() * 4)];
  let word4 = when[Math.floor(Math.random() * 6)];

  let sentence = word1 + " " + word2 + " " + word3 + " " + word4 + ".";

  document.getElementById("excuse").innerHTML = sentence;
};
