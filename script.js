// Skapa variabler/DOM-element
let activity = document.querySelector("#aktivitet");
let prioritet = document.querySelector("#prioritet");
const date = document.querySelector('input[type="date"]');
let div = document.querySelector("div");

// Skapa en tom array för att lagra todo-uppgifter
let array = [];

// Funktion för att lägga till en ny todo-uppgift
function add() {
  // Skapa ett nytt todo-objekt
  let todo = {
    activity: activity.value,
    prioritet: prioritet.value,
    date: date.value,
  };

  // Lägg till todo-objektet i arrayen
  array.push(todo);

  // Rensa div-elementet
  div.innerHTML = "";

  // Loopa igenom arrayen och skapa p-element för varje todo-uppgift
  for (let i = 0; i < array.length; i++) {
    let h3 = document.createElement("h3");
    h3.textContent =
      array[i].activity +
      "\n";

      let p1 = document.createElement("p");
      p1.textContent =
      array[i].prioritet +
      "\n";
      
      let p2 = document.createElement("p");
      p2.textContent =
      "Datum:" +
      array[i].date;


    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
  }

  // Rensa inmatningsfälten
  activity.value = "";
  prioritet.value = "";
  date.value = "";

  // Konvertera arrayen till en string och spara den i localStorage
  let array_text = JSON.stringify(array);
  window.localStorage.setItem("todolist", array_text);
}

// Funktion för att ladda sidan och visa todo-uppgifter från localStorage
function sidan_laddas() {
  // Hämta arrayen från localStorage och parsa den tillbaka till en array
  let array_text = window.localStorage.getItem("todolist");
  array = JSON.parse(array_text);

  // Loopa igenom arrayen och skapa p-element för varje todo-uppgift
  for (let i = 0; i < array.length; i++) {
    let h3 = document.createElement("h3");
    h3.textContent =
      array[i].activity +
      "\n";

      let p1 = document.createElement("p");
      p1.textContent =
      array[i].prioritet +
      "\n";
      
      let p2 = document.createElement("p");
      p2.textContent =
      "Datum:" +
      array[i].date;


    div.appendChild(h3);
    div.appendChild(p1);
    div.appendChild(p2);
  }
}
