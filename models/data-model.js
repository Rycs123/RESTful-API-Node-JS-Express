const connection = require("../config/db");
const { responseData, responseMessage } = require("../utils/response-handler");
const ErrorResponse = require("../utils/errorResponse");
exports.insertData = (response, statement, data, next) => {
  // jalankan query
  connection.query(statement, data, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika request berhasil
    responseMessage(response, 201, "Berhasil insert data!");
  });
};

// get data Data
exports.getDatas = (response, statement, next) => {
  // jalankan query
  connection.query(statement, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika request berhasil
    responseData(response, 200, rows);
  });
};

// update data Data
exports.updateData = (
  response,
  searchStatement,
  updateStatement,
  id,
  data,
  next
) => {
  // jalankan query untuk melakukan pencarian data
  connection.query(searchStatement, id, (err, rows, field) => {
    // error handling
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query update
      connection.query(updateStatement, [data, id], (err, rows, field) => {
        // error handling
        if (err) {
          return response
            .status(500)
            .json({ message: "Ada kesalahan", error: err });
        }

        // jika update berhasil
        responseMessage(response, 200, "Berhasil update data!");
      });
    } else {
      return response
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
};

// delete Data
exports.deleteData = (response, searchStatement, deleteStatement, id, next) => {
  // jalankan query untuk melakukan pencarian data
  connection.query(searchStatement, id, (err, rows, field) => {
    // error handling
    if (err) {
      return response
        .status(500)
        .json({ message: "Ada kesalahan", error: err });
    }

    // jika id yang dimasukkan sesuai dengan data yang ada di db
    if (rows.length) {
      // jalankan query delete
      connection.query(deleteStatement, id, (err, rows, field) => {
        // error handling
        if (err) {
          return response
            .status(500)
            .json({ message: "Ada kesalahan", error: err });
        }

        // jika delete berhasil
        responseMessage(response, 200, "Berhasil hapus data!");
      });
    } else {
      return response
        .status(404)
        .json({ success: false, message: "Data tidak ditemukan!" });
    }
  });
};
exports.getDataById = (res, querySql, id, next) => {
  connection.query(querySql, id, (err, rows, fields) => {
    if (err) {
      return next(new ErrorResponse(err.message, 500));
    }

    if (rows.length === 0) {
      return next(new ErrorResponse(`Data with ID ${id} not found`, 404));
    }

    responseData(res, 200, rows[0]);
  });
};
