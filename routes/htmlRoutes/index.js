const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//I don't know if this part is required...
router.delete("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"))
});

module.exports = router;