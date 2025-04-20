const app = require("./app");
const connectDB = require('./config/DatabaseConfig');
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const PORT = 3000;

console.log(`trying to listen to port ${PORT}...`);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ♡(>ᴗ•)`);
});
