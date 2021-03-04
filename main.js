// Creare array con i cognomi
  var surnames = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

// Chiedere il nome e inserirlo nell'array
  var surname = prompt("What is your surname?");
  surnames.push(surname);

// Stampare la lista
surnames.sort();

for (var i = 0; i < surnames.length; i++) {
  document.getElementById('list').innerHTML += "<li>" + surnames[i] + "</li>";
}

// Trovare la posizione nella quale si trova il cognome inserito
var newSurname = surnames.indexOf(surname) + 1;
document.getElementById('position').innerHTML = "Surname " + surname + " is on " + newSurname + ". place."
