const express = require('express');
const path = require('path');
const app = express();

const appName= 'Meals';

const outputPath = `${__dirname}/dist/${appName}`


app.use(express.static(outputPath));


app.get("/*", (req, res) => {
  res.sendFile(`${outputPath}/index.html`);
});

// app.listen(PORT, () =>(
//   console.log('Servidor iniciado na porta ' + PORT)
//   ))

  app.listen(process.env.PORT || 8080);
