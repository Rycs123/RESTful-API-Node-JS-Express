const express = require("express");
const bodyParser = require("body-parser");
const dataRouter = require("./routes/data-router");
const errorHandler = require("./middleware/error");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const datas = [
  {
    nama: "Riyanda Sinambela",
    asal: "Sumatra Utara",
  },
];

app.get("/", (req, res) => {
  const { nama, asal } = datas[0]; // Mengakses objek pertama dari array
  res.status(200).json({ nama, asal });
});

// set routing
app.use("/data", dataRouter);
// set error middleware
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
