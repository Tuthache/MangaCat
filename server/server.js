const connection = require("./config/connection.js");
const express = require("express");

const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);

const cors = require("cors");
const userRoutes = require("./routes/user");
const mangaRoutes = require("./routes/manga");

const app = express();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

const sessionStorageOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "Expense_Tracker",
  createDatabaseTable: true,
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
};
const sessionStorage = new MySQLStore(sessionStorageOptions, connection);
app.use(
  session({
    secret: "MangaCatalogSecret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      expires: 60 * 60,
    },
    store: sessionStorage,
  })
);

app.use("/", userRoutes);
app.use("/api", mangaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
