let activity = document.querySelector("#aktivitet");
let prioritet = document.querySelector("#prioritet");
const date = document.querySelector('input[type="date"]');
let ul = document.querySelector("ul");

let array = [];

function add() {
  let todo = {
    activity: activity.value,
    prioritet: prioritet.value,
    date: date.value,
  };

  array.push(todo);

  ul.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent =
      "activity:" +
      array[i].activity +
      "\n" +
      "prioritet:" +
      array[i].prioritet +
      "\n" +
      " datum:" +
      array[i].date;
    ul.appendChild(li);
  }
  activity.value = "";
  prioritet.value = "";
  date.value = "";
  let array_text = JSON.stringify(array);
  window.localStorage.setItem("todolist", array_text);
}
function sidan_laddas() {
  let array_text = JSON.stringify(array);
  array = JSON.parse(array_text);
  ul.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent =
      "activity: " +
      array[i].activity +
      "prioritet: " +
      array[i].prioritet +
      "datum: " +
      array[i].date;
    ul.appendChild(li.textContent);
  }
}
