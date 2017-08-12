const History = require("../models/historyModel");

module.exports = {
  getAllHistory: (req, res, next) => {
    History.find()
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        next({ status: 500, message: err.message });
      });
  },
  addNewHistory: (req, res, next) => {
    History(req.body)
      .save()
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        next({ status: 500, message: err.message });
      });
  },
  getHistoryById: (req, res, next) => {
    const { id } = req.params;
    History.findById(id)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        next({ status: 403, message: err.message });
      });
  },
  changeHistoryInfo: (req, res, next) => {
    const { id } = req.params;
    History.findByIdAndUpdate(id, req.body)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        next({ status: 403, message: err.message });
      });
  },
  deleteHistory: (req, res, next) => {
    const { id } = req.params;
    History.findByIdAndRemove(id)
      .then(response => {
        res.send(response);
      })
      .catch(err => {
        next({ status: 403, message: err.message });
      });
  }
};
