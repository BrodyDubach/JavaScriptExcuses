/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = ["My dog", "Our neighbor", "That lady", "My boss"];
  let action = ["took my", "ate my", "cooked my", "drank my"];
  let what = [
    "first kiss",
    "last chicken nugget",
    "skateboard",
    "only shirt",
    "phone"
  ];
  let where = [
    "at my new apartment",
    "in a mcdonalds",
    "in the center of the earth",
    "from my front porch"
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    where[whereIndex]
  );
};
