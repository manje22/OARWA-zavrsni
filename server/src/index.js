const app = require("./app");
const connectDB = require('./config/DatabaseConfig');
const dotenv = require("dotenv");

dotenv.config();
connectDB();

const PORT = 3000; //ovo dodajen kao taji kljuc u env


app.listen(PORT, () => {
  //console.log(`Server running on port ${PORT}`);
});
