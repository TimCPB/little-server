import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Worldzzz!");
});

// const yo = {
//   yo: "hey",
//   yo: "hey",
//   yo: bthr,
//   heyHey: 234,
//   bfghsfth: 5656,
//   youo: "fdghkdhn",
//   heyhey: "kthrbkrth",
// };

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
