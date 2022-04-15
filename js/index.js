"use strict";

async function fetchJson() {
  const response = await fetch("/assets/people.json");
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const people = await response.json();
  console.log(people);
  mainFun(people);
}
fetchJson().catch((error) => {
  error.message;
});

const mainFun = function (people) {
  const dbBtn = document.querySelector("#dbBtn");
  const insertBtn = document.querySelector("#insertBtn");
  const firstBtn = document.querySelector("#firstBtn");
  const lastBtn = document.querySelector("#lastBtn");
  const removeBtn = document.querySelector("#removeBtn");
  const findBtn = document.querySelector("#findBtn");

  let db;

  dbBtn.addEventListener("click", () => {
    db = new Db(people);
    console.log(db.arr);
    yourDb.textContent = JSON.stringify(db.arr, null, null);
  });

  insertBtn.addEventListener("click", () => {
    db.insert(newObj2);
    yourDb.textContent = JSON.stringify(db.arr, null, null);
  });

  firstBtn.addEventListener("click", () => {
    const firstRes = db.first();
    yourDb.textContent = JSON.stringify(firstRes);
    console.log(firstRes);
  });

  lastBtn.addEventListener("click", () => {
    const lastRes = db.last();
    yourDb.textContent = JSON.stringify(lastRes);
    // console.log(last);
  });

  removeBtn.addEventListener("click", () => {
    const rem = db.remove();
    yourDb.textContent = `your database has ${rem} entries`;
    // console.log(last);
  });

  findBtn.addEventListener("click", () => {
    const firstname = db.find("parul");
    yourDb.textContent = JSON.stringify(firstname);
    console.log(firstname);
  });
};

let newObj = [
  {
    firstName: "Jgaoe",
    lastName: "Jacksgaon",
    gender: "male",
    age: 28,
    number: "7334282382",
  },
  {
    firstName: "Jgae",
    lastName: "Jcsgaon",
    gender: "male",
    age: 23,
    number: "7334285382",
  },
];
let newObj2 = {
  firstName: "gea",
  lastName: "Jack",
  gender: "male",
  age: 22,
  number: "73322582382",
};
