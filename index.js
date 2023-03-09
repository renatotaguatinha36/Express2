const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.get('/', (req, res) =>
res.status(200).send("<h3>Rotas no Express na porta 3001</h3><p>Rota '/'")
);


app.post('/usuarios', (req, res)=>{
 
     return res.json({
      
         nome: "RENATO ALVES SOARES",
         email: "renatoguara2020@gmail.com",
         idade: 51

     });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})