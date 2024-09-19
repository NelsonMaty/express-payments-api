const payments = require('../data/payments');

const filterAndPaginatePayments = (page, limit, fromDate, toDate) => {
  page = parseInt(page);
  limit = parseInt(limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  let filteredPayments = payments;

  if (fromDate && toDate) {
    filteredPayments = filteredPayments.filter(payment =>
      payment.date >= fromDate && payment.date <= toDate
    );
  }

  const paginatedPayments = filteredPayments.slice(startIndex, endIndex);

  return {
    currentPage: page,
    totalPages: Math.ceil(filteredPayments.length / limit),
    totalItems: filteredPayments.length,
    items: paginatedPayments,
  };
};

module.exports = { filterAndPaginatePayments };
