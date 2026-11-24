const title = document.getElementById("mainTitle");
const info = document.querySelector(".info");
const container = document.getElementById("container");

title.textContent = "DOM Manipulation Demo (Exp 07)";
info.textContent = "Updated paragraph content using textContent.";

const note = document.createElement("p");
note.textContent = "Dynamically created element inside #container.";
container.classList.add("highlight");
container.appendChild(note);
