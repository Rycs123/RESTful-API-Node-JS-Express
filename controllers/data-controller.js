const {
  insertData,
  getDatas,
  updateData,
  deleteData,
} = require("../models/data-model");
const { validateData } = require("../utils/validation");
const ErrorResponse = require("../utils/errorResponse");

// create data
exports.createData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySql = "INSERT INTO identitas SET ?";

  // validasi
  var errors = validateData(data);
  if (errors) {
    return next(new ErrorResponse(errors[0], 400));
  }

  // masukkan ke dalam model
  insertData(res, querySql, data, next);
};

// show Datas
exports.readData = (req, res, next) => {
  // buat query sql
  const querySql = "SELECT * FROM identitas";

  // masukkan ke dalam model
  getDatas(res, querySql, next);
};

// update Data
exports.updateData = (req, res, next) => {
  // buat variabel penampung data dan query sql
  const data = { ...req.body };
  const querySearch = "SELECT * FROM identitas WHERE id = ?";
  const queryUpdate = "UPDATE identitas SET ? WHERE id = ?";

  // masukkan ke dalam model
  updateData(res, querySearch, queryUpdate, req.params.id, data, next);
};

// delete Data
exports.deleteData = (req, res, next) => {
  // buat query sql untuk mencari data dan hapus
  const querySearch = "SELECT * FROM identitas WHERE id = ?";
  const queryDelete = "DELETE FROM identitas WHERE id = ?";

  // masukkan ke dalam model
  deleteData(res, querySearch, queryDelete, req.params.id, next);
};
