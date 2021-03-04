// Creare array con i cognomi
var surnames = ["Bianchi", "Rossi", "Perlari", "Lodigiani", "Mastrobattista", "Verdi"];

// Chiedere il nome e inserirlo nell'array
var surname = prompt("What is your surname?");
var surname = surname.charAt(0).toUpperCase() + surname.substring(1);
surnames.push(surname);

// Ordinare la lista
for (var i = 0; i < surnames.length - 1; i++) {
  for (var j = 0; j < surnames.length - 1; j++) {
    if (surnames[j] > surnames[j+1]) {
      var spot = surnames[j];
      surnames[j] = surnames[j+1];
      surnames[j+1] = spot;
    }
  }
}

// Stampare la lista
for (var i = 0; i < surnames.length; i++) {
  document.getElementById('list').innerHTML += "<li>" + surnames[i] + "</li>";
}

// Trovare la posizione nella quale si trova il cognome inserito
var indexes = [];
var i = -1;
while ((i = surnames.indexOf(surname, i+1)) != -1) {
  indexes.push(i+1);
}

document.getElementById('position').innerHTML = "Surname " + surname + " is on " + indexes + ". place."
