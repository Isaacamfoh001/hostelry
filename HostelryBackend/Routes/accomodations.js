const {
  postAccomodation,
  getAccomodation,
  updateAccomodation,
  deleteAccomodation,
  getAccomodations,
} = require("../Controllers/accomodations");

const router = require("express").Router();

router.post("/post", postAccomodation);
router.get("/find/:id", getAccomodation);
router.get("/", getAccomodations);
router.put("/update/:id", updateAccomodation);
router.delete("/:id", deleteAccomodation);

module.exports = router;
