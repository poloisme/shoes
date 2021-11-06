import express from "express";

const router = express.Router();

router.route("/", (req, res) => {
  res.json("oke");
});

module.exports = router;
