const b = require("benny");
const bcrypt = require("bcrypt");

b.suite(
  "bcrypt sync",

  b.add("Synchronous salting & hashing", () => {
    const salt = bcrypt.genSaltSync(10);
    bcrypt.hashSync("myspecialpassword", salt);
  }),

  b.add("Random calculation", () => {
    99000 * 9;
  }),

  b.cycle(),
  b.complete(),
  b.save({ file: "bcrypt", version: "1.0.0" }),
  b.save({ file: "bcrypt", format: "chart.html" })
);
