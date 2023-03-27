import 'dotenv/config';
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: 'hotelmiranda'
})

export function dbQuery(query:string, params:any) {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (error:any, results:any) => {
            if (error)
                reject(error);
            resolve(results);
        });
    });
}

export default connection