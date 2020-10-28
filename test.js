const fs = require('fs');
const textArea = document.getElementById('editor');

fs.readFile('./test.js', 'utf8', function (err,data) {
  if (err) {
    return console.log('errooor', err);
  }
  textArea.value = data;
});