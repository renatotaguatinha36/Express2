const  express = require('express');

const app = express();

app.listen(3000, () => 
	console.log('SERVIDOR INICIADO NA PORTA 3000')
);

app.get('/usuarios', (req, res) => {
res.send('SERVIDOR INICIADO NA PORTA 3000');

});