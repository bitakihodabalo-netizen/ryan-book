const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('book'), (req, res) => {
    res.send('Livre téléchargé avec succès.');
});

app.get('/books', (req, res) => {
    res.send('Liste des livres');
});

app.listen(PORT, () => {
    console.log(`Serveur en fonctionnement sur le port ${PORT}`);
});
