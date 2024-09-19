const generatePayments = () => {
  const names = ['Sofia Rodriguez', 'Mateo Garcia', 'Valentina Lopez', 'Santiago Martinez',
    'Isabella Hernandez', 'Diego Gonzalez', 'Camila Torres', 'Sebastián Ramirez',
    'Valeria Morales', 'Alejandro Flores', 'Luciana Castillo', 'Emiliano Vargas',
    'Mariana Rojas', 'Daniel Mendoza', 'Gabriela Ortiz'];
  const startDate = new Date('2016-06-01');
  const endDate = new Date('2024-09-19');

  return Array.from({ length: 50 }, (_, index) => {
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    return {
      id: (100000 + index).toString(),
      date: randomDate.toISOString().split('T')[0],
      description: `Payment from ${names[index % names.length]}`,
      amount: parseFloat((Math.random() * 500 + 50).toFixed(2))
    };
  }).sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort by date
};

const payments = generatePayments();

module.exports = payments;
