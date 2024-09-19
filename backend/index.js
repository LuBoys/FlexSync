// index.js

const express = require('express');
const app = express();

// Définir une route simple
app.get('/', (req, res) => {
  res.send('Hello, Backend is running!');
});

// Démarrer le serveur sur le port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
