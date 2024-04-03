const validate = require("validate.js");

exports.validateData = (data) => {
  // user schema
  var constraint = {
    fullname: {
      presence: {
        allowEmpty: false,
      },
    },
    nrp: {
      presence: {
        allowEmpty: false,
      },
    },
    address: {
      presence: {
        allowEmpty: false,
      },
    },
    number_phone: {
      presence: {
        allowEmpty: false,
      },
    },
    email: {
      presence: {
        allowEmpty: false,
      },
      email: true,
    },
    gender: {
      presence: {
        allowEmpty: false,
      },
    },
  };

  return validate(data, constraint, { format: "flat" });
};
