const { filterAndPaginatePayments } = require('../services/paymentService');

const getPayments = (req, res) => {
  const { page = 1, limit = 10, fromDate, toDate } = req.query;
  const result = filterAndPaginatePayments(page, limit, fromDate, toDate);
  res.json(result);
};

module.exports = { getPayments };
