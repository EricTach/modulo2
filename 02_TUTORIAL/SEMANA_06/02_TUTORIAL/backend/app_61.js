const express = require('express');
const sqlite3 = require('sqlite3').verbose(); 
const DBPATH = '../backend/bancocurriculo.db'; 
const port = 3061; 
const hostname = '127.0.0.1'; 
const app = express(); 
var bodyParser = require('body-parser');
const cors = require('cors');

app.use(express.static("../frontend"));
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.urlencoded({ // Irá suportar urlenconded
    extended: true
}));

app.get('/robocore', (req, res) => {
    res.statusCode = 200; 
    res.setHeader('Access-Control-Allow-Origin', '*'); //isso é importante para evitar o erro de CORS
    var db = new sqlite3.Database(DBPATH); 
    var sql = 'SELECT * FROM robocore'; 
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err; 
        }
        res.json(rows); 
        console.log (rows);
    });

});
    app.post('/robocoreinsert', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        sql =`INSERT INTO robocore (comp,lugar,data) VALUES ("${req.body.comp}",  ${req.body.lugar},  ${req.body.data})`;
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        console.log(sql);
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            else console.log(sql);
        });
        db.close(); // Fecha o banco
        res.end();
    });
/* Inicia o servidor na porta e localhost indicado na variável lá em cima*/
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

        app.delete('/robocoredelete', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        sql = `DELETE FROM robocore WHERE id = ${req.body.id}`;
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        console.log(sql);
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            else console.log(sql);
        });
        db.close(); // Fecha o banco
        res.end();
    }
    );


    app.patch('/robocoreupdate', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*');
        sql = `UPDATE robocore SET comp = '${req.body.comp}', lugar = ${req.body.lugar}, data = ${req.body.data} WHERE id = ${req.body.id}`;
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        console.log(sql);
        db.run(sql, [],  err => {
            if (err) {
                throw err;
            }
            else console.log(sql);
        }
        );
        db.close(); // Fecha o banco
        res.end();
    }
    );
