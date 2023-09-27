const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');
const app = express();

router.get('/get', async (req, res) => {
    try {
        db.serialize(() => {        
            db.each(`SELECT nom FROM video`, (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                console.log(row)
            });
        });        
        res.send("hhaaha mieux d'ainori");
    } catch (error) {
        console.error(error);
    }
});

app.get('/api/test', (req, res) => {
    // Récupérer toutes les données de la table "test"
    db.all('SELECT * FROM video', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });

module.exports = router;