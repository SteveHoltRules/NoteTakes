const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  console.log(body);
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function filterByQuery(query, notesArray) {
  console.log("Query", query);
  let filteredResults = notesArray;
  return filteredResults;
}

module.exports = {
  createNewNote,
  filterByQuery
};