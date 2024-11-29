const express = require('express')
const { Pool } = require('pg');
const app = express()
const port = 3000


const pool = new Pool({
    user: 'postgres',
    host: 'db', 
    database: 'XD',
    password: 'example',
    port: 5432,
  });


app.get('/', (req, res) => {
    res.send('Hello dsñlfkañl world!')
  })

app.get('/usuarios', async (req, res) => {
    try {
      // Usar el pool para ejecutar la consulta
      const result = await pool.query('SELECT * FROM "Usuarios"'); // Reemplaza con tu consulta SQL
      res.json(result.rows); // Enviar los resultados como JSON
    } catch (err) {
      console.error('Error ejecutando la consulta', err.stack);
      res.status(500).send('Error al realizar la consulta');
    }
  });
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
