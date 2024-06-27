const express = require('express');
const dataRoutes = require('./routes/dataRoutes');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.use('/api', dataRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
