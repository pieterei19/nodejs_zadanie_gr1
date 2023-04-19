const axios = require('axios');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'imiki.pl/phpmyadmin',
    user: 'zsti1',
    password: 'EciePecie666!',
    database: 'zsti1'
});

axios.get('http://imiki.pl/cf/')
    .then(function (response) {
        const data = response.data;
        const sql = 'INSERT INTO dane (temp1, temp2, temp3, Temp4, humidity) VALUES (?, ?, ?, ?, ?)';
        data.forEach(function (item) {
            connection.query(sql, [item.temp1, item.temp2, item.temp3, item.Temp4, item.humidity], function (error, results, fields) {
                if (error) throw error;
                console.log('Data saved');
            });
        });
    })
    .catch(function (error) {
        console.log(error);
    });
