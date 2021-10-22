const { createNewNote, filterByQuery, deleteNote, findOneNote } = require('../../lib/notes');
//In the module, animals was an array. In this sample, notes is the whole db and it is not in an array.
const { notes } = require('../../db/db');
const router = require('express').Router();

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  console.log("req.body", req.query);
  res.json(results);
});

router.post("/notes", (req, res) => {
  console.log("req.body", req.body);

  req.body.id = notes.length.toString();

  const note = createNewNote(req.body, notes);
  //The below notes function has to be created first
  // if(!validateNotes(req.body)) {
  //   res.status(400).send("The note is not properly formatted");
  // } else {
  //   const note = createNewNotes(req.body, notes);
  //   res.json(note);
  // }
  res.json(note);
});

router.get(`/notes/:id`, (req, res) => {
  const chosen = req.params.id;
  let note = findOneNote(notes[chosen]);
  res.json(note);
})

router.delete("/notes/:id", (req, res) => {
  console.log("In delete Route: req.params.id", req.params.id);
  const note = deleteNote(req.params.id, notes);
  res.json(note);
});

module.exports = router;