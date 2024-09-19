const express = require('express');
const paymentsRouter = require('./routes/payments');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/payments', paymentsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
