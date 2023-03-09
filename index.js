const express = require('express')
const app = express()
const port = 3001



app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World !')
})

app.get('/', (req, res) =>
res.status(200).send("<h3>Rotas no Express na porta 3001</h3><p>Rota '/'")
);


app.post('/usuarios', (req, res)=>{
     

     let nome = req.body.nome;
     let email = req.body.email;
     let idade = req.body.idade;
     let job = req.body.job
     return res.json({
         
         nome: nome,
         email: email,
         idade: idade,
         job: job

     });

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})