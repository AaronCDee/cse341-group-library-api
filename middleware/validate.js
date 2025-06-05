const validator = require('../helpers/validate');

const saveMember = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    address: 'required|string',
    email: 'required|string',
    phone: 'required|string',
    birthday: 'required|string',
    borrowed: 'string',
    feeBalance: 'required|numeric',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveUser = (req, res, next) => {
  const validationRule = {
    firstName: 'required|string',
    lastName: 'required|string',
    email: 'required|string',
    phone: 'required|string',
    position: 'required|string',
    startDate: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveBook = (req, res, next) => {
  const validationRule = {
    ISBN: 'required|string',
    Title: 'required|string',
    Author: 'required|string',
    publicationYear: 'required|integer',
    Genre: 'string',
    Pages: 'integer',
    userRating: 'numeric'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  })
}

const saveMovie = (req, res, next) => {
  const validationRule = {
    ISBN: 'required|string',
    title: 'required|string',
    director: 'required|string',
    year: 'required|integer',
    genre: 'string',
    distributor: 'string',
    userRating: 'numeric'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  })
}

module.exports = {
  saveMember,
  saveUser,
  saveBook,
  saveMovie,
};
