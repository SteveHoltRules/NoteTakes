const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  console.log(body);
  const note = body;
  notesArray.push(note);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function deleteNote(query, notesArray) {
  console.log("Deleted Note id: ", query);
  const queryResult = query;
  let spliceResult = [];
  //I am calling the element at the array and calling it a query
  //What I want is the id only...How do I get the id?
  for(var i=0; i<notesArray.length; i++) {
    if(notesArray[i]===query) {
      spliceResult = notesArray.splice(i, 1);
    }
  }
  console.log("Spliced Result: ", spliceResult);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: spliceResult }, null, 2)
  );

  return spliceResult;
}

function filterByQuery(query, notesArray) {
  console.log("Query", query);
  let filteredResults = notesArray;
  return filteredResults;
}

function findOneNote(query) {
  //console log is sending back the correct queried result
  //How do I send the resulted id back as a res?
  console.log("id", query);
  filteredResults = query;
  return filteredResults;
}



module.exports = {
  createNewNote,
  filterByQuery,
  deleteNote,
  findOneNote,
};