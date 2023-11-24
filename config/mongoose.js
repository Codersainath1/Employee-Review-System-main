const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  // await mongoose.connect(`mongodb://127.0.0.1/employee_review`);
  await mongoose.connect(
    `mongodb+srv://vywaharesainath:Sainath19@cluster0.zxszkkv.mongodb.net/employee_review?retryWrites=true&w=majority`);
  console.log(`Connected to DB : employee_review`);
}

const db = mongoose.connection;

module.exports = db;
